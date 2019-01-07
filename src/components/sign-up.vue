<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-layout row wrap class="pt-3">
        <v-flex class="pl-5">
          <v-img :src="`pixleicon_1-1.svg`" :height="'50px'" :width="'50px'" :lazy-src="`pixleicon_1-1.svg`"></v-img>
        </v-flex>
        <v-flex class="text-xs-right pr-5">
          <a color="primary" @click="dialog = false">
            <i class="fa fa-times"></i>
          </a>
        </v-flex>
      </v-layout>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field placeholder="Email" required></v-text-field>
              <v-text-field placeholder="Password"></v-text-field>
              <v-btn class="mx-0" block color="primary" @click="dialog = false">Sign In</v-btn>
            </v-flex>
            <v-flex xs12>
              <a color="primary" @click="dialog = false">Forgot Password?</a>
            </v-flex>
            <v-flex xs12>
              Dont have an account yet?
              <a color="primary" @click="dialog = false">Sign Up</a>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'sign-up',
  data() {
    return {};
  },
  props: {
    show: Boolean,
  },
  computed: {
    dialog: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit('dialog-change', val);
      },
    },
  },
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.main-header {
  background-color: transparent;
}
</style>
