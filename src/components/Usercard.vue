<template>
  <!-- <a> -->
  <q-card class="q-ma-sm" to="/User">
    <img src="https://cdn.quasar.dev/img/mountains.jpg" />

    <q-card-section>
      <div class="text-h6">Name: {{ name }}</div>
      <div class="text-h6">Child #{{ id }}</div>
    </q-card-section>

    <q-separator dark />

    <q-card-actions>
      <q-btn flat to="/child">Go to User</q-btn>
      <q-btn flat>Action 2</q-btn>
    </q-card-actions>
  </q-card>
  <!-- </a> -->
</template>

<script>
export default {
  name: "UserCard",
  props: {
    name: String,
    id: Number
  },
  data() {
    return {
      newName: String,
      newId: Number
    };
  },
  // created: function() {
  //   console.log("running");
  //   this.newName = this.name;
  //   this.newId = this.id;

  //   console.log("here");
  //   console.log(this.newName);
  //   console.log(this.id);
  // }
};
</script>
