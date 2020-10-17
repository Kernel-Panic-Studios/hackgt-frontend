<template>
  <q-page padding>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 80%">
        <q-card class="my-card q-ma-md" v-for="(p, index) in posts" :key="index">
          <img v-if="p.file" :src="files[index]">

          <q-card-section>
            <div class="text-h6">{{ p.text }}</div>
            <div class="text-subtitle2">Posted by <b>{{ p.name }}</b>, {{ p.created_at }}</div>
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
      this.fileData = this.child.id + this.family.email.replace('.', '-') + Date.now().toString();
      axios
        .get("http://localhost:5000/feed/" + this.child.id)
        .then(response => {
          this.posts = response.data;
          console.log(this.posts)
          this.files = []
          for (var i in this.posts) {
            if (this.posts[i].file.length > 0) {
              this.getFile(this.posts[i].id);
            } else {
              this.files.push('');
            }
          }
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
        })
        .catch(() => {
          console.log("fail");
        });
    },
    getFile(id) {
      axios
        .get("http://localhost:5000/download/" + id)
        .then(response => {
          console.log(response);
          var b64Response = btoa(response.data);
          this.files.push('data:image/jpg;base64,'+b64Response);
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
      var sender = this.family.email;
      if (this.type == 'child') {
        sender = this.child.id;
      } 

      axios
        .post("http://localhost:5000/post", {
          child: this.child.id,
          family: this.family.email,
          sender: sender,
          text: this.text,
          file: this.file
        })
        .then(response => {
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
