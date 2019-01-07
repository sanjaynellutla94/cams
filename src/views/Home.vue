<template>
  <div class="">
    <nav-header @nav-content="navContent = !navContent"></nav-header>
    <nav-content v-if="navContent"></nav-content>
    <router-view></router-view>
    <div class="text-xs-center my-4">
      <v-btn outline color="indigo">Go To Top</v-btn>
      <p class="caption  mt-4">
        2016 GCOM Software. All Rights Reserved
      </p>
    </div>
  </div>
</template>

<script>
import NavHeader from '../components/nav-header.vue';
import NavContent from '../components/nav-content.vue';

export default {
  name: 'home',
  data() {
    return {
      navContent: false,
    };
  },
  components: {
    'nav-header': NavHeader,
    'nav-content': NavContent,
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
</style>
