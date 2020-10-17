<template>
  <router-link class="index-link center-all" :to="link">
    <q-card class="q-ma-sm center-all option">
      <q-card-section class="index-icon-section" v-if="icon" avatar>
        <q-icon class="index-icon" :name="icon" />
      </q-card-section>

      <q-card-section>
        <div class="text-h3">{{ title }}</div>
        <!-- <router-link class='index-link' :to="link">View {{ title }}</router-link> -->
      </q-card-section>
    </q-card>
  </router-link>
</template>

<script>
export default {
  name: "MainOption",
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "/"
    },
    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
