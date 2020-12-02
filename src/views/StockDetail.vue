<template>
  <div>
    <template v-if="loading">
      <Spinner :loading="true" />
    </template>
    <!-- Comments Section -->
    <template v-else>
      <Card color="grey-1" class="stock-info-card">
        <div class="stock-name">{{ stock.name }}</div>
        <div class="stock-code">({{ stock.code }})</div>
        <!-- Weather -->
        <Weather :label="stock.label" />
        <div class="stock-label">{{ (stock.label * 100).toFixed(2) }}%</div>
        <div class="stock-num-posts">댓글수 {{ stock.numPosts }}개</div>
      </Card>
      <Card title="NAVER" color="green">
        <template v-for="(comment, index) in stock.posts">
          <CommentCard :comment="comment" :key="index" />
        </template>
      </Card>
    </template>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CommentCard from "@/components/CommentCard.vue";
import Weather from "@/components/Weather.vue";
import { getStockById } from "@/fetchers/fetchers.js";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "StockDetail",
  props: ["id"],
  components: { Card, CommentCard, Spinner, Weather },
  data() {
    return {
      loading: true,
      stock: {
        comments: []
      }
    };
  },
  created() {
    getStockById(this.$route.params.id)
      .then(({ data }) => {
        this.stock = data.stock;
        this.loading = false;
      })
      .catch(() => {
        alert("Error");
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

.stock-info-card {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  .stock-name {
    font-size: 1.8rem;
  }

  .stock-code {
    font-size: 0.8rem;
  }

  .stock-label {
    font-size: 1.1rem;
  }

  .stock-num-posts {
    font-size: 0.8rem;
  }
}
</style>
