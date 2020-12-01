<template>
  <div>
    <i class="weather wi wi-night-alt-snow-wind"></i>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    percentage: Number
  }
};
</script>

<style lang="scss" scoped>
/* @import "@/scss/weather-icons/sass/weather-icons.scss"; */
.weather {
  font-size: 1.5rem;
}
</style>
