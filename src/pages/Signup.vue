<template>
  <q-page padding>
    <h1>Sign up page</h1>
    <InternalLink
      v-for="link in internalLinks"
      :key="link.title"
      v-bind="link"
    />
    <div class="q-pa-md" style="max-width: 400px">
      <h2>Sign Up</h2>
      <q-form @submit="signup" @reset="onReset" class="q-gutter-md">
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
          type="name"
          v-model="name"
          label="Your name *"
          hint="name"
          lazy-rules
        />

        <q-input
          filled
          type="string"
          v-model="password"
          label="Password"
          lazy-rules
        />
        <q-input
          filled
          type="string"
          v-model="enteredType"
          label="enteredType"
          lazy-rules
        />

        <div>
          <q-btn
            label="Submit"
            type="submit"
            color="primary"
          />
          <q-btn
            label="Reset"
            type="reset"
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
import InternalLink from "components/InternalLink.vue";
import axios from 'axios'

const linksData = [
  {
    title: "Organisation",
    caption: "/organization",
    icon: "school",
    link: "/organisation"
  },
  {
    title: "Family",
    caption: "/family",
    icon: "user",
    link: "/family"
  },
  {
    title: "Signin",
    caption: "signup",
    icon: "code",
    link: "/"
  }
];

export default {
  name: "Signup",
  components: { InternalLink },
  data() {
    return {
      internalLinks: linksData,
      type: this.$store.state.type,
      email: "abc@12345.com",
      name: "abc12345",
      password: "abc12345",
      enteredType: "organization",
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
        .post(
          "https://hackgt.azurewebsites.net/" + this.enteredType, {
            email: this.email,
            password: this.password,
            name: this.name,
          }
        )
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
          } else {
            console.log(this.data.type);
            this.$store.commit("user/setUserType", this.data.type);
            this.$store.commit("user/setUserName", this.data.name);
            this.$store.commit("user/setUserEmail", this.data.email);
            console.log(this.data.type);
            this.$router.push('/' + this.data.type)
          }
        })
        .catch(() => {
          console.log("fail");
        });
    }
  }
};
</script>
