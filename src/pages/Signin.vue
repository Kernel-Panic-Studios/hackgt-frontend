<template>
  <q-page padding>
    <!-- content -->
    <h1>Sign in page</h1>
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
    title: "Parent",
    caption: "/parent",
    icon: "user",
    link: "/parent"
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
      internalLinks: linksData
    };
  }
};
</script>
