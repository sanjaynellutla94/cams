<template>
  <div class="feature-card">
    <!-- <v-responsive> -->
    <v-container grid-list-xl :style="{ 'background-color': options.color, }">
      <v-layout v-if="!options.invert">
        <v-flex class="p-5" xl6 lg6 md6 sm12 xs12>
          <iframe width="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen height="250px" :src="options.videoUrl"></iframe>
        </v-flex>
        <v-flex xl6 lg6 md6 sm12 xs12>
          <div class="title py-4">{{options.title}}</div>
          <div class="caption">{{options.description}}</div>
        </v-flex>
      </v-layout>
      <v-layout v-else>
        <v-flex xl6 lg6 md6 sm12 xs12>
          <div class="title py-4">{{options.title}}</div>
          <div class="caption">{{options.description}}</div>
        </v-flex>
        <v-flex class="p-5" xl6 lg6 md6 sm12 xs12>
          <iframe width="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen height="250px" :src="options.videoUrl"></iframe>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- </v-responsive> -->
  </div>
</template>

<script>
export default {
  name: 'feature-card',
  data() {
    return {
    };
  },
  props: {
    options: {
      invert: Boolean,
      title: String,
      description: String,
      videoUrl: String,
      color: String,
    },
  },
  components: {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.feature-card {
  color: #fff;
}
</style>
