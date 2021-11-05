<template>
  <div class="flex-container">
    <div class="logo">
      <img alt="Tribu logo" src="../assets/logo-tribu.svg" />
    </div>
    <div class="login" v-if="log==false">
      <h2 class="login-text">Inicia sesión con tu cuenta de gmail</h2>
      <v-btn class="login-btn" @click="login">Login</v-btn>
    </div>
    <div class="social-icons">
      <a href="http://www.instagram.com/maglesrevista">
        <img class="social" src="../assets/instagram.svg" alt="Insta" />
      </a>
      <img class="social" id="facebook" alt="Facebook" src="../assets/facebook.svg" />
      <img class="social" id="youtube" alt="Youtube" src="../assets/youtube.svg" />
      <img class="social" id="twitter" alt="Twitter" src="../assets/twitter.svg" />
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { METHODS } from "http";
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
        })
        .catch(err => alert(err));
    },

    logOut() {
      console.log("logOut");

      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("logOut in");
          this.$router.push("/");
        })
        .catch(function(error) {});
    }
  },
  created() {
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
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: linear-gradient(180deg, #eb8877, #d8c298, #28bfae);
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  position: fixed;
}

.social {
  margin: 1em;
  justify-items: space-around;
}
.social-icons {
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
}

.login-text {
  font-size: 20px;
  font-weight: 400;
  color: white;
}

.login-btn {
  width: 30%;
  color: #f8957e;
  font-weight: 700;
  font-size: 20px;
  margin: 10px;
}

@media (max-width: 375px) {
  .logo {
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 50%;
  }
  .login {
    text-align: center;
    position: fixed;
    top: 70%;
  }
}
@media (min-width: 400px) {
  .logo {
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 50%;
  }
  .login {
    text-align: center;
    position: fixed;
    top: 65%;
  }
}
</style>