import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Solutions from './views/Solutions.vue';
import Features from './views/Features.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: '',
    component: Home,
    children: [{
      path: 'solutions',
      name: 'solutions',
      component: Solutions,
    }, {
      path: 'features',
      name: 'features',
      component: Features,
    }, {
      path: 'integrations',
      name: 'integrations',
      component: Solutions,
    }, {
      path: 'how-it-works',
      name: 'how-it-works',
      component: Solutions,
    },
    {
      path: '/',
      redirect: {
        name: 'solutions',
      },
    },
    ],
  }],
});
