<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-sd fixed-center" style="max-width: 40%">
      <div class="center-all">
      <img src="/famly.png"/>

      </div>
      <h4>Login</h4>
      <q-form @submit="login" class="q-gutter-md">
        <q-input
          filled
          type="email"
          v-model="email"
          label="Your email *"
          hint="email"
          lazy-rules
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Password"
          hint="password"
          lazy-rules
        />
        <q-select
          v-model="enteredType"
          :options="typeOptions"
          label="User Type"
        />
        <div>
          <q-btn label="Login" type="submit" color="primary" />
          <q-btn
            label="Don't have an account? Sign up!"
            to="/signup"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import user from "vuex";
import axios from "axios";

export default {
  name: "Signin",
  data() {
    return {
      // email: "abc@123.com",
      // password: "abc123",
      enteredType: null,
      typeOptions: ["Organization", "Family"],
      // email: "",
      // password: "",
      email: "vguyard3@gatech.edu",
      password: "vg",
    };
  },
  methods: {
    login() {
      console.log("hi");
      axios
        .post("https://hackgt.azurewebsites.net/login", {
          email: this.email,
          password: this.password,
          type: this.enteredType.toLowerCase()
        })
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
            this.$q.notify({
              message: "Login has failed!",
              color: "red",
              timeout: 1500
            });
          } else {
            console.log(this.data.type);
            this.$q.localStorage.set("type", this.enteredType.toLowerCase());
            this.$q.localStorage.set(this.enteredType.toLowerCase(), this.data);
            this.$router.push("/" + this.data.type + "/children");
          }
        })
        .catch(() => {
          console.log("fail");
        });
    }
  }
};
</script>
<style lang="scss" scoped>
h4 {
  text-align: center;
}
</style>
