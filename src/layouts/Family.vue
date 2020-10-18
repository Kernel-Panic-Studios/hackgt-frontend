<template>
  <q-layout view="hHh Lpr fFf">
    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title> {{ name }} </q-toolbar-title>
        <img
          src="/logo.png"
          style="height: 40px; max-width: 150px"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list v-if="type == 'family'">
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <InternalLink
          v-for="link in familyOptionsList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import InternalLink from "components/InternalLink.vue";

const familyOptions = [
  {
    title: "Logout",
    icon: "logout",
    link: "/"
  },
  {
    title: "Home",
    icon: "house",
    link: "/family/children"
  }
];

export default {
  name: "Dashboard",
  components: { InternalLink },
  data() {
    return {
      leftDrawerOpen: false,
      familyOptionsList: familyOptions,
    };
  },
  computed: {
    name: {
      get() {
        // return this.$store.state.user.name;
        return this.$q.localStorage.getItem(
          this.$q.localStorage.getItem("type")
        ).name;
      }
    },
    type: {
      get() {
        console.log(this.$q.localStorage.getItem("type"));
        return this.$q.localStorage.getItem("type");
      }
    }
  }
};
</script>
