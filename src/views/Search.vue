<template>
  <div>
    <Card title="검색" color="purple">
      <form class="search-bar" @submit.prevent="handleSubmit()">
        <input
          type="text"
          placeholder="검색어 입력"
          class="query"
          v-on:input="query = $event.target.value"
          v-on:keyup="handleSubmit($event.target.value)"
        />
        <input type="submit" value="검색" />
      </form>
    </Card>
    <Card title="검색 결과" color="green" style="min-height: 100px;">
      <Spinner v-if="loading" :loading="loading" />
      <template v-if="searchResults.length > 0 && !loading">
        <StockRankCard
          v-for="(stock, index) in searchResults"
          :key="index"
          :rank="index + 1"
          :stock="stock"
          @click.native="navigateToStockDetail(stock.code)"
        />
      </template>
      <template v-if="searchResults.length === 0 && !loading">
        <div
          style="text-align: center; color: white; margin-top: 50px; margin-bottom: 50px;"
        >
          검색 결과가 없습니다
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import StockRankCard from "@/components/StockRankCard.vue";
import Spinner from "@/components/Spinner.vue";
import { searchStock } from "@/api/fetchers";

export default {
  name: "Home",
  components: { Card, StockRankCard, Spinner },
  data() {
    return {
      searchResults: [],
      loading: false
    };
  },
  created() {},
  methods: {
    navigateToStockDetail(stockId) {
      this.$router.push(`/stocks/${stockId}`);
    },
    handleSubmit(query) {
      console.log(query);
      searchStock(query).then(({ data }) => {
        this.searchResults = data.stocks;
      });
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
form.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;

  input {
    all: unset;
    background: white;
    padding: 7px;
    border-radius: 5px;
    box-shadow: 8px 15px 44px 0px rgba(0, 0, 0, 0.2);
  }

  input.query {
    flex: 4;
    margin-right: 10px;
  }

  /* input[type="submit"] {
  } */
}
</style>
