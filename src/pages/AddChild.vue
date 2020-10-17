<template>
  <q-page padding>
    <h1>Add child here</h1>
    <div class="q-pa-md" style="max-width: 400px">
      <h2>Add child</h2>
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
          label=" name *"
          hint="name"
          lazy-rules
        />
        <q-input
          filled
          type="number"
          v-model="id"
          label="ID"
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
// import InternalLink from "components/InternalLink.vue";
import axios from 'axios'

export default {
  name: "AddChild",
  // components: { InternalLink },
  data() {
    return {
      name: "Maanit",
      id: "1",
      // email: this.$store.state.type.email,
      email: "abc@123.com",
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
          "https://hackgt.azurewebsites.net/child", {
            name: this.name,
            id: this.id,
            organization: this.email
          }
        )
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
          } else {
            console.log(this.data);
            console.log("success")
            // this.$store.commit("user/setUserType", this.data.type);
            // console.log(this.data.type);
            // this.$router.push('/' + this.data.type)
          }
        })
        .catch(() => {
          console.log("fail");
        });
    }
  }
};
</script>
