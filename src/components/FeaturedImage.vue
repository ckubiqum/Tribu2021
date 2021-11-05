<template>
  <div>
    <img class="featured-image" :src="link" alt="image article" />
  </div>
</template>

<script>
export default {
  name: "FeaturedImage",
  props: {
    url: { type: String, required: true }
  },
  data() {
    return {
      link: "https://i.ibb.co/4gtmqCN/Bars-1s-200px.gif"
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

<style scoped>
.featured-image {
  width: 100%;
  height: 230px;
}
</style>