<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer =! drawer"></v-app-bar-nav-icon>
      <a class="navbar-brand" align="center" href="../">
        <img src="./assets/logo-toolbar.svg" />
      </a>
      <button class="back" @click="$router.go(-1)"><<</button>
    </v-app-bar>
    <v-navigation-drawer
      class="navigation"
      app
      v-model="drawer"
      absolute
      temporary
      width="60%"
      dark
      style="position:fixed; top:-2; left:0; overflow-y:scroll;"
    >
      <div class="menu-total">
        <h3 class="menu-title">MENU</h3>
        <v-divider class="divider" />

        <h3 class="menu">
          <router-link to="/home" active-class="links">Articles</router-link>
        </h3>

        <v-divider class="divider" />
        <h3 class="menu">
          <router-link to="/chat" active-class="links">Chat</router-link>
        </h3>
        <v-divider class="divider" />
        <div v-if="log==true">
          <button class="logout-button" @click="logOut">CERRAR SESIÓN</button>
        </div>
      </div>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import { METHODS } from "http";
import VueChatScroll from "vue-chat-scroll";

export default {
  name: "app",
  data() {
    return {
      drawer: false,
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
<style>
.menu-total {
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  text-align: center !important;
  width: 100%;
}
.navbar-brand {
  text-align: center;
  width: 100%;
  margin-right: 20px;
}
.mdi-menu::before {
  color: white;
  font-size: 45px;
}
.logout-button {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  color: #f8957e;
  font-size: 16px;
  font-weight: 600;
  margin: 18%;
  /* text-align: center !important; */
}
.menu {
  font-size: 30px;
  text-align: center !important;
  padding: 20px;
  width: 100%;
}
.menu-title {
  color: white;
  padding-bottom: 30px;
}
a {
  color: white !important;
  text-decoration: none;
  font-weight: 300;
}

.links {
  color: #f8957e !important;
  font-weight: 500;
}
.v-navigation-drawer .v-divider {
  border-width: 2px;
}

.navigation {
  position: fixed;
  height: 100%;
}
h5 {
  color: white;
  text-align: center;
  bottom: 20px;
  padding-top: 80%;
}

.back {
  color: white;
  font-size: 40px;
}
</style>
