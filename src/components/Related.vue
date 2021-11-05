<template>
  <div class="articles">
    <RelatedVueSlider :relatedArticles="articlesRelated" />
  </div>
</template>

<script>
// import FeaturedImage from "../components/FeaturedImage";
import RelatedVueSlider from "../components/RelatedVueSlider";

export default {
  components: {
    RelatedVueSlider
  },
  name: "Related",
  props: {
    categoria: { type: Number, required: true }
  },
  data() {
    return {
      articlesRelated: []
    };
  },
  methods: {
    getRelatedArticles() {
      fetch("https://www.magles.es/wp-json/wp/v2/posts?categories=")
        .then(response => response.json())
        .then(relatedArticles => (this.articlesRelated = relatedArticles));
    }
  },
  created() {
    this.getRelatedArticles();
  }
};
</script>
