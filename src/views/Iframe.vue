<template>
  <div class="flex-container">
    <iframe id="my-iframe" scrolling="yes" :src="getUrl"></iframe>
  </div>
</template>

<script>
import Iframe from "./Iframe";
import { log } from "util";
export default {
  components: {
    Iframe
  },
  props: ["url"],
  computed: {
    getUrl() {
      console.log(this.url);
      return this.url.replace(new RegExp("ç", "g"), "/");
    }
  },
  created() {
    console.log(document.querySelector("iframe"));
  }
};
</script>
<style scoped>
#my-iframe {
  /* border-width: 0px;
  visibility: visible; */
  /* width: 100vw !important;
  height: 100vh !important; */
  /* background-color: white;
  margin-top: -50px;
  overflow: hidden; */

  /* position: absolute;
  top: 0px;
  left: 0px; */
  height: 700px;
  min-width: 100%;
  width: 1px;
}
</style>