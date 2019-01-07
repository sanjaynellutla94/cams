<template>
  <v-responsive class="header py-5" :style="{ color: $colors.shades.white, 'background-color': '#5174d1' }">
    <v-container>
      <v-layout row wrap>
        <v-flex class="pt-2" xs12>
          Industries
          <v-divider color="white"></v-divider>
        </v-flex>
        <v-flex xs3 class="py-1 px-1" v-for="(link, linkIndex) in links" :key="linkIndex">
          <v-layout>
            <v-flex xl2 lg2 md2 sm12 xs12>
              <v-img :src="`${link.icon}`" :height="'20px'" :width="'20px'" :lazy-src="`${link.icon}`"></v-img>
            </v-flex>
            <v-flex xl8 lg8 md8 sm12 xs12>
              {{link.title}}
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex class="pt-2" xs12>
          Resources
          <v-divider color="white"></v-divider>
        </v-flex>
        <v-flex xs2 v-for="(link, linkIndex) in resources" :key="linkIndex">
          {{link.title}}
        </v-flex>
      </v-layout>
    </v-container>
  </v-responsive>
</template>

<script>
export default {
  name: 'nav-content',
  data() {
    return {
      links: [
        { icon: '/fontawesome47_2-1.svg', title: 'Communications Service Providers' },
        { icon: '/fontawesome47_2-3.svg', title: 'Government' },
        { icon: '/fontawesome47_2-4.svg', title: 'Insurance' },
        { icon: '/fontawesome47_2-7.svg', title: 'Retail' },
        { icon: '/fontawesome47_2-2.svg', title: 'Energy & Utilities' },
        { icon: '/materialicon_2.svg', title: 'Healthcare' },
        { icon: '/fontawesome47_2-6.svg', title: 'Manufacturing & High Technology' },
        { icon: '/fontawesome47_2-5.svg', title: 'Lfe Sciences' },
        { icon: '/retinaicon_1-4.svg', title: 'Financial Services' },
        { icon: '/materialicon_3-1.svg', title: 'Hospitality' },
        { icon: '/materialicon_4-2.svg', title: 'Media & Entertainment' },
        { icon: 'fontawesome47_2.svg', title: 'Transportation' },
      ],
      resources: [
        { title: 'Forums' },
        { title: 'Blog' },
        { title: 'Support' },
        { title: 'Community' },

      ],
    };
  },
  components: {
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid #fff;
}
</style>
