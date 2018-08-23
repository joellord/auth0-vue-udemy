<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div v-if="!this.isLoggedIn">
      <h2>Not logged in yet?</h2>
      <button type="button" @click="login()">Login</button>
    </div>

    <div v-if="this.isLoggedIn">
      <h2>Hello {{ user.name }}</h2>
      <button type="button" @click="logout()">Logout</button>
    </div>
  </div>
</template>

<script>
import { login, logout, isLoggedIn, getProfile } from "../utils/auth";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    login () {
      login();
    },
    logout () {
      logout();
      this.isLoggedIn = false;
    }
  },
  data: () => {
    return {
      isLoggedIn: isLoggedIn(),
      user: getProfile()
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
