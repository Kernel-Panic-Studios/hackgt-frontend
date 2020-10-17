<template>
  <!-- <a> -->
    <q-card class="q-ma-sm" to="/User">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />

      <q-card-section>
        <div class="text-h6">Child #{{ index }}</div>
        <div class="text-subtitle2">Manage</div>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat to="/parent/child">Go to User</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  <!-- </a> -->
</template>

<script>
export default {
  name: "Usercard",
  props: {
    index: Number,
  },
  data() {
    return {};
  }
};
</script>
