<template>
  <!-- <div class=""> -->
  <!-- <v-responsive> -->
  <v-container>
    <!-- <v-layout row wrap>
    </v-layout> -->
    <v-layout class="mx-5 my-5" row wrap>
      <v-flex x12 lg12 md12 sm12 xs12 class="text-xs-center">
        <h4 class="title">Featured Integrations</h4>
        <div class="subheading mt-4">Plug your favourite tools to make CAMS even more powerful</div>
      </v-flex>
      <v-flex class="px-5 py-3" x4 lg4 md4 sm6 xs6 v-for="(item, index) in integrations" :key="index">
        <v-hover>
          <v-card slot-scope="{ hover }" class="integration-card" :style="{ 'background-color': hover ? item.color : '#fff' }">
            <v-card-title>
              <div class="pb-4" :style="{ 'color': !hover ? item.color : '#fff' }">
                <div class="pb-1">
                  <i :class="[item.icon]"></i>
                </div>{{item.title}}
              </div>
              <div class="caption" :style="{ 'color': !hover ? '' : '#fff' }">
                {{item.description}}
              </div>
            </v-card-title>
            <v-card-actions class="pl-3">
              <a class="caption font-weight-thin" :style="{ 'color': !hover ? item.color : '#fff' }">
                Learn More
              </a>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'critical-apps',
  data() {
    return {
      integrations: [
        {
          title: 'Microsoft Flow', hoverTitle: 'Email Marketing', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', icon: 'fa fa-envelope', color: '#3ea9f5',
        },
        {
          title: 'Quickbooks', hoverTitle: 'Marketing Automation', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', icon: 'fa fa-flag', color: '#d1a8ed',
        },
        {
          title: 'OneDrive', hoverTitle: 'Production', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', icon: 'fa fa-video-camera', color: '#56be8e',
        },
        {
          title: 'DropBox', hoverTitle: 'Productivity', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', icon: 'fa fa-clock-o', color: '#faa928',
        },
        {
          title: 'SharePoint', hoverTitle: 'Sales', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', icon: 'fa fa-shopping-basket', color: '#3769cc',
        },
        {
          title: 'Google Drive', hoverTitle: 'Support', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum', icon: 'fa fa-file-text-o', color: '#f27398',
        },
      ],
    };
  },
  components: {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.integration-card {
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-size: cover;
  // padding-left: 10px;
  // padding-right: 10px;
  .i-title {
  }
  .i-description {
  }
  .i-action {
  }
}
// .bg-yellow {
//   border: 1px solid #cccccc;
//   border-radius: 5px;
//   background-color: #faa928;
//   color: #ffff;
//   background-size: cover;
// }
// .bg-primary {
//   border: 1px solid #cccccc;
//   border-radius: 5px;
//   background-color: #3769cc;
//   color: #ffff;
//   background-size: cover;
// }
</style>
