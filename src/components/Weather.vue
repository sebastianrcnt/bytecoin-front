<template>
  <div>
    <i class="weather wi" :class="className"></i>
  </div>
</template>

<script>
import { getClassName } from "@/utils.js";

export default {
  name: "Weather",
  props: {
    label: Number
  },
  computed: {
    className() {
      return getClassName(this.label);
    }
  }
};
</script>

<style lang="scss" scoped>
/* @import "@/scss/weather-icons/sass/weather-icons.scss"; */
.weather {
  font-size: 5rem;
  margin-bottom: 2.2rem;
}
</style>
