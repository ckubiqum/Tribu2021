<template>
  <div class="page">
    <div class="chatroom" v-chat-scroll="{always: false, smooth: true}">
      <div class="please-login" v-if="log==false">
        <h2 class="login-text">Inicia sesión con tu cuenta de gmail para poder entrar al chat</h2>
        <v-btn class="login-button" @click="login">Inicia sesión</v-btn>
      </div>
      <div v-else class="message" v-for="(message, i) in messages" :key="i">
        <div v-if="CompareId(message.id)" class="bubble right">
          <div>
            <img class="img-right" :src="message.foto" alt width="25px" />
          </div>
          <div>
            <h4 class="name-right">{{message.name}}</h4>
          </div>
          <div>
            <p>{{message.text}}</p>
          </div>
        </div>
        <div v-else class="bubble left">
          <div>
            <img class="img-left" :src="message.foto" alt width="25px" />
          </div>
          <div>
            <h4 class="name-left">{{message.name}}</h4>
          </div>
          <div>
            <p class="message-left">{{message.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <v-divider class="divider" />

    <div v-if="log" class="form">
      <input id="message" v-model.trim="message" placeholder=" Enter your message" type="text" />
      <v-btn @click="sendMessage">SEND</v-btn>
    </div>
  </div>
</template>



<script>
import firebase from "firebase";
import { METHODS } from "http";
import VueChatScroll from "vue-chat-scroll";

export default {
  data() {
    return {
      message: "",
      messages: [],
      log: false
    };
  },
  methods: {
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          console.log(user);
          this.logged = true;
          this.getMessage();
          this.log = true;
        })
        .catch(err => alert(err));
    },
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(function() {})
        .catch(function(error) {});
    },
    getMessage() {
      firebase
        .database()
        .ref("chat")
        .on("value", data => {
          this.messages = data.val();
          console.log(data);
          console.log(data.val());
        });
    },
    sendMessage() {
      console.log(firebase.auth().currentUser);
      let obj = {
        text: this.message,
        name: firebase.auth().currentUser.displayName,
        foto: firebase.auth().currentUser.photoURL,
        id: firebase.auth().currentUser.uid
      };
      firebase
        .database()
        .ref("chat")
        .push(obj);
      this.message = "";
    },
    CompareId(userId) {
      if (firebase.auth().currentUser.uid === userId) {
        return true;
      } else return false;
    }
  },

  created() {
    this.getMessage();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);

        this.log = true;
      } else {
        this.log = false;
      }
    });
  }
};
</script>

<style scoped>
.login-text {
  font-size: 20px;
  text-align: center;
  line-height: 1.1em;
  font-weight: 400;
  color: white;
  padding-top: 80px;
  padding-bottom: 20px;
}
.please-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50%;
}
.login-button {
  color: #f8957e;
  font-size: 18px;
}
h4 {
  color: white;
  font-size: 19px;
  font-weight: 400;
  /* margin-top: -45px; */
}
img {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border-color: white;
  margin-bottom: -45px;
}
.img-right {
  float: right;
  /* margin-left: 20px; */
}
.name-right {
  text-align: right;
  margin-right: 70px;
  padding-top: 10px;
}

.name-left {
  margin-left: 70px;
}

.page {
  background: linear-gradient(180deg, #eb8877, #d8c298, #28bfae);
  position: absolute;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
}

.form {
  display: flex;
  padding-left: 10px;

  position: fixed;
  bottom: 0;
  /* background-color: white; */
  width: 100%;
}
.form > input[type="text"] {
  flex: 1 1 auto;
  border: 0.5px solid #695c5c;
  margin-right: 15px;

  background-color: white;
}
input {
  padding-left: 5px;
  height: 36px;
  border-radius: 5px;
}

.chatroom {
  display: fixed;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  overflow-y: auto;
}
@media (orientation: landscape) {
  .chatroom {
    height: 83%;
  }
}
@media (orientation: portrait) {
  .chatroom {
    height: 91%;
  }
}
.bubble {
  flex: 1 1 auto;
  clear: both;
} /* clear the floats here on parent */
.bubble p {
  border-radius: 5px;
  padding: 8px;
  /* margin: 5px 20px 20px 70px; */
  /* max-width: 80%; */
  position: relative;
  /* transition: background-color 0.5s; */
}

.left p {
  font-size: 17px;
  line-height: 1.2em;
  background-color: #fff5f0;
  color: #443b3b;
  float: left;
  word-wrap: break-word;
  margin-left: 70px;
  margin-right: 20px;
} /* floated left */
.right p {
  font-size: 17px;
  line-height: 1.2em;
  background-color: #fff5f0d0;
  color: #695c5c;
  float: right;
  word-wrap: break-word;
  margin-right: 70px;
  margin-left: 20px;
} /* floated right */
/* classes below are only for arrows, not relevant */
.left p::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  left: -8px;
  top: 8px;
  border-top: 4px solid transparent;
  border-right: 8px solid #fff5f0;
  border-bottom: 4px solid transparent;
}
.right p::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  right: -8px;
  top: 8px;
  border-top: 4px solid transparent;
  border-left: 8px solid #fff5f0d0;
  border-bottom: 4px solid transparent;
}

.divider {
  border-color: white;
}
.v-btn {
  margin: 0px 10px 10px 0px;
  color: #eb8877;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: white;
}
</style>

