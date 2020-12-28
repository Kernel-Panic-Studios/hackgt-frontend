<template>
  <q-page padding>
    <!-- content -->
    <h3>Here are your events</h3>
    <!-- <q-btn @click="loadEvents">Load events</q-btn> -->
    <div class="q-pa-md row all-center event-list">
      <q-card
        class="my-card q-ma-md"
        v-for="(event, index) in events"
        :key="index"
      >
        <q-card-section>
          <div class="text-h4">{{ event.text }}</div>
          <!-- <q-icon -->
          <div class="text-h6">Date: {{ event.event_date }}</div>
        </q-card-section>
        <!-- <q-card-section>
          <q-toggle
            v-model='completed'
            :label="`Event is complete ${completed}`"
          />

        </q-card-section> -->
      </q-card>
    </div>
    <AddEvent class="add-event-button"></AddEvent>
  </q-page>
</template>

<script>
import axios from "axios";
import AddEvent from "components/AddEvent.vue";

export default {
  name: "Events",
  components: {
    AddEvent
  },
  data() {
    return {
      events: null,
      child: null,
      date: null,
      text: "",
    };
  },
  methods: {
    loadEvents() {
      this.family = this.$q.localStorage.getItem("family");
      this.child = this.$q.localStorage.getItem("child");
      this.type = this.$q.localStorage.getItem("type");
      axios
        .get("http://localhost:5000/event/" + this.child.id)
        .then(response => {
          this.events = response.data;
          console.log(this.events);
          // window.scrollTo({
          //   top: document.body.scrollHeight,
          //   left: 0,
          //   behavior: 'smooth'
          // });
        })
        .catch(() => {
          console.log("fail");
        });
    }
  },
  mounted: function() {
    setInterval(() => this.loadEvents(), 5000);
  }
};
</script>
