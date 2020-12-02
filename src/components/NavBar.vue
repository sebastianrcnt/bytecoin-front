<template>
  <div class="nav-bar">
    <img class="logo" src="@/assets/logo.png" alt="" />
    <img src="@/assets/menu.png" class="menu" @click="toggleDrawer()" />
    <img src="@/assets/search.svg" class="search" />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toggleDrawer() {
      this.$emit("toggleDrawer");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 65px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 8px;
  padding-bottom: 8px;

  img.logo {
    object-fit: cover;
    height: 80%;
  }

  .menu {
    position: absolute;
    left: $side-margin + 10px;
    object-fit: cover;
    /* transform: scale(1.4); */
    height: 30px;
  }

  .search {
    position: absolute;
    right: $side-margin + 10px;
    object-fit: cover;
    /* transform: scale(1.4); */
    height: 30px;
  }
}
</style>
