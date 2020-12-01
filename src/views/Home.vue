<template>
  <div>
    <Card title="주식 게임" color="purple"> </Card>
    <Card title="NAVER" color="green">
      <section v-if="loading">
        Loading...
      </section>
      <section v-else>
        <StockRankCard
          v-for="(stock, index) in top5Stocks"
          :key="index"
          :rank="index + 1"
          :stock="stock"
        />
      </section>
    </Card>
    {{ price }}
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import StockRankCard from "@/components/StockRankCard.vue";
import { getTop5Stocks } from "@/fetchers/fetchers.js";
import JSSoup from "jssoup";

export default {
  name: "Home",
  components: { Card, StockRankCard },
  data() {
    return {
      top5Stocks: [],
      loading: true,
      price: ""
    };
  },
  mounted() {
    fetch('https://finance.naver.com/item/main.nhn?code=051910').then((data) => {
      console.log(data);
    })
    var soup = new JSSoup("<html><head>Hello</head></html>");
    console.log(soup.find("head"));
    getTop5Stocks()
      .then(({ data }) => {
        this.top5Stocks = data.stocks;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
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
