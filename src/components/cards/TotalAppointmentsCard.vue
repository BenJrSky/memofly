<template>

    <div class="w-100 d-flex">
        <div class="w-100 card report-card">
            <div class="card-body">
                <div class="row d-flex h-100 justify-content-center">
                    <div class="col-12">
                        <h4 class="titolo-label mb-4 weight-700 size-16">Totale appuntamenti</h4>
                    </div>
                    <div class="col-12">
                        <h3 class="m-0 text-right mb-0 size-33 weight-700">{{today}}</h3>
                    </div>
                    <div class="col-4 align-self-end">
                        <div class="">
                          <svg width="59" height="49" viewBox="0 0 59 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.153905 43.1699C-0.335933 35.1698 4.72573 30.7616 9.54247 29.6187C10.6038 29.3738 11.6651 29.2921 12.7264 29.2921C18.8494 29.2921 25.054 29.2921 31.177 29.2921C38.7695 29.2921 43.8311 34.4351 43.9128 42.027C43.9128 43.4148 43.9944 44.7209 43.9128 46.1087C43.8311 47.6598 43.0147 48.721 41.3819 48.721C39.9124 48.721 39.096 47.6598 39.0144 46.1903C38.9327 44.7209 39.0144 43.2515 39.0144 41.7005C38.9327 37.2106 35.9121 34.1902 31.4219 34.1902C25.054 34.1902 18.6861 34.1902 12.3182 34.1902C7.99131 34.1902 4.97065 37.2106 4.88901 41.6189C4.88901 43.0883 4.88901 44.5577 4.88901 46.1087C4.80737 47.6598 4.07261 48.8026 2.43982 48.721C0.807023 48.721 0.0722656 47.5781 0.0722656 46.0271C0.153905 45.0475 0.153905 44.1495 0.153905 43.1699Z" fill="#FB4297"/>
                            <path d="M34.2798 12.2308C34.2798 19.0064 28.8916 24.4759 22.1155 24.4759C15.421 24.4759 9.95117 19.0881 9.95117 12.3941C9.95117 5.61847 15.3394 0.149002 22.1155 0.149002C28.8099 0.149002 34.2798 5.53684 34.2798 12.2308Z" fill="#FB4297"/>
                            <path d="M48.8937 12.3938C48.8937 17.6183 45.4648 22.2715 40.4848 23.8225C38.9336 24.3123 37.5458 24.2307 36.9743 22.598C36.3212 20.9653 37.2192 19.9041 38.7704 19.3327C42.1176 18.1898 44.0769 15.8224 43.9953 12.2305C43.9953 8.80189 42.1176 6.43451 38.7704 5.29164C37.3009 4.80183 36.3212 3.74059 36.9743 2.02628C37.6274 0.393604 38.9336 0.230336 40.4848 0.72014C45.4648 2.35282 48.8937 7.08758 48.8937 12.3938Z" fill="#FB4297"/>
                            <path d="M58.6076 43.2516C58.6076 44.2312 58.6076 45.1292 58.6076 46.1088C58.5259 47.6599 57.7095 48.7211 56.0767 48.7211C54.6072 48.7211 53.7908 47.6599 53.7092 46.1905C53.6275 44.7211 53.7092 43.2516 53.7092 41.7006C53.6275 38.1903 51.9948 35.823 48.7292 34.5985C47.178 34.027 46.0351 33.129 46.5249 31.3331C46.9331 29.7821 48.4026 29.3739 50.362 30.027C55.8318 31.9045 58.6076 36.3944 58.6076 43.2516Z" fill="#FB4297"/>
                            <path d="M22.1151 19.5777C18.0332 19.5777 14.7676 16.3124 14.7676 12.2307C14.7676 8.23062 18.1148 4.88363 22.1151 4.96527C26.0339 4.96527 29.2994 8.23062 29.3811 12.149C29.4627 16.2307 26.1971 19.5777 22.1151 19.5777Z" fill="#FEFEFE"/>
                          </svg>

                        </div>
                    </div>
                    <div class="col-8 align-items-baseline">
                        <p class="mb-0 text-truncate text-right right-0 bottom-0 mr-3 text-muted weight-400 size-14">ieri {{yesterday}} appuntamenti</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETCountAppointments } from "../../memoFly-api/dashboard/GETCountAppointmnets";


@Component({
  components: {

  },
})

export default class TotalAppointmentsCard extends Vue {

    public today :number = 0;
    public yesterday :number = 0;


    data() {

        this.init();

        return{
            today: this.today,
            yesterday: this.yesterday
        }

    }

    init(){

        this.today = 0;
        this.yesterday = 0;

        GETCountAppointments()
            .then((dataAppointments:any)=>{
                if(dataAppointments.data){
                    this.today = dataAppointments.data.conteggioAppuntamenti.oggi;
                    this.yesterday = dataAppointments.data.conteggioAppuntamenti.settimanaScorsa;
                }else{
                    this.today = 0;
                    this.yesterday = 0;
                }
            })



    }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
