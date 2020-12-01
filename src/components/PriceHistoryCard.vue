<template>
  <div class="card">
    <div class="card-title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PriceHistoryCard",
  props: ["title", "color"]
};
</script>

<style lang="scss" scoped>
.card {
  @include outer-card();
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .card-title {
    color: black;
  }
}
</style>
