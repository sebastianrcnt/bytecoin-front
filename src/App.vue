<template>
  <div id="app">
    <NavBar @toggleDrawer="toggleDrawer()" />
    <Drawer :direction="'left'" :exist="true" ref="drawer" class="drawer">
      <h2 @click="toggleDrawer()"><router-link to="/">Home</router-link></h2>
      <h2 @click="toggleDrawer()">
        <router-link to="/game">Game</router-link>
      </h2>
    </Drawer>
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Drawer from "@/components/Drawer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Drawer
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    toggleDrawer() {
      if (this.$refs.drawer.active) {
        this.$refs.drawer.close();
      } else {
        this.$refs.drawer.open();
      }
    }
  }
};
</script>

<style lang="scss">
.drawer h2 {
  margin-left: 20px;
  margin-top: 10px;

  a {
    text-decoration: none;
    color: black;
  }
}

.lds-facebook {
  position: fixed;
  top: calc(50vh - 32px);
  left: calc(50vw - 32px);
}
</style>
