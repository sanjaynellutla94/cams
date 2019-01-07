<template>
  <div class="">
    <v-toolbar class="main-header" absolute dark>
      <v-toolbar-side-icon>
        <v-img :src="`/icons/globe.svg`" :height="'40px'" :width="'40px'" :lazy-src="`/icons/globe.svg`" class="pt-20"></v-img>
      </v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="changeNavContent"></v-toolbar-side-icon>
      <v-toolbar-items>
        <v-btn flat class="text-capitalize" v-on:click="changeRoute('solutions')">Solutions</v-btn>
        <v-btn flat class="text-capitalize" v-on:click="changeRoute('features')">Features</v-btn>
        <v-btn flat class="text-capitalize" v-on:click="changeRoute('integrations')">Integrations</v-btn>
        <v-btn flat class="text-capitalize" v-on:click="changeRoute('how-it-works')">How it works?</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat class="text-capitalize">Dashboard</v-btn>
        <v-btn flat class="text-capitalize" v-on:click="showRegister = true">Sign Up</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <sign-up :show="showRegister" @dialog-change="showRegister = !showRegister"></sign-up>
  </div>
</template>

<script>
import SignUp from './sign-up.vue';

export default {
  name: 'home',
  data() {
    return {
      showRegister: false,
      navContent: false,
    };
  },
  components: {
    'sign-up': SignUp,
  },
  methods: {
    changeNavContent() {
      this.navContent = !this.navContent;
      this.$emit('nav-content', this.navContent);
    },
    changeRoute(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style scoped lang="scss">
.main-header {
  background-color: transparent;
}
.v-toolbar {
  box-shadow: none;
}
</style>
