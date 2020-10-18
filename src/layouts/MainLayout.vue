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
        <q-toolbar-title>
          {{ name }} -- {{ type }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list v-if="type == 'child'">
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <InternalLink
          v-for="link in userOptionsList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-list v-if="type == 'organization'">
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <InternalLink
          v-for="link in organizationOptionsList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
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

const userOptions = [
  {
    title: "Logout",
    icon: "logout",
    link: "/"
  },
  {
    title: "Home",
    icon: "house",
    link: "/user/index"
  },
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
  },
];

export default {
  name: "Dashboard",
  components: { InternalLink },
  data() {
    return {
      leftDrawerOpen: false,
      userOptionsList: userOptions
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
