<template>
  <q-btn :to="link" replace>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
  </q-btn>
</template>

<script>
export default {
  name: "FindOrganization",
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "#"
    },
    icon: {
      type: String,
      default: ""
    }
  }
};
</script>
