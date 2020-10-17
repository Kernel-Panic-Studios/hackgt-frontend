<template>
  <q-page padding>
    <!-- content -->
    <h1>Sign in page</h1>
    <!-- <q-btn @click="loadData()">Get data</q-btn> -->

    <InternalLink
      v-for="link in internalLinks"
      :key="link.title"
      v-bind="link"
    />
    <div class="q-pa-md" style="max-width: 400px">
      <h2>Login</h2>
      <q-form @submit="login" @reset="onReset" class="q-gutter-md">
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
          lazy-rules
        />
        <q-input
          filled
          type="string"
          v-model="enteredtype"
          label="enteredtype"
          lazy-rules
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
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
import user from "vuex";
import axios from "axios";

const linksData = [
  {
    title: "Organization",
    caption: "/organization",
    icon: "school",
    link: "/organization"
  },
  {
    title: "Family",
    caption: "/family",
    icon: "user",
    link: "/family"
  },
  {
    title: "Signup",
    caption: "signup",
    icon: "code",
    link: "/Signup"
  }
];

export default {
  name: "Signin",
  components: { InternalLink },
  data() {
    return {
      internalLinks: linksData,
      // email: "abc@123.com",
      // password: "abc123",
      // enteredtype: "organization",
      email: "joe@statefarm.com",
      password: "Joe",
      enteredtype: "family",
      accept: false
    };
  },
  methods: {
    login() {
      console.log("hi");
      axios
        .post("https://hackgt.azurewebsites.net/login", {
          email: this.email,
          password: this.password,
          type: this.enteredtype
        })
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
          } else {
            console.log(this.data.type);
            this.$q.localStorage.set('type', this.enteredtype);
            this.$q.localStorage.set(this.enteredtype, this.data);
            this.$router.push("/" + this.data.type);
          }
        })
        .catch(() => {
          console.log("fail");
        });
    }
  }
};
</script>
