<template>
  <div class="card" v-bind:class="color">
    <div v-if="title" class="card-title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "color"]
};
</script>

<style lang="scss" scoped>
.card {
  @include outer-card();

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &.white {
    background-color: white;
    .card-title {
      color: black;
    }
  }
}
</style>
