<template>
  <div class="bg-main">
    <v-responsive :style="{ color: $colors.shades.white }">
      <v-container fill-height>
        <v-layout align-center class="text-md-center">
          <v-flex>
            <div v-if="$route.name !== 'how-it-works'">
              <h4 class="display-1">Built to go beyond workflows.</h4>
              <div class="headline mt-4">CAMS is a unified and dynamic case management platform for a diverse service lines.</div>
              <v-btn class="mx-0 my-5 btn-cams" flat v-on:click="$emit('request-demo', true)" large>
                Request Demo
              </v-btn>
            </div>
            <div class="mx-auto" v-else>
              <iframe width="50%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen height="250px" src="https://www.youtube.com/embed/2T4-C_Crnoc"></iframe>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
  </div>
</template>

<script>
export default {
  name: 'beyond-workflow',
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.bg-main {
  padding-top: 10rem;
  height: 70vh;
  max-height: 70vh;
  overflow-y: auto;
  background: url(/images/bg-main.png) 50% fixed;
  background-blend-mode: multiply;
  // mix-blend-mode: normal;
  // background-repeat: no-repeat, repeat;
  background-color: #5174d1;
  // opacity: 1;
  background-size: cover;
}
</style>
