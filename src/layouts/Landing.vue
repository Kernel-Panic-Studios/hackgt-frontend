<template>
  <q-layout view="hHh Lpr fFf">
    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar style='height: 50px'>
        <q-icon
          flat
          round
          dense
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <img
          src="/logo.png"
          style="height: 40px; max-width: 150px"
        />
        <q-toolbar-title> famly </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Dashboard",
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
