<template>
  <form >
    <div class="form-group">
      <label for="exampleInputEmail1">URL</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="url">
      <small id="emailHelp" class="form-text text-muted">Enter WP API URL.</small>
    </div>
    <div class="form-group">
      <button class="form-control btn btn-primary" @click.prevent="setURL">
        <span class="spinner-border spinner-border-sm" v-if="$store.state.loadingBtn"></span>
        Go
      </button>
    </div>
  </form>
</template>
<script>
  export default {
    data(){
      return{
        url:this.$store.state.url
      }
    },
    methods:{
      setURL(){
        this.$store.commit('setURL', this.url);
      },
    }
  }
</script>
