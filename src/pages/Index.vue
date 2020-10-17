<template>
  <q-page class="flex flex-center">
    <h2>Dashboard page where all user actions can be viewed</h2>
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-sm">
        <q-intersection
          v-for="index in familyOptionsList"
          :key="index.title"
          class="example-item"
        >
          <MainOption v-bind="index"></MainOption>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import MainOption from "components/MainOption.vue";

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
    MainOption
  },
  props: {
    utype: String
  },
  data() {
    return {
      familyOptionsList: familyOptions,
      userOptionsList: userOptions
    };
  }
};
</script>

<style lang="scss" scoped>
.example-item {
  height: 290px;
  width: 290px;
}
</style>
