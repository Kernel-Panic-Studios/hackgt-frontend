<template>
  <q-page class="flex flex-center">
    <h1>{{ name }}</h1>
    <h2>Here are available organizations</h2>
    <div v-if="type == 'family'">
      <InternalLink
        v-for="link in familyLinks"
        :key="link.title"
        v-bind="link"
      />
    </div>
    <div class="q-pa-md">
      <div class="row justify-center q-gutter-sm">
        <q-intersection
          v-for="(org, index) in organizations"
          :key="index"
          class="example-item"
        >
        <br />
          <OrganizationCard
            :name="org.name"
            :email="org.email"
            :children="getChildrenLength(org, index)"
            :profile="org.profile_pic"
          />
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
import OrganizationCard from "components/OrganizationCard.vue";
import InternalLink from "components/InternalLink.vue";
import axios from "axios";

const familyLinksData = [
  // {
  //   title: "Add Child",
  //   caption: "/addchild",
  //   icon: "user",
  //   link: "/addchild"
  // }
];

export default {
  components: { OrganizationCard, InternalLink },
  name: "Organizations",
  props: {
    name: String
  },
  data() {
    return {
      familyLinks: familyLinksData,
      organizations: null,
    };
  },
  methods: {
    getChildrenLength(org, index) {
      var count = 0;
      for (var child in org.children) {
        if (org.children[child].family == null || org.children[child].family.length == 0) {
          count += 1;
        }
      }
      return count;
    }
  },
  created: function() {
    axios
      .get("http://localhost:5000/organization")
      .then(response => {
        this.organizations = response.data;
        console.log(this.organizations);
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
