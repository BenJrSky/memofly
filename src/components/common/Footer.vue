<template>
    <footer class="footer text-center text-sm-left">
        &copy; 2021 Memofly <span class="text-muted d-none d-sm-inline-block float-right">MemoFly è un prodotto <a href="https://www.flyip.it">Flyip.it</a></span>
    </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  @Prop() private title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
