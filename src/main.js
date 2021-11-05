import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll)
Vue.config.productionTip = false

new Vue({
  store: store,
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyCSurpqPwhYbohXq2Orjutq_G5qbv5fhBA",
      authDomain: "tribu-f0964.firebaseapp.com",
      databaseURL: "https://tribu-f0964.firebaseio.com",
      projectId: "tribu-f0964",
      storageBucket: "",
      messagingSenderId: "206760418821",
      appId: "1:206760418821:web:694af22877571582d0466c",
      measurementId: "G-1K28LJ1FVY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }
}).$mount('#app')