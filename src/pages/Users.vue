<template>
  <q-page class="flex flex-center">
    <h1>{{ name }}</h1>
    <h2>This is where {{ type }} see the children</h2>
    <div v-if="type == 'organization'">
      <InternalLink
        v-for="link in organizationLinks"
        :key="link.title"
        v-bind="link"
      />
    </div>
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-sm">
        <q-intersection
          v-for="(child, index) in children"
          :key="index"
          class="example-item"
        >
          <UserCard :type="type" :name="child.name" :id="child.id" />
          <!-- <q-card class="q-ma-sm">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />

            <q-card-section>
              <div class="text-h6">Child #{{ index }}</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card> -->
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import UserCard from "components/UserCard.vue";
import InternalLink from "components/InternalLink.vue";
import axios from "axios";

const organizationLinksData = [
  {
    title: "Add Child",
    caption: "/addchild",
    icon: "user",
    link: "/addchild"
  }
];

export default {
  components: { UserCard, InternalLink },
  name: "Users",
  props: {
    name: String
  },
  data() {
    return {
      organizationLinks: organizationLinksData,
      children: null
    };
  },
  methods: {},
  created: function() {
    if (this.$q.localStorage.getItem("type") == "child") {
      this.$q.localStorage.set(
        "type",
        this.$q.localStorage.getItem("prevType")
      );
      this.$q.localStorage.set("child", {});
    }
    axios
      .get(
        "https://hackgt.azurewebsites.net/" +
          this.$q.localStorage.getItem("type") +
          "/" +
          this.$q.localStorage.getItem(this.$q.localStorage.getItem("type"))
            .email
      )
      .then(response => {
        this.children = response.data.children;
        console.log(this.children);
      })
      .catch(() => {
        console.log("fail");
      });
  },
  computed: {
    type: {
      get() {
        return this.$q.localStorage.getItem("type");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.example-item {
  height: 350px;
  width: 290px;
}
</style>
