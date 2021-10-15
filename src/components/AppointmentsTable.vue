<template>

  <div class="row">

        <div class="col-12">
          <div class="card">
              <div class="card-body">
                  <h4 class="header-title mt-0 mb-3"></h4>
                  <FullCalendar v-bind:options="calendarOptions" v-bind:events="events"/>
              </div>
          </div>
        </div>

      <div class="col-12">
          <div class="card">
              <div class="card-body">
                  <h4 class="header-title mt-0 mb-3"></h4>
                  <div class="table-responsive browser_users">
                      <table class="table mb-0">
                          <thead class="thead-light">
                              <tr>
                                  <th class="border-top-0">Appuntamento</th>
                                  <th class="border-top-0">Ora</th>
                                  <th class="border-top-0">Durata</th>
                                  <th class="border-top-0">Collaboratore</th>
                                  <th class="border-top-0">Cliente</th>
                                  <th class="border-top-0">Numero di telefono</th>
                                  <th class="border-top-0">Prenotabile via web</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                             <tr v-for="appointment in dataAppointments" :key="appointment">   
                                  <td><i class="mdi mdi-circle-slice-8 mr-2 text-warning font-16"></i>{{ appointment.servizio }}</td>
                                  <td>{{ appointment.ora }}</td>  
                                  <td>{{ appointment.durata }}</td>   
                                  <td>{{ appointment.collaboratore }}</td>                          
                                  <td>{{ appointment.cliente.fullName }}</td> 
                                  <td>{{ appointment.cliente.phone }}</td>   

                                  <td v-if="appointment.prenotabileViaWeb=='on'" class="text-center"><i class="mdi mdi-check-circle text-success font-22"></i></td>   
                                  <td v-if="appointment.prenotabileViaWeb!=='on'" class="text-center" ><i class="mdi mdi-close-circle text-danger font-22"></i></td>                                   
                                  <td name="buttons" class="p-0">
                                      <div class="col-12 m-0">
                                          <button id="bEdit" type="button" class="btn btn-sm btn-soft-success btn-circle col-6">
                                                <router-link :to="{ name: 'Service', params: { id: appointment.id } }">
                                                    <i class="dripicons-pencil text-success"></i>
                                                </router-link>
                                          </button>
                                          <button id="bElim" type="button" class="btn btn-sm btn-soft-danger btn-circle col-6" onclick="rowElim(this);">
                                              <i class="dripicons-trash" aria-hidden="true"></i>
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                              
                          </tbody>
                      </table>   

                    <Pagination  offset="10" />

                  </div><!--end /div-->
              </div><!--end card-body-->
          </div><!--end card-->
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import itLocale from "@fullcalendar/core/locales/it";
import interactionPlugin from '@fullcalendar/interaction';
import { GETAppointments } from "../memoFly-api/GETAppointments.js";
import Pagination from './common/Pagination.vue';
import moment from 'moment';
import { Toast } from "../services/Toast.js";


@Component({
  components: {
    Pagination,
    FullCalendar
  },
})

export default class AppointmentsTable extends Vue {
  
    public appointments :any;
    public dataAppointments :any;
    public calendarOptions :any;
    public events :any;

    process(appointments:any){

        return appointments.map((appointment:any)=>{

                let cliente = {
                    fulname:"",
                    phone:""
                };

                if(appointment.cliente.name){
                    cliente.fulname = appointment.cliente.name + " "+ appointment.cliente.lastname;
                    cliente.phone = appointment.cliente.phone;
                }else{ 
                    cliente.fulname = appointment.cliente;
                }

                let ora = moment(appointment.inizio).format("hh:mm");

                return { 

                    id: appointment.id,
                    servizio: appointment.servizio,
                    ora: ora,
                    start: appointment.inizio,
                    durata: null,
                    collaboratore: null,
                    cliente: cliente,
                    prenotatoViaWeb: appointment.prenotatoViaWeb

                }

        })
        
    }

    calendarEvents(appointments:any){

        return appointments.map((appointment:any)=>{

            let title = appointment.servizio;

            if(appointment.cliente.name){
                    title += " - " + appointment.cliente.name + " "+ appointment.cliente.lastname;
            }else{ 
                title +=  appointment.cliente;
            }

            return { 
                title: title, 
                start:appointment.inizio
            }

        });

    }

    data() {

         GETAppointments()
            .then((appointmentsData:any)=>{
                this.events = this.calendarEvents(appointmentsData);
                this.calendarOptions.events = this.events;
                console.log("EVENTS")
                console.log(JSON.stringify(this.events));
                this.appointments = this.process(appointmentsData);
                this.$root.$emit('dataApi',this.appointments);
                return this.appointments
         })

        //dayGridWeek', 'timeGridDay', 'listWeek' 

        this.calendarOptions = {
            plugins: [ timeGridPlugin, dayGridPlugin, interactionPlugin ],
            locale:itLocale,
            initialView: 'timeGridDay',
            dateClick: this.handleDateClick,
            slotMinTime: "09:00:00",
            slotMaxTime: "19:00:00",
            eventTimeFormat: {
                hour: 'numeric',
                minute: '2-digit',
                hour12: false
            },
            slotLabelFormat: {
                hour: '2-digit',
                minute: '2-digit',
                meridiem: false,
                hour12: false 
            },
            events: this.events
        },


        this.$root.$on('dataOutput', (data:any) => {
            this.dataAppointments = data;
        });
        
        return {
            calendarOptions: this.calendarOptions,
            events: this.events,
            appointments: this.appointments,
            dataAppointments:this.dataAppointments
        }

        
        
    }
    

    handleDateClick(arg:any) {
        alert('date click! ' + JSON.stringify(arg))
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .fc-col-header,
    .fc-day{
        background-color: #F1F5FA;
    }

    a.fc-col-header-cell-cushion{
        height: 40px !important;
        line-height:40px;
    }

</style>
