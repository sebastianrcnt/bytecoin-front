<template>
  <div>
    <!-- Price Section -->
    <PriceHistoryCard title="OO전자">
      <PriceHistoryGraph :chart-data="{}" />
    </PriceHistoryCard>
    <!-- Comments Section -->
    <Card title="NAVER" color="green">
      <CommentCard />
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import PriceHistoryCard from "@/components/PriceHistoryCard.vue";
import CommentCard from "@/components/CommentCard.vue";
import PriceHistoryGraph from "@/components/PriceHistoryGraph.vue";
// import { getTop5Stocks } from "@/fetchers/fetchers.js";

export default {
  name: "StockDetail",
  components: { Card, CommentCard, PriceHistoryCard, PriceHistoryGraph },
  data() {
    return {
      chartData: {},
      top5Stocks: [],
      loading: true
    };
  },
  mounted() {
    
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
