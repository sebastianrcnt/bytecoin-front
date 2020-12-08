<template>
  <div>
    <Spinner :loading="loading" />
    <template v-if="!loading">
      <Card title="Top 5" color="purple">
        <StockRankCard
          v-for="(stock, index) in top5Stocks"
          :key="index"
          :rank="index + 1"
          :stock="stock"
          @click.native="navigateToStockDetail(stock.code)"
        />
      </Card>
    </template>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import StockRankCard from "@/components/StockRankCard.vue";
import Spinner from "@/components/Spinner.vue";
import { getTop5Stocks } from "@/api/fetchers.js";

export default {
  name: "Home",
  components: { Card, StockRankCard, Spinner },
  data() {
    return {
      top5Stocks: [],
      loading: true
    };
  },
  created() {
    getTop5Stocks()
      .then(({ data }) => {
        this.top5Stocks = data.stocks;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    navigateToStockDetail(stockId) {
      this.$router.push(`/stocks/${stockId}`);
    }
  }
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

  &.closed {
    min-height: 100px;
  }
}
</style>
