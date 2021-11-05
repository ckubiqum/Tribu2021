<template>
  <div>
    <Carousel>
      <Slide class="slide" v-for="(article, index) in relatedArticles" :key="index">
        <div class="featured-image">
          <router-link :to="`/iframe/${article.link.replace(new RegExp('/', 'g'), 'ç')}`">
            <FeaturedImage :url="article._links['wp:featuredmedia'][0].href" />
          </router-link>
        </div>
        <router-link :to="`/iframe/${article.link.replace(new RegExp('/', 'g'), 'ç')}`">
          <h2>{{article.title.rendered.substring(0,40)}}...</h2>
        </router-link>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import FeaturedImage from "../components/FeaturedImage";

export default {
  props: {
    relatedArticles: { type: Array, required: true }
    // url: { type: String, required: true }
  },

  components: {
    Carousel,
    Slide,
    FeaturedImage
  },
  data() {
    return {
      image: "",
      excerpt: "",
      articles: [],
      link: "https://i.ibb.co/4gtmqCN/Bars-1s-200px.gif"
    };
  },

  methods: {
    getArticles() {
      fetch("https://www.magles.es/wp-json/wp/v2/posts")
        .then(response => response.json())
        .then(articlesData => (this.articles = articlesData));
    },
    getImage() {
      console.log(this.url);
      fetch(this.url)
        .then(response => response.json())
        .then(imageLink => (this.link = imageLink.source_url));
    }
  },

  created() {
    this.getArticles();
    // this.getImage();
  }
};
</script>

<style scoped>
h2 {
  font-size: 18px;
  font-weight: 500;
  line-height: 1em;
  color: black !important;
}

a:link {
  text-decoration: none;
}
div >>> img.featured-image {
  width: 100%;
  height: 120px !important;
}
.slide {
  margin-right: 5px;
}
</style>
