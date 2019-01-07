<template>
  <div class="">
    <v-responsive class="header" :style="{ color: $colors.shades.white, 'background-color': '#5174d1' }">
      <v-container fill-height>
        <v-layout align-center class="text-md-center">
          <v-flex>
            <h4 class="headline">Create sophisticated, mission critical applications</h4>
            <div class="subheading mt-4">CAMS has a unique technology that delivers repeatable solutions that can be efficiently reused and tailored to meet the requirements of diverse customers, product lines, channels, and geographies.</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
    <v-responsive>
      <v-container>
        <v-layout row wrap>
          <v-flex class="px-3 py-4" :class="getFeatureClass(feature.title && feature.icon)" v-for="(feature, featureIndex) in features" :key="featureIndex">
            <div v-if="feature.title && feature.icon">
              <v-img :src="`/${feature.icon}`" :height="'30px'" :width="'30px'" :lazy-src="`/${feature.icon}`" class="pt-20"></v-img>
              <div class="py-2 subheading">{{feature.title}}</div>
              <div class="caption">{{feature.description}}</div>
            </div>
            <div v-else>
              <feature-card :options="feature.data"></feature-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
    <div class="text-xs-center primary py-5">
      <div class="title py-4" style="color: #fff;">Schedule a demo with us Today.</div>
      <v-btn flat class="btn-cams">Schedule Demo</v-btn>
    </div>
  </div>
</template>

<script>
import FeaturesCard from '../components/feature-card.vue';
import featuresJson from '../assets/features.json';

export default {
  name: 'home',
  data() {
    return {
      features: featuresJson,
    };
  },
  components: {
    'feature-card': FeaturesCard,
  },
  methods: {
    getFeatureClass(type) {
      return type ? 'xl3 lg3 md3 sm6 xs12' : 'xl12 lg12 md12 sm12 xs12';
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  padding: 10rem;
  // padding: 10rem;
}
</style>
