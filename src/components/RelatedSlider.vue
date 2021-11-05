<template>
  <v-app>
    <vueper-slides class="no-shadow" :visible-slides="3" :slide-ratio="1/4" :dragging-distance="70">
      <vueper-slide
        v-for="(article, index) in relatedArticles"
        :key="index"
        :image="foo"
        :title="index"
      >{{get(article._links['wp:featuredmedia'][0].href)}}</vueper-slide>
    </vueper-slides>
  </v-app>
</template>

<script>
var mixin = () => {
  return {
    data: function() {
      return {
        message: "hello",
        foo: ""
      };
    },
    methods: {
      get(si) {
        console.log("IN", si);
        fetch(si)
          .then(response => response.json())
          .then(commits => {
            this.foo = commits.source_url;
            console.log(this.foo);
          });
      }
    },
    created() {
      console.log("created");
    }
  };
};
import { VueperSlides, VueperSlide } from "vueperslides";
import FeaturedImage from "../components/FeaturedImage";
export default {
  components: { VueperSlides, VueperSlide },
  props: {
    relatedArticles: { type: Array, required: true }
  },
  mixins: [mixin()],
  data() {
    return {};
  },
  created() {
    console.log(this.relatedArticles);
  }
};
</script>
<style scoped>
.no-shadow {
  width: 100%;
}
.v-application--wrap {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 0vh;
  max-width: 100%;
  position: relative;
}
</style>