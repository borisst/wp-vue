<template>
  <div>
    <app-card :items="items" :savedPosts="true"></app-card>
  </div>
</template>
<script>
  import Card from "./Card";
  import axios from '../axios-conf';
  export default {
    data(){
      return{
        items: [],
      }
    },
    beforeCreate() {
      this.$store.state.urlFormShow = false;
    },
    mounted() {
      axios.get('/posts.json')
        .then(response => {
          console.log(response);
          this.items = response;
        }
      )
    },
    components:{
      appCard:Card
    }
  }
</script>
