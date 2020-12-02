<template>
  <div class="statistics">
    <span class="value"
      >{{ value }}<span class="unit">{{ unit }}</span></span
    >
    <span class="description">{{ description }}</span>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  props: {
    value: {
      type: [String, Number],
      default: "Value"
    },
    description: {
      type: String,
      default: "Description"
    },
    unit: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.statistics {
  /* border-radius: 10px; */
  /* background-color: white; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;

  margin-bottom: 10px;

  .value {
    font-size: 1.8rem;
    font-weight: bold;

    .unit {
      font-size: 0.8rem;
    }
  }

  .description {
    font-size: 0.8rem;
  }
}
</style>
