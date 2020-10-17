<template>
  <q-page padding>
    <div class="q-pa-md fixed-center" style="max-width: 40%">
      <h2>Add child</h2>
      <q-form @submit="createChild" class="q-gutter-md">
        <q-input
          filled
          type="name"
          v-model="name"
          label=" name *"
          hint="name"
          lazy-rules
        />
        <q-input filled type="number" v-model="id" label="ID" lazy-rules />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="GO Back"
            @click="goBack"
            color="positive"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
// import InternalLink from "components/InternalLink.vue";
import axios from "axios";

export default {
  name: "AddChild",
  // components: { InternalLink },
  data() {
    return {
      name: "Maanit",
      id: "1"
      // email: this.$store.state.type.email,
      // password: "Joe",
      // enteredType: "family",
    };
  },
  methods: {
    createChild() {
      console.log(this.email);
      axios
        .post("https://hackgt.azurewebsites.net/child", {
          name: this.name,
          id: this.id,
          organization: this.email
        })
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
            this.$q.notify({
              message: "Child addition failed!",
              color: "red",
              timeout: 1500
            });
          } else {
            console.log(this.data);
            console.log("success");
            this.$q.notify({
              message: "Child Added!",
              color: "#21ba45",
              timeout: 1500
            });
            // this.$store.commit("user/setUserType", this.data.type);
            // console.log(this.data.type);
            this.$router.push("/" + this.userType);
          }
        })
        .catch(() => {
          console.log("fail");
        });
    },
    goBack() {
      this.$router.push("/" + this.userType);
    }
  },
  computed: {
    email: {
      get() {
        return this.$q.localStorage.getItem(
          this.$q.localStorage.getItem("type")
        ).email;
      }
    },
    userType: {
      get() {
        return this.$q.localStorage.getItem("type");
      }
    }
  }
};
</script>
