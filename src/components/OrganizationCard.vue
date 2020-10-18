<template>
  <!-- <a> -->
  <q-card class="q-ma-sm" to="/Organization">
  <q-linear-progress v-if="loading" query />
    <img
      :src="
        profile != null && profile.length > 0
          ? profile
          : 'https://cdn.quasar.dev/img/mountains.jpg'
      "
    />

    <q-card-section>
      <div class="text-h6">Name: {{ name }}</div>
      <div class="text-h6">Children You Can Help: {{ children }}</div>
    </q-card-section>

    <q-separator dark />

    <q-card-actions>
      <q-btn flat @click="supportOrg" :disable="children == 0 ? true : false"
        >Support this Organization</q-btn
      >
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
    return {
      loading: false
    };
  },
  methods: {
    supportOrg() {
      this.loading = true;
      axios
        .post("http://localhost:5000/family/addChild", {
          family: this.$q.localStorage.getItem("family").email,
          organization: this.email
        })
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
            this.$q.notify({
              message: "Uh Oh! Something went wrong!",
              color: "red",
              timeout: 1500
            });
          } else {
            this.$q.notify({
              message: "We found a match!",
              color: "green",
              timeout: 1500
            });
            this.$router.push("/family/children");
          }
        })
        .catch(() => {
          console.log("fail");
          this.loading = false;
        });
    }
  }
};
</script>
