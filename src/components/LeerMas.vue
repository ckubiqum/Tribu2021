<template>
  <div class="flex-container">
    <div class="article" v-for="(article, index) in articles" :key="index">
      <vue-friendly-iframe
        class="iframe"
        v-bind:src="'$route.params.url'"
        @load="onLoad"
        @document-load="onDocumentLoad"
      ></vue-friendly-iframe>
    </div>
  </div>
</template>

<script>
import Iframe from "./Iframe";

export default {
  components: {
    Iframe
  },
  name: "leer-mas",
  props: {
    url: { type: String, required: true }
  },
  data() {
    return {
      link: "https://i.ibb.co/4gtmqCN/Bars-1s-200px.gif",
      image: "",
      excerpt: "",
      articles: []
    };
  },
  methods: {
    getImage() {
      console.log(this.url);
      fetch(this.url)
        .then(response => response.json())
        .then(imageLink => (this.link = imageLink.source_url));
    }
  },
  created() {
    this.getImage();
  }
};
</script>
