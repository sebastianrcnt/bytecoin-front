<template>
  <div class="card" v-bind:class="color">
    <div class="card-title">{{ title }}</div>
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
  margin-left: $side-margin;
  margin-right: $side-margin;
  padding: 14px;
  border-radius: 7px;
  margin-bottom: 20px;

  .card-title {
    color: white;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 1.092px;
    margin-bottom: 19px;
  }

  min-height: 100px;
}
</style>
