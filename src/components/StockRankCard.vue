<template>
  <div class="stock-card">
    <div class="rank">{{ rank }}</div>
    <div class="content">
      <div class="name">
        {{ stock.name }}
      </div>
      <div class="keywords" v-if="stock.keywords">
        {{ stock.keywords.join(",") }}
      </div>
    </div>
    <div class="weather" v-if="stock.label">
      <i class="wi" :class="className"></i>
    </div>
    <div class="tail red"></div>
  </div>
</template>

<script>
import { getClassName } from "@/utils.js";
export default {
  name: "StockRankCard",
  props: {
    rank: Number,
    stock: Object
  },
  computed: {
    percentage() {
      return (this.stock.label * 100).toFixed(2) * 1;
    },
    className() {
      return getClassName(this.stock.label);
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
* {
  background: white;
}

.stock-card {
  @include inner-card();
  min-height: 58px;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  margin-top: 10px;
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
    flex-direction: column;
    justify-content: center;
    align-items: left;

    .name {
      letter-spacing: 0.092px;
      font-weight: bold;
      font-size: 1.2rem;
      line-height: 26px;
      /* flex: 1; */
    }

    .keywords {
      font-size: 0.8rem;
    }
  }

  .weather {
    display: flex;
    font-size: 1.8rem;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
  }

  .tail {
    width: 15px;
    flex-shrink: 0;
  }
}
</style>
