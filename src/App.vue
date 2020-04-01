<template>
  <div>
    <app-header></app-header>

    <div class="container">
      <app-form-url v-if="$store.state.urlFormShow"></app-form-url>
      <router-view></router-view>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import FormURL from "./components/FormURL";
  export default {
    data() {
      return {}
    },
    components: {
      appHeader: Header,
      appFooter: Footer,
      appFormUrl: FormURL
    }
  }
</script>

<style>

</style>
