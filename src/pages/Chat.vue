<template>
  <q-page padding>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 80%">
        <q-chat-message v-for="(m, index) in messages"
          :key="index"
          :text="[m.text]"
          :name="m.sender == username ? 'me' : (sender === 'child' ? family.name : child.name)"
          :sent="m.sender == username ? true : false"
          :bg-color="m.sender == username ? '#a9a9a9' : 'primary'"
          :text-color="m.sender == username ? 'black' : 'white'"
          :stamp="m.created_at"
          :avatar="(sender === 'child' ? family.profile_pic : child.profile_pic)"
        />
      </div>
    </div>
    <q-input filled fixed="bottom" v-model="text" type="textarea" autogrow label="Send message" v-on:keyup.enter="sendMessage">
      <template v-slot:after>
        <q-btn round dense flat icon="send" @click="sendMessage" />
      </template>
    </q-input>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Chat',
  data() {
    return {
      sender: '',
      receiver: '',
      username: '',
      messages: null,
      family: null,
      child: null,
      text: ''
    };
  },
  methods: {
    loadMessages() {
      this.family = this.$q.localStorage.getItem('family');
      this.child = this.$q.localStorage.getItem('child');
      this.type = this.$q.localStorage.getItem('type');
      if (this.type == 'child') {
        this.sender = 'child';
        this.receiver = 'family';
        this.username = this.child.id;
      } else if (this.type == 'family') {
        this.sender = 'family';
        this.receiver = 'child';
        this.username = this.family.email;
      }
      axios
        .post("https://hackgt.azurewebsites.net/chat", {
          child: this.child.id,
          family: this.family.email
        })
        .then(response => {
          this.messages = response.data;
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
    sendMessage() {
      var sender = this.family.email;
      if (this.type == 'child') {
        sender = this.child.id;
      }
      axios
        .post("https://hackgt.azurewebsites.net/chat/send", {
          child: this.child.id,
          family: this.family.email,
          sender: sender,
          text: this.text
        })
        .then(response => {
          this.text = '';
          this.loadMessages();
        })
        .catch(() => {
          console.log("fail");
        });
    }
  },
  created: function() {
    setInterval(() => this.loadMessages(), 2000);
  }
}
</script>
