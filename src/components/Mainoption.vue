<template>
  <q-card class="q-ma-sm">
    <q-card-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-card-section>

    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <q-item-label>{{ title }}</q-item-label>

      <q-item-label>{{ link }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
      <router-link :to="link">View {{ title }}</router-link>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "MainOption",
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ""
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
