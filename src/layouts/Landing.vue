<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <q-avatar>
          <img src="/assets/quasar-logo-full.svg" />
        </q-avatar>
        <q-toolbar-title>Adoption title</q-toolbar-title>
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
  name: "Landing",

  data() {
    return {
      leftDrawer: false
    };
  }
};
</script>
<style lang="scss">
h2 {
  text-align: center;
}
div {
}
</style>
