<template>
  <q-page padding>
    <div class="q-pa-md fixed-center" style="max-width: 40%">
      <h2>Create an account</h2>
      <q-form @submit="signup" class="q-gutter-md">
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
          type="string"
          v-model="password"
          label="Password"
          hint="password"
          lazy-rules
        />
        <q-input
          filled
          type="name"
          v-model="name"
          label="Your name *"
          hint="name"
          lazy-rules
        />
        <q-input
          filled
          type="textarea"
          v-model="bio"
          label="Your bio *"
          hint="bio"
          lazy-rules
        />
        <q-select
          v-model="enteredType"
          :options="typeOptions"
          label="User Type"
        />

        <q-uploader
          :field-name="email.replace('.', '-')"
          url="https://hackgt.azurewebsites.net/upload"
          @uploaded="uploaded"
          style="width: 100%;"
          label="Profile Picture"
          auto-upload
          :disable="email.length == 0 ? true : false"
        />

        <div class = 'center-all'>
          <q-btn
            class="sign-button"
            label="Sign Up"
            type="submit"
            color="primary"
          />
          <q-btn
            label="Already have an account? Sign in!"
            to="/"
            color="primary"
            flat
            class="q-ml-sm sign-button"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      // type: this.$q.localStorage.geItem("type"),
      // email: "abc@12345.com",
      // name: "abc12345",
      // password: "abc12345",
      email: "",
      name: "",
      password: "",
      bio: "",
      file: null,
      enteredType: null,
      typeOptions: ["Organization", "Family"],
      // email: "joe@statefarm.com",
      // password: "Joe",
      // enteredType: "family",
      accept: false
    };
  },
  methods: {
    signup() {
      console.log("hi");
      axios
        .post("https://hackgt.azurewebsites.net/" + this.enteredType.toLowerCase(), {
          email: this.email,
          password: this.password,
          name: this.name,
          bio: this.bio,
          profile_pic: this.file.replace('.', '-')
        })
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
            console.log(this.data);
            this.$q.notify({
              message: "Sign up has failed!",
              color: "red",
              timeout: 1500
            });
          } else {
            this.$q.localStorage.set("type", this.data.type);
            this.$q.localStorage.set(this.data.type, this.data);
            console.log(this.data.type);
            this.$router.push("/" + this.data.type);
          }
        })
        .catch(() => {
          console.log("fail");
        });
    },
    uploaded(f) {
      this.file = this.email;
    }
  }
};
</script>
<style lang="scss" scoped></style>
