<template>

    <div class="dialog right" v-bind:class="dialog.statusClass" id="modalAbandonedCart" tabindex="1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true" data-backdrop="false">
      <div class="modal-dialog modal-side modal-bottom-right modal-notify modal-info" role="document">
        <!--Content-->
        <div class="modal-content">
          <!--Header-->
          <div class="modal-header">
            <h5 class="heading">{{dialog.title}}</h5>

            <button type="button" class="close align-self-center" data-dismiss="modal" aria-label="Close" v-on:click="cancel()">
              <span aria-hidden="true" class="white-text text-danger">&times;</span>
            </button>
          </div>

          <!--Body-->
          <div class="modal-body">

            <div class="row">
              <div class="col-3">
                <p></p>
                <p class="text-center"><i class="fa-4x" v-bind:class="dialog.icon"></i></p>
              </div>

              <div class="col-9">
                {{dialog.message}}
              </div>
            </div>
            
          </div>

          <!--Footer-->
          <div class="modal-footer justify-content-center col-12">
            <div class="col-2"></div>
            <a type="button" class="col-3 btn btn-primary text-white" v-on:click="confirm()">{{dialog.confirm}}</a>
            <div class="col-2"></div>
            <a type="button" class="col-3 btn btn-danger text-white waves-effect" data-dismiss="modal" v-on:click="cancel()">{{dialog.cancel}}</a>
            <div class="col-2"></div>
          </div>
        </div>
        <!--/.Content-->
      </div>
    </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
    public type!: string;
    public statusClass!: string;
    public dialog: any;

    data(){

        this.init();
        this.listener();
        
        return { 
          type: this.type,
          statusClass: this.statusClass,
          dialog: this.dialog,
        }

    }
    
    init(){

        this.dialog = {
          status: "",
          type:"",
          statusClass: "close",
          icon: "",
          title: "Azione necessaria",
          message: "Confermi l'azione?",
          confirm: "conferma", 
          cancel: "annulla", 
        }

        this.set();

    }

    set(){

        switch(this.dialog.type){
            case "info":
              this.dialog.icon = "fas fa fa-info text-info";
            break;
            case "warning":
              this.dialog.icon = "fa fa-exclamation text-warning";
            break;
            case "danger":
              this.dialog.icon = "fa fa-times text-danger";
            break;
            case "success":
              this.dialog.icon = "fa fa-check text-success";
            break;
            default:
              this.dialog.icon = "fa fa-cloud text-secondary"
        }

        switch(this.dialog.status){
          case "open":
            this.dialog.statusClass = "dialog-open";
          break;
          case "close":
            this.dialog.statusClass = "dialog-close";
          break;
          default:
            this.dialog.statusClass = "dialog-close";
        }


    }

    listener(){

         this.$root.$on('dataDialog', (options:any) => {

          if(options.status){
             this.dialog.status = options.status;
          }

          if(options.title){
             this.dialog.title = options.title;
          }

          if(options.message){
             this.dialog.message = options.message;
          }

          if(options.type){
             this.dialog.type = options.type;
          }


           this.set();

         })

    }

    confirm(){
      this.dialog.status = "close";
      this.set();
      this.$root.$emit('dialogResponse',true);
      this.$root.$off('dialogResponse');
      this.$root.$off('dialogData');
    }

    cancel(){
      this.dialog.status = "close";
      this.set();
      this.$root.$emit('dialogResponse',false);
      this.$root.$off('dialogResponse');
      this.$root.$off('dialogData');
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.dialog{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
    background: rgb(128 128 128 / 70%);
  }

  .dialog-open{
    display: block;
  }

  .dialog-close{
    display: none;
  }


  .modal-dialog{
    top:25%;
  }

</style>
