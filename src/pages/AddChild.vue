<template>
  <q-page padding>
      <div class="q-pa-md fixed-center" style="max-width: 40%">
        <h2>Add child</h2>
        <q-form @submit="createChild" class="q-gutter-md">
          <q-input
            filled
            type="name"
            v-model="name"
            label=" Name *"
            hint="name"
            lazy-rules
          />
          <q-input filled type="number" v-model="id" label="ID" lazy-rules />

          <q-input
            filled
            type="textarea"
            v-model="bio"
            label="Your bio *"
            hint="bio"
            lazy-rules
          />

          <q-uploader
            :field-name="email.replace('.', '-') + '-' + id"
            url="http://localhost:5000/upload"
            @uploaded="uploaded"
            style="width: 100%; height:200px"
            label="Profile Picture"
            accept=".jpg, image/*"
            auto-upload
            :disable="id == null || id == '' ? true : false"
          />

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
      name: "",
      id: null,
      bio: "",
      file: null
      // name: "Maanit",
      // id: "1"
      // email: this.$store.state.type.email,
      // password: "Joe",
      // enteredType: "family",
    };
  },
  methods: {
    createChild() {
      console.log(this.email);
      axios
        .post("http://localhost:5000/child", {
          name: this.name,
          id: this.id,
          organization: this.email,
          bio: this.bio,
          profile_pic: this.file
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
              color: "green",
              timeout: 1500
            });
            // this.$store.commit("user/setUserType", this.data.type);
            // console.log(this.data.type);
            this.$router.push("/" + this.userType + "/children");
          }
        })
        .catch(() => {
          console.log("fail");
        });
    },
    goBack() {
      this.$router.push("/" + this.userType + "/children");
    },
    uploaded(f) {
      this.file = this.email.replace(".", "-") + "-" + this.id;
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
