<template>
  <ul class="PostsList">
    <li v-for="(post, index) of posts" :key="index">
      <no-ssr>
        <vueper-slides
          class="no-shadow"
          :visible-slides="1"
          :arrows-outside="false"
          :bullets="false"
          :infinite="false"
          :touchable="true"
          :dragging-distance="100"
          :fixed-height="setSliderHeight()"
          :disable-arrows-on-edges="true"
        >
          <vueper-slide v-for="(article, index) in relatedArticles"
        :key="index"
        image="https://images.freeimages.com/images/large-previews/fde/aliens-1-1373417.jpg"
        :title="article.title.rendered"</div>
          </vueper-slide>
        </vueper-slides>
      </no-ssr>
    </li>
  </ul>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import FeaturedImage from "../components/FeaturedImage";
export default {
  components: { VueperSlides, VueperSlide },
  props: {
    relatedArticles: { type: Array, required: true }
  }
};
</script>

<style>
</style>