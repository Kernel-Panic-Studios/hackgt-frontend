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
    title: "Organisation",
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
      // type: this.$store.state.type,
      email: "abc@123.com",
      name: "",
      id: 2,
      // email: "joe@statefarm.com",
      // password: "Joe",
      // enteredtype: "family",
      // accept: false
    };
  },
  methods: {
    login() {
      console.log("hi");
      axios
        .post("https://hackgt.azurewebsites.net/login", {
          id: this.id,
          name = this.name,
          email: "orgainzation"
        })
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
          } else {
            console.log(this.data.type);
            this.$store.commit("user/setUserType", this.data.type);
            this.$store.commit("user/setUserName", this.data.name);
            // this.$store.commit("user/setUserEmail", this.data.email);
            console.log(this.data.type);
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
