<template>
  <div class="stock-card">
    <div class="rank">{{ rank }}</div>
    <div class="content">
      <div class="name">{{ stock.name }}</div>
      <div class="weather">
        <Weather v-bind:percentage="percentage" />
        <span> {{ percentage }} % </span>
      </div>
    </div>
    <div class="tail red"></div>
  </div>
</template>

<script>
import Weather from "@/components/Weather.vue";

export default {
  name: "StockRankCard",
  props: {
    rank: Number,
    stock: Object
  },
  computed: {
    percentage() {
      return (this.stock.label * 100).toFixed(2);
    }
  },
  components: {
    Weather
  }
};
</script>

<style lang="scss" scoped>
.stock-card {
  @include inner-card();
  min-height: 58px;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  margin-bottom: 10px;

  .rank {
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 24px;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .name {
      letter-spacing: 0.092px;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      flex: 1;
    }

    .weather {
      padding: 10px;
      font-weight: 300;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: stretch;
      letter-spacing: 0.092px;

      display: flex;
      flex-direction: column;

      span {
        margin-top: 5px;
      }
    }
  }

  .tail {
    width: 15px;
    flex-shrink: 0;
  }
}
</style>
