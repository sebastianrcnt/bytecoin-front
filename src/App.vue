<template>
  <div id="app">
    <NavBar @toggleDrawer="toggleDrawer()" />
    <Drawer :direction="'left'" :exist="true" ref="drawer" class="drawer">
      <h2 @click="toggleDrawer()"><router-link to="/">Home</router-link></h2>
      <h2 @click="toggleDrawer()">
        <router-link to="/login">Login</router-link>
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

<style lang="scss" scoped>
.drawer h2 {
  margin-left: 20px;
  margin-top: 10px;

  a {
    text-decoration: none;
    color: black;
  }
}
</style>
