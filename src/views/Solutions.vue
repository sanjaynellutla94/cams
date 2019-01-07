<template>
  <div class="">
    <beyond-workflow @request-demo="showPanel = true"></beyond-workflow>
    <critical-apps></critical-apps>
    <integrations id="integrations"></integrations>
    <div class="text-xs-center primary py-5">
      <div class="title py-4" style="color: #fff;">You still have more to integrate?</div>
      <v-btn flat class="btn-cams">Contact us</v-btn>
    </div>
    <request-demo :show="showPanel" @panel-change="showPanel = !showPanel"></request-demo>
  </div>
</template>

<script>
import BeyondWorkFlow from '../components/beyond-workflows.vue';
import CriticalApps from '../components/critical-apps.vue';
import FeaturesIntegrations from '../components/features-integrations.vue';
import RequestDemo from '../components/request-demo.vue';

export default {
  name: 'home',
  data() {
    return {
      showPanel: false,
    };
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
  watch: {
    routeName: {
      immediate: true,
      handler(val) {
        if (val === 'integrations') {
          document.getElementById('integrations').scrollIntoView();
        }
      },
    },
  },
  mounted() {
    if (this.routeName === 'integrations') {
      document.getElementById('integrations').scrollIntoView();
    }
  },
  components: {
    'beyond-workflow': BeyondWorkFlow,
    'critical-apps': CriticalApps,
    integrations: FeaturesIntegrations,
    'request-demo': RequestDemo,
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
</style>
