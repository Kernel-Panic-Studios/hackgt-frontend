<template>
  <q-page padding>
    <h1>Sign up page</h1>
    <InternalLink
      v-for="link in internalLinks"
      :key="link.title"
      v-bind="link"
    />
  </q-page>
</template>

<script>
import InternalLink from "components/InternalLink.vue";

const linksData = [
  {
    title: "Organisation",
    caption: "/organization",
    icon: "school",
    link: "/organisation"
  },
  {
    title: "Family",
    caption: "/family",
    icon: "user",
    link: "/family"
  },
  {
    title: "Signin",
    caption: "signup",
    icon: "code",
    link: "/"
  }
];

export default {
  name: "Signup",
  components: { InternalLink },
  data() {
    return {
      internalLinks: linksData
    };
  }
};
</script>
