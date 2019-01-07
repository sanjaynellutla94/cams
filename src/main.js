import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuetify);

Vue.prototype.$colors = colors;

// {
//   theme: {
//     primary: '#5174d1', // #E53935
//     secondary: colors.red.lighten4, // #FFCDD2
//     accent: colors.indigo.base, // #3F51B5
//   },
// }

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
