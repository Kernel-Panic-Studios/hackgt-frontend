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
          {{ name }}
        </q-toolbar-title>
        <img src="/logo.png" style="height: 40px; max-width: 150px" />
      </q-toolbar>

      <!-- <q-tabs>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
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
  },
  {
    title: "Child",
    icon: "speaker_notes",
    link: "/family/child/index"
  },
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
const organizationOptions = [
  {
    title: "Logout",
    icon: "logout",
    link: "/"
  },
  {
    title: "Home",
    icon: "house",
    link: "/organization/children"
  },
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
    title: "Donate",
    icon: "card_giftcard",
    link: "/organization/child/donate"
  }
];

export default {
  name: "Dashboard",
  components: { InternalLink },
  data() {
    return {
      leftDrawerOpen: false,
      familyOptionsList: familyOptions,
      organizationOptionsList: organizationOptions
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
