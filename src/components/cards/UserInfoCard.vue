<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <UserDetails/>
                <AccountDetails/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserDetails from  './../cards/UserDetails.vue';
import AccountDetails from './../cards/AccountDetails.vue';

@Component({
  components: {
      UserDetails,
      AccountDetails
  },
})

export default class UserInfoCard extends Vue {

  public company: any = {};
  public test :any;


 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
