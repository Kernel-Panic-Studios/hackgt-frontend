<template>
  <q-page class="flex flex-center">
    <h1>{{ name }}</h1>
    <h2>This is where fmailies/organizations see the children</h2>
    <q-btn @click="loadData()">Get data</q-btn>
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-sm">
        <q-intersection v-for="index in 6" :key="index" class="example-item">
          <Usercard v-bind:index="index" />
          <!-- <q-card class="q-ma-sm">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />

            <q-card-section>
              <div class="text-h6">Child #{{ index }}</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card> -->
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import Usercard from "components/Usercard.vue";
import axios from "axios";

export default {
  components: { Usercard },
  name: "Users",

  props: {
    name: String
  },
  methods: {
    loadData() {
      axios
        .get("https://hackgt.azurewebsites.net/family", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET",
            "Access-Control-Allow-Credentials": 'true'
          }
        })
        .then(response => {
          this.data = response.data;
          console.log(this.data[0].name);
        })
        .catch(() => {
          // this.$q.notify({
          //   color: "negative",
          //   position: "top",
          //   message: "Loading failed",
          //   icon: "report_problem"
          // });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.example-item {
  height: 350px;
  width: 290px;
}
</style>
