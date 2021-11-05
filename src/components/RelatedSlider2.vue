<template>
  <div>
    <!-- <div v-for="(article,i) in relatedArticles" :key="i">
      <FeaturedImage :url="article._links['wp:featuredmedia'][0].href" />
    </div>-->

    <ul class="navigator">
      <li @click="prevSlide" class="lightgrey">&laquo;</li>
      <li
        class="green"
        v-for="(article,i) in relatedArticles"
        @click="changeSlide(i)"
        :key="i"
      >{{i}}</li>
      <li @click="nextSlide" class="lightgrey">&raquo;</li>
    </ul>
    <div class="slider-container">
      <ul class="slider" :style="styleObject">
        <li class="green slide" v-for="(article,i) in relatedArticles" :key="i+'images'">Slide 1</li>
      </ul>
    </div>
  </div>
</template>



<script>
import FeaturedImage from "../components/FeaturedImage";
export default {
  props: {
    relatedArticles: { type: Array, required: true }
  },
  components: {
    FeaturedImage
  },

  data() {
    return {};
  },
  created() {
    console.log(this.relatedArticles);
  }
};
</script>




<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
  margin: 0;
}
.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: black;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: -30px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #36dfcc;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}
</style>