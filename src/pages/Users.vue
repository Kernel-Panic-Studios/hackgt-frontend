<template>
  <q-page class="flex flex-center">
    <h1>{{ name }}</h1>
    <h2>This is where families/organizations see the children</h2>
    <h3>{{ route.fullPath }}</h3>
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
          <UserCard :name="child.name" :id="child.id" />
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
    title: "Child Portal",
    caption: "/",
    icon: "user",
    link: "/organization/childportal"
  },
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
    // children: Object
  },
  data() {
    return {
      organizationLinks: organizationLinksData,
      children: null
    };
  },
  methods: {},
  created: function() {
    axios
      .get("https://hackgt.azurewebsites.net/organization/abc@123.com")
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
        return this.$store.state.user.type;
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
