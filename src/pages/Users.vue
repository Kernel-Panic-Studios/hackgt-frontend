<template>
  <q-page class="flex flex-center">
    <h2>Here are the children in your {{ type }}</h2>
    <div v-if="type == 'organization'">
      <AddChildButton
        v-for="link in organizationLinks"
        :key="link.title"
        v-bind="link"
      />
    </div>
    <div v-if="type == 'family'">
      <FindOrganization
        v-for="link in familyLinks"
        :key="link.title"
        v-bind="link"
      />
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-sm">
        <q-intersection
          v-for="(child, index) in children"
          :key="index"
          once
          transition="scale"
          class="child-card"
        >
          <UserCard :type="type" :family="child.family" :child="child" />
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>
<script>
import UserCard from "components/UserCard.vue";
import FindOrganization from "components/FindOrganization.vue";
import AddChildButton from "components/AddChildButton.vue";
import axios from "axios";

const organizationLinksData = [
  {
    title: "Add Child",
    icon: "library_add",
    link: "/organization/addchild"
  }
];

const familyLinksData = [
  {
    title: "Find an Organization",
    icon: "launch",
    link: "/family/organizations"
  }
];

export default {
  components: { UserCard, FindOrganization, AddChildButton },
  name: "Users",
  props: {
    name: String
  },
  data() {
    return {
      organizationLinks: organizationLinksData,
      familyLinks: familyLinksData,
      children: null
    };
  },
  methods: {},
  created: function() {
    console.log(this.$q.localStorage.getAllKeys());
    if (this.$q.localStorage.getItem("type") == "child") {
      this.$q.localStorage.set(
        "type",
        this.$q.localStorage.getItem("prevType")
      );
      this.$q.localStorage.set("child", {});
    }
    axios
      .get(
        "http://localhost:5000/" +
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
    },
    personName: {
      get() {
        return this.$q.localStorage.getItem(
          this.$q.localStorage.getItem("type")
        ).name;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
// .child-card {
//   height: 300px;
//   width: 30%;
// }
</style>
