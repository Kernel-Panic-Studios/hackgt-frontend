<template>
  <q-page class="flex flex-center">
    <h2>Dashboard page for the {{ type }}</h2>
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-sm" v-if="type == 'family'">
        <q-intersection
          v-for="option in familyOptionsList"
          :key="option.title"
          class="cards"
          once
          transition="scale"
        >
          <MainOption v-bind="option"></MainOption>
        </q-intersection>
      </div>
      <div class="row justify-center q-gutter-sm" v-if="type == 'organization'">
        <q-intersection
          v-for="option in organizationOptionsList"
          :key="option.title"
          class="cards"
          once
          transition="scale"
        >
          <MainOption v-bind="option"></MainOption>
        </q-intersection>
      </div>
      <div class="row justify-center q-gutter-sm" v-if="type == 'child'">
        <q-intersection
          v-for="option in userOptionsList"
          :key="option.title"
          class="cards"
          once
          transition="scale"
        >
          <MainOption v-bind="option"></MainOption>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import MainOption from "components/MainOption.vue";

const userOptions = [
  {
    title: "Feed",
    icon: "speaker_notes",
    link: "/user/feed"
  },
  {
    title: "Chat",
    icon: "question_answer",
    link: "/user/chat"
  },
  {
    title: "Events",
    icon: "today",
    link: "/user/events"
  }
];
const organizationOptions = [
  {
    title: "Feed",
    icon: "speaker_notes",
    link: "/feed"
  },
  {
    title: "Chat",
    icon: "question_answer",
    link: "/chat"
  },
  {
    title: "Events",
    icon: "today",
    link: "/events"
  },
  {
    title: "Donation",
    icon: "house",
    link: "/donate"
  }
];

const familyOptions = [
  {
    title: "Feed",
    icon: "speaker_notes",
    link: "/feed"
  },
  {
    title: "Chat",
    icon: "question_answer",
    link: "/chat"
  },
  {
    title: "Events",
    icon: "today",
    link: "/events"
  },
  {
    title: "Donate",
    icon: "house",
    link: "/donate"
  }
];


export default {
  name: "Index",
  components: {
    MainOption
  },
  props: {},
  data() {
    return {
      familyOptionsList: familyOptions,
      organizationOptionsList: organizationOptions,
      userOptionsList: userOptions
    };
  },
  computed: {
    type: {
      get() {
        return this.$q.localStorage.getItem("type");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// .cards {
//   height: 250px;
//   width: 30%;
// }
</style>
