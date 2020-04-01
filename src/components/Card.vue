<template>
  <div class="card-columns">
    <transition-group name="fade" mode="out-in">
      <div class="card" v-for="(post,k,i) in items.data" :key="k"
           style="animation-duration: 0.5s"
           :id="'card_'+i"
           @mouseover="isHovering  = i"
           @mouseleave="isHovering  = null"
           @click="savePost(post)"
           :class="{'shadow-lg':isHovering == i}">
        <img src="https://i.picsum.photos/id/534/200/200.jpg" class="card-img-top"
             alt="https://i.picsum.photos/id/534/200/200.jpg">
        <span class="glyphicon glyphicon-ok"></span>
        <div class="card-body">
          <h5 class="card-title">{{post.title.rendered}}</h5>
          <p class="card-text" v-html="post.excerpt.rendered"></p>
          <p class="card-text text-right font-italic"><small class="text-muted">--Created {{post.date |
            created_at}}</small></p>
          <button v-if="savedPosts" @click="removePost(k)" class="btn btn-danger">Delete</button>
          <a :href="post.link" v-if="savedPosts" class="btn btn-primary" target="_blank">View</a>
        </div>
      </div>
    </transition-group>
  </div>

</template>
<script>
  import axios from '../axios-conf';

  export default {
    props: {
      items: null,
      savedPosts: false
    },
    data() {
      return {
        isHovering: null
      }
    },
    methods: {
      savePost(post) {
        if (!this.savedPosts) {
          axios.post('/posts.json', post)
            .then(response => {
              console.log(response)
            }).catch(response => {
            console.log(response)
          })
        }
      },
      removePost(id) {
        axios.delete('/posts/' + id + '.json').then(response => {
          console.log(response);
          //remove card
        });
        delete this.items.data[id];
        console.log(id);
      }
    }
  }
</script>
<style>
  .card {
    cursor: pointer;
  }
</style>
