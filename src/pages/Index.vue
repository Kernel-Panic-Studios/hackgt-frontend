<template>
  <q-page class="flex flex-center">
    <h2>Dashboard Page</h2>
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
    link: "/organization/child/feed"
  },
  {
    title: "Chat",
    icon: "question_answer",
    link: "/organization/child/chat"
  },
  {
    title: "Events",
    icon: "today",
    link: "/organization/child/events"
  },
  {
    title: "Donations",
    icon: "card_giftcard",
    link: "/organization/child/donate"
  }
];

const familyOptions = [
  {
    title: "Feed",
    icon: "speaker_notes",
    link: "/family/child/feed"
  },
  {
    title: "Chat",
    icon: "question_answer",
    link: "/family/child/chat"
  },
  {
    title: "Events",
    icon: "today",
    link: "/family/child/events"
  },
  {
    title: "Donate",
    icon: "card_giftcard",
    link: "/family/child/donate"
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
h2 {
  text-decoration: underline;
}
</style>
