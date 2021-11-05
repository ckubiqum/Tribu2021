import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    theme: {
      themes: {
        primary: '#F8957E',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
        brown: '#695C5C'
      },
    },
  },

})