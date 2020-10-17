<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-sm">
        <q-intersection v-for="index in 60" :key="index" class="example-item">
          <q-card class="q-ma-sm">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />

            <q-card-section>
              <div class="text-h6">Child #{{ index }}</div>
              <div class="text-subtitle2">Name LastName</div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style lang="scss" scoped>
.example-item {
  height: 290px;
  width: 290px;
}
</style>
