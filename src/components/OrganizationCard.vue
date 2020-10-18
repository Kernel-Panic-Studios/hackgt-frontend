<template>
  <!-- <a> -->
  <q-card class="q-ma-sm" to="/Organization">
    <img :src="(profile != null && profile.length > 0) ? profile : 'https://cdn.quasar.dev/img/mountains.jpg'" />

    <q-card-section>
      <div class="text-h6">Name: {{ name }}</div>
      <div class="text-h6">Children: {{ children }}</div>
    </q-card-section>

    <q-separator dark />

    <q-card-actions>
      <q-btn flat @click="supportOrg" :disable="children == 0 ? true : false">Support this Organization</q-btn>
    </q-card-actions>
  </q-card>
  <!-- </a> -->
</template>

<script>
import axios from "axios";

export default {
  name: "OrganizationCard",
  props: {
    name: String,
    email: String,
    children: Number,
    profile: String
  },
  data() {
    return {};
  },
  methods: {
    supportOrg() {
      axios
        .post("https://hackgt.azurewebsites.net/family/addChild", {
          family: this.$q.localStorage.getItem("family").email,
          organization: this.email
        })
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
          } else {
            this.$q.notify({
              message: "You now support a child",
              color: "#21ba45",
              timeout: 1500
            });
            this.$router.push("/family/children");
          }
        })
        .catch(() => {
          console.log("fail");
        });
    }
  }
};
</script>
