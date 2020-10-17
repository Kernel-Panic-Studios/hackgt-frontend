<template>
  <q-page class="flex flex-center">
    <h2>You are a {{ utype }}</h2>
    <q-btn @click="loadData">Load data</q-btn>
    <h2>Dashboard page where all user actions can be viewed</h2>
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-sm">
        <q-intersection
          v-for="index in familyOptionsList"
          :key="index.title"
          class="example-item"
        >
          <mainoption v-bind="index"></mainoption>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import Mainoption from "components/Mainoption.vue";

const familyOptions = [
  {
    title: "Feed",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Chat",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Upload",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Events",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Donate",
    caption: "/.",
    icon: "house",
    link: "/"
  }
];

const userOptions = [
  {
    title: "Feed",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Chat",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Upload",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Events",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Donate",
    caption: "/.",
    icon: "house",
    link: "/"
  }
];

export default {
  name: "Index",
  components: {
    Mainoption
  },
  props: {
    utype: String
  },
  data() {
    return {
      familyOptionsList: familyOptions,
      userOptionsList: userOptions
    };
  },
  methods: {
    loadData() {
      console.log(this.$store.state.user.utype)
      this.utype = this.$store.state.user.utype;
      return this.$store.state.user.utype;
    },
    computed: {
      utype: {
        get() {
          return this.$store.state.user.utype;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.example-item {
  height: 290px;
  width: 290px;
}
</style>
