<template>
  <div class="articles">
    <div class="article" v-for="(article, index) in articles" :key="index">
      <div class="image">
        <FeaturedImage :url="article._links['wp:featuredmedia'][0].href" />
      </div>
      <div class="content">
        <div class="title">
          <h1 class="article-title">{{article.title.rendered.substring(0,40)}} ...</h1>
        </div>
        <div>
          <p class="article-date">{{article.date.substring(0,10)}}</p>
          <span class="intro-text" v-html="article.excerpt.rendered.substring(0,200)"></span>

          <!-- router-link :to is to open a new view frame -->
          <!-- script to replace "/" in the url so vue does not think it is another vue instance. -->

          <router-link :to="`/iframe/${article.link.replace(new RegExp('/', 'g'), 'ç')}`">
            <button class="leer-mas">LEER MÁS</button>
          </router-link>
        </div>
      </div>
      <div class="related-art">
        <v-divider class="divider" />
        <p class="related">ARTÍCULOS RELACIONADOS</p>
        <Related :categoria="article.categories[0]" />
      </div>
    </div>
  </div>
</template>

<script>
import Related from "../components/Related";
import FeaturedImage from "../components/FeaturedImage";
export default {
  components: {
    FeaturedImage,
    Related
  },
  data() {
    return {
      image: "",
      excerpt: "",
      articles: []
    };
  },
  methods: {
    getArticles() {
      fetch("https://www.magles.es/wp-json/wp/v2/posts")
        .then(response => response.json())
        .then(articlesData => (this.articles = articlesData));
    }
  },
  name: "Articles",
  created() {
    this.getArticles();
  }
};
</script>

<style scoped>
@media (min-width: 400px) {
  .articles {
    width: 70%;
  }
  .article-title {
    position: relative;
    margin-top: -200px;
    color: white;
    width: 60%;
  }
  .article-date {
    color: black;
    font-weight: 700;
    font-size: 20px;
    padding-top: 100px;
  }
  .content {
    margin-left: 15px;
    margin-right: 4px;
  }
}
@media (max-width: 400px) {
  .intro-text {
    margin-top: 20px;
    font-size: 20px;
  }
  .image {
    padding-top: 5em;
  }
  .article-title {
    position: absolute;
    margin-top: -80%;
    line-height: 1em;
    width: 72%;
    color: white;
    text-shadow: 5px 5px 8px black;
  }
  .leer-mas {
    background-color: #36dfcc;
    color: white;
    font-size: 20px;
    font-weight: 700;
    margin: 12px;
    padding: 8px;
    float: right;
    border-width: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19);
  }
  .theme--light.v-divider {
    border-color: rgba(0, 0, 0, 0.604);
    width: 100%;
    margin-left: 0%;
    margin-top: 90px;
  }
  .article {
    background-image: url("../assets/background-articles.svg");
    background-size: contain;
  }
  .article-date {
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
  .content {
    margin-left: 15px;
    margin-right: 4px;
  }
  .related {
    padding-top: 20px;
    color: #695c5c;
    font-size: 27px;
  }
  .related-art {
    padding-bottom: 10px;
    margin: 15px;
  }
  .divider {
    margin-top: 80px;
  }
}
</style>