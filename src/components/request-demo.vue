<template>
  <v-navigation-drawer :value="show" right absolute>
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex xs12>
          <v-layout class="title" xs10>
            <v-flex>Request a Demo</v-flex>
            <v-flex xs2>
              <a class="pr-2" @click="panelChange(false)">X</a>
            </v-flex>
          </v-layout>
          <v-text-field label="First Name" required></v-text-field>
          <v-text-field label="Last Name"></v-text-field>
          <v-text-field label="Email"></v-text-field>
          <v-text-field label="Phone"></v-text-field>
          <v-select :items="[]" label="Select your country"></v-select>
          <v-btn class="mx-0" color="primary" @click="panelChange(false)">Submit</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'request-demo',
  data() {
    return {};
  },
  props: {
    show: Boolean,
  },
  computed: {
  },
  components: {},
  methods: {
    panelChange(data) {
      this.$emit('panel-change', data);
    },
  },
};
</script>

<style scoped lang="scss">
.main-header {
  background-color: transparent;
}
</style>
