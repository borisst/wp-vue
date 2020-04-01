import Posts from "./components/Posts";
import PostsSaved from "./components/PostsSaved";

export const routes = [
  {
   path: '/',
   component:Posts
  },
  {
   path: '/posts',
   component:PostsSaved
  },
]
