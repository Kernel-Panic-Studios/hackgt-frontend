<template>
  <q-page padding>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 80%">
        <q-card class="my-card q-ma-md" v-for="(p, index) in posts" :key="index">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img :src="p.profile_picture != null && p.profile_picture.length > 0 ? p.profile_picture : 'https://cdn.quasar.dev/img/mountains.jpg'">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ p.name }}</q-item-label>
              <q-item-label caption>{{ p.created_at }}</q-item-label>
            </q-item-section>
          </q-item>
          <img v-if="p.file && (p.file.split('files/')[1].split('?')[0].split('.')[1] == 'jpg' || p.file.split('files/')[1].split('?')[0].split('.')[1] == 'png')" :src="files[index]">
          <q-btn v-else-if="p.file" color="primary" class="full-width" label="Download Document" type="a" :href="p.file" target="_blank" />
          <q-card-section>
            <div class="text-h6">{{ p.text }}</div>
          </q-card-section>
        </q-card>

        <q-input class="q-ma-md" filled fixed="bottom" v-model="text" type="textarea" autogrow label="Create post">
          <template v-slot:after>
            <q-btn round dense flat icon="send" @click="createPost" />
          </template>
        </q-input>
      </div>
      <q-uploader
        :field-name="fileData"
        url="http://localhost:5000/upload"
        @uploaded="uploaded"
        style="max-width: 300px"
        auto-upload
      />
    </div>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Feed',
  data() {
    return {
      posts: null,
      child: null,
      files: null,
      text: '',
      file: '',
      fileData: null
    };
  },
  methods: {
    loadPosts() {
      this.child = this.$q.localStorage.getItem('child');
      this.family = this.$q.localStorage.getItem('family');
      this.organization = this.$q.localStorage.getItem('organization');
      this.fileData = this.child.name + this.family.email.replace('.', '-') + Date.now().toString();
      axios
        .get("http://localhost:5000/feed/" + this.child.id)
        .then(response => {
          this.posts = response.data;
          console.log(this.posts)
          this.files = []
          for (var i in this.posts) {
            if (this.posts[i].file !== null && this.posts[i].file.length > 0) {
              console.log(this.posts[i].id)
              this.files.push(this.posts[i].file)
            } else {
              this.files.push('');
            }
          }
          // window.scrollTo({
          //   top: document.body.scrollHeight,
          //   left: 0,
          //   behavior: 'smooth'
          // });
        })
        .catch(() => {
          console.log("fail");
        });
    },
    uploaded(f) {
      this.file = this.fileData;
      console.log(this.file);
    },
    createPost() {
      const type = this.$q.localStorage.getItem('type');
      var sender = '';
      if (type == 'child') {
        sender = this.child.id;
      } else if (type == 'organization') {
        sender = this.organization.email;
      } else if (type == 'family') {
        sender = this.family.email;
      }

      console.log(sender);
      axios
        .post("http://localhost:5000/post", {
          child: this.child.id,
          family: this.family.email,
          organization: this.organization.email,
          sender: sender,
          text: this.text,
          file: this.file
        })
        .then(response => {
          console.log(response.data)
          this.text = '';
          this.loadPosts();
        })
        .catch(() => {
          console.log("fail");
        });
    }
  },
  created: function() {
    this.loadPosts();
    // setInterval(() => this.loadMessages(), 2000);
  }
}
</script>
