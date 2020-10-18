<template>
  <q-page padding>
    <div class="q-pa-md fixed-right center-all" style="max-width: 40%">
      <br />
      <h4>Add Event</h4>
      <q-form @submit="createEvent" class="q-gutter-md">
        <q-input
          filled
          type="name"
          v-model="title"
          label=" Name your event"
          lazy-rules
        />
        <q-date v-model="date" />

        <div>
          <q-btn
            label="Add Event"
            type="submit"
            color="primary"
            :disable="title.length == 0 ? true : false"
          />
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
  props: {},
  data() {
    return {
      title: "",
      date: ""
    };
  },
  methods: {
    createEvent() {
      axios
        .post("https://hackgt.azurewebsites.net/event", {
          child: this.child,
          family: this.email,
          text: this.title,
          event_date: this.date
        })
        .then(response => {
          this.data = response.data;
          if ("error" in this.data) {
            console.log("fail");
            this.$q.notify({
              message: "Event Creation failed!",
              color: "red",
              timeout: 1500
            });
          } else {
            console.log(this.data);
            console.log("success");
            this.$q.notify({
              message: "Event Created!",
              color: "green",
              timeout: 1500
            });
          }
        })
        .catch(() => {
          console.log("fail");
        });
    },
    goBack() {
      this.$router.push("/" + this.userType + "/child/index");
    }
  },
  computed: {
    todayDate: {
      get() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + "/" + mm + "/" + dd;
        console.log(today);
        return today;
      }
    },
    email: {
      get() {
        return this.$q.localStorage.getItem("family").email;
      }
    },
    child: {
      get() {
        return this.$q.localStorage.getItem("child").id;
      }
    }
  },
  created() {
    this.date = this.todayDate;
  }
};
</script>
<style lang="scss" scoped></style>
