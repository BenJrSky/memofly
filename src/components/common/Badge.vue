<template>

    <div class="w-80 mx-auto alert icon-custom-alert alert-outline-primary b-round m-5">                                            
        <i class="mdi mdi-alert-outline alert-icon"></i>
        <div class="alert-text size-14 text-center">
            {{ message }}
        </div>
    </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Badge extends Vue {

    @Prop() public message!: string;


    data(){

      if(!this.message){
        this.message = "Nessun dato!";
      }
    

      return{ 
        message: this.message,
      }
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
