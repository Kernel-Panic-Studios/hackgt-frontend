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

      <!-- <q-tabs>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->
      <p>{{ type }}</p>
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

const familyOptions = [
  {
    title: "Home",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Feed",
    caption: "/.",
    icon: "house",
    link: "/feed"
  },
  {
    title: "Chat",
    caption: "/chat",
    icon: "house",
    link: "/chat"
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
const organizationOptions = [
  {
    title: "Home",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Feed",
    caption: "/.",
    icon: "house",
    link: "/feed"
  },
  {
    title: "Chat",
    caption: "/chat",
    icon: "house",
    link: "/chat"
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
    title: "Home",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Feed",
    caption: "/.",
    icon: "house",
    link: "/"
  },
  {
    title: "Chat",
    caption: "/chat",
    icon: "house",
    link: "/chat"
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
];

export default {
  name: "Dashboard",
  components: { InternalLink },
  data() {
    return {
      leftDrawerOpen: false,
      familyOptionsList: familyOptions,
      organizationOptionsList: organizationOptions,
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
