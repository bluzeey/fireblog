<template>
  <div class="home">
    <BlogPost/>
    <BlogPost/>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
export default {
  name: "Home",
  components: {},
  data(){
     return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      simpleBlogPost: [
        {
          title: "This is a Filter Title!",
          blogHTML: "This is a Filter blog post title!",
          blogCoverPhoto: "beautiful-stories"
        },
         {
          title: "This is a Filter Title 2!",
          blogHTML: "This is a Filter blog post title!",
          blogCoverPhoto: "designed-for-everyone"
        }
      ],
    }
  }
};
</script>
