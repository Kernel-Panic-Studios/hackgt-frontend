<template>
  <q-card class="q-ma-sm q-mb-md center-all" to="/User">
    <img :src="(child.profile_pic != null && child.profile_pic.length > 0) ? child.profile_pic : 'https://cdn.quasar.dev/img/mountains.jpg'" />

    <q-card-section>
      <div class="text-h6 child-card-info">
        {{ child.name }}
      </div>
      <!-- <div class="text-h6">Child #{{ id }}</div> -->
    </q-card-section>

    <q-separator light />

    <q-card-actions class="user-card-buttons">
      <q-btn
        class="user-card-button primary-border q-ma-sm"
        flat
        v-if="family != null && child.family != null"
        @click="viewChild"
        >View Child</q-btn
      >
      <q-btn
        class="user-card-button primary-border q-ma-sm"
        v-if="type == 'organization' && family != null && child.family != null"
        flat
        @click="expanded = !expanded"
        >Log In</q-btn
      >
      <q-btn
        class="user-card-button primary-border q-ma-sm full-width"
        v-if="type == 'organization' && (family == null || child.family == null)"
        flat
        disabled
        >No Supporting Family Yet</q-btn
      >
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">
          <q-input filled v-model="newId" label="Your ID">
            <template v-slot:after>
              <q-btn round dense flat icon="login" @click="login" />
            </template>
          </q-input>
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script>
import axios from "axios";

export default {
  name: "UserCard",
  props: {
    child: Object,
    type: String,
    family: Object,
    profile: String
  },
  data() {
    return {
      newName: String,
      newId: Number,
      expanded: false
    };
  },
  mounted() {
    this.newId = null;
    console.log(this.family);
  },
  methods: {
    login() {
      console.log("hi");
      if (this.newId != this.child.id) {
        console.log("fail");
        return;
      }
      axios
        .post("https://hackgt.azurewebsites.net/login", {
          id: this.newId,
          organization: this.$q.localStorage.getItem("organization").email,
          type: "child"
        })
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
          } else {
            console.log(this.data.type);
            this.$q.localStorage.set("child", this.data);
            this.$q.localStorage.set(
              "prevType",
              this.$q.localStorage.getItem("type")
            );
            this.$q.localStorage.set("type", "child");
            this.$router.push("/user/index");
          }
        })
        .catch(() => {
          console.log("fail");
        });
    },
    viewChild() {
      axios
        .get("https://hackgt.azurewebsites.net/child/" + this.child.id)
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
          } else {
            this.$q.localStorage.set("child", this.data);
            this.$q.localStorage.set(
              "prevType",
              this.$q.localStorage.getItem("type")
            );
            if (this.$q.localStorage.getItem("type") == "family") {
              this.getUser("organization", this.data.organization);
            } else {
              this.getUser("family", this.data.family);
            }
            this.$router.push("/organization/child");
          }
        })
        .catch(() => {
          console.log("fail");
        });
    },
    getUser(type, email) {
      axios
        .get("https://hackgt.azurewebsites.net/" + type + "/" + email)
        .then(response => {
          if ("error" in response.data) {
            console.log("fail");
          } else {
            this.$q.localStorage.set(type, response.data);
          }
        })
        .catch(() => {
          console.log("fail");
        });
    }
  }
};
</script>
<style lang="scss">
// .child-card {
//   margin-bottom: 50px;
// }
</style>
