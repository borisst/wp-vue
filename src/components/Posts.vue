<template>
  <div>
    <app-card :items="items"  :savedPosts="false"></app-card>
  </div>
</template>
<script>
  import axios from '../axios-conf';
  import Card from "./Card";
  export default {
    data(){
      return{
        items: []
      }
    },
    watch: {
      '$store.state.url': function() {
        this.$store.state.loadingBtn = true;
        axios.get(this.$store.state.url+'/wp-json/wp/v2/posts')
          .then(response => {
            this.items = response;
            console.log(this.items);
            this.$store.state.loadingBtn = false;
          })
        .catch(response => {
          this.$store.state.loadingBtn = false;
          console.log(response);
        })
      }
    },
    beforeCreate() {
      this.$store.state.urlFormShow = true;
      this.$store.state.url = '';
    },
    components:{
      appCard:Card
    }
  }
</script>
