<template>
  <div v-if="!loading">
    <Card title="주식 게임" color="purple">
      <div class="stock-card" v-for="(prices, index) in stocks" :key="index">
        <div class="stock-info">
          <span class="stock-name"> 주식 {{ index + 1 }} </span>
          <span class="stock-price">
            {{ prices | getRecentPrice | numberWithCommas }}
          </span>
          <span class="stock-flunc">
            ({{ calcFlunc(prices) | percentify }} %)
          </span>
        </div>
        <StockGraph
          :chart-data="datacollections[index]"
          :styles="myStyles"
        ></StockGraph>
      </div>
      <div class="stock-trade-card">
        <div class="card-title">DAY {{ currentDate }}</div>
        <div class="balance">
          <div class="statistics total-balance">
            <div class="value">{{ totalBalance | numberWithCommas }}</div>
            <div class="field">총 자산</div>
          </div>
          <div class="statistics initial-balance">
            <div class="value">{{ initialBalance | numberWithCommas }}</div>
            <div class="field">시작 자산</div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>주식</th>
              <th>보유수량</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(quantity, index) in quantities" :key="index">
              <td>주식 {{ index + 1 }}</td>
              <td>{{ quantity }} 주</td>
              <td>
                <input
                  class="quantity-input"
                  type="number"
                  min="0"
                  max="10000"
                  value="0"
                  size="4"
                  v-model="quantitiesBuffer[index]"
                />
              </td>
              <td>
                <button
                  @click="handleBuyClick(index)"
                  class="action-button buy-stock"
                >
                  매수
                </button>
              </td>
              <td>
                <button
                  @click="handleSellClick(index)"
                  type="submit"
                  class="action-button sell-stock"
                >
                  매도
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="buttons">
        <div class="button reset-button" @click="handleResetButtonClick()">
          Reset
        </div>
        <div class="button proceed-button" @click="handleProceedButtonClick()">
          Go!
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "../components/Card";
import { getGameInfo } from "@/api/fetchers";
import { buyStock, sellStock, resetGame, proceedGame } from "@/api/posters";
import StockGraph from "@/components/StockGraph";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default {
  name: "Game",
  components: { Card, StockGraph },
  data() {
    return {
      loading: true,
      stocks: [],
      currentDate: 0,
      datacollections: [],
      initialBalance: 0,
      totalBalance: 0,
      quantitiesBuffer: [],
      apiUrl: process.env.VUE_APP_API_URL,
      quantities: []
    };
  },
  created() {
    this.init();
  },
  mounted() {
    this.fillData();
  },
  computed: {
    myStyles() {
      return {
        height: "100px",
        width: "80%"
      };
    }
  },
  filters: {
    getRecentPrice(prices) {
      if (prices.length === 0) {
        return 0;
      } else if (prices.length === 1) {
        return prices[0];
      } else {
        return prices[prices.length - 1];
      }
    },
    percentify(flunc) {
      return (flunc * 100).toFixed(2);
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  methods: {
    init() {
      getGameInfo()
        .then(({ data }) => {
          this.gameInfo = data["gameInfo"];
          this.currentDate = data.gameInfo["curDate"];
          this.stocks = data.gameInfo["prices"];
          this.loading = false;
          this.initialBalance = data.gameInfo["initialBalance"];
          this.totalBalance = data.gameInfo["cash"];
          this.quantities = data.gameInfo["qty"];
          this.fillData();
          this.quantitiesBuffer = Array(this.quantities.length).fill(0);
        })
        .catch(error => {
          alert("Error !");
          console.log(error);
        });
    },
    handleBuyClick(stockIndex) {
      const count = this.quantitiesBuffer[stockIndex];
      buyStock(stockIndex, count)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          alert("보유 금액이 부족합니다!");
          console.log(err);
        })
        .finally(() => {
          this.init();
        });
    },
    handleSellClick(stockIndex) {
      const count = this.quantitiesBuffer[stockIndex];
      sellStock(stockIndex, count)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          alert("보유 수량이 부족합니다!");
          console.log(err);
        })
        .finally(() => {
          this.init();
        });
    },
    handleResetButtonClick() {
      this.loading = true;
      resetGame()
        .then(() => {
          this.init();
        })
        .catch(err => {
          alert("알 수 없는 오류가 발생했습니다.");
          console.log(err);
        }).finally(() => {
          this.loading = false;
        })
    },
    handleProceedButtonClick() {
      proceedGame()
        .then(() => {
          this.init();
        })
        .catch(err => {
          alert("알 수 없는 오류가 발생했습니다.");
          console.log(err);
        });
    },
    calcFlunc(prices) {
      const pl = prices.length;
      if (pl < 2) {
        return 0;
      } else {
        return prices[pl - 1] / prices[pl - 2] - 1;
      }
    },
    fillData() {
      console.log("filldata");
      if (!this.loading) {
        console.log("notloading");
        this.datacollections = [];
        for (let i = 0; i < this.stocks.length; i++) {
          const prices = this.stocks[i];
          this.datacollections.push({
            datasets: [
              { data: [...prices], backgroundColor: getRandomColor() }
            ],
            labels: prices.map((_, index) => index)
          });
        }
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style lang="scss" scoped>
.stock-card {
  background-color: white;
  min-height: 50px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;

  .stock-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;

    span:not(.stock-name) {
      letter-spacing: -0.03rem;
    }

    span.stock-name {
      font-weight: 900;
    }

    span.stock-price {
      font-size: 0.8rem;
    }

    span.stock-flunc {
      font-size: 0.7rem;
    }
  }
}

.stock-trade-card {
  @include inner-card();

  padding: 10px;
  .card-title {
    color: black;
  }

  .balance {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .statistics {
      text-align: center;
      &.total-balance {
        margin-right: 30px;
      }
      .value {
        font-weight: 900;
        margin-bottom: 0.2rem;
      }

      .field {
        font-size: 0.8rem;
      }
    }
  }

  table {
    margin-top: 30px;
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;

    .quantity-input,
    .action-button {
      /* outline: none; */
      border: none;
      font-size: 0.9rem;
      border-radius: 5px;
      padding: 0.5rem;
      outline: none;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    th,
    td {
      white-space: nowrap;
      text-align: center;
    }

    .quantity-input {
      width: 100%;
    }

    .action-button {
      font-weight: bold;
      white-space: nowrap;
      font-size: 0.9rem;
      padding: 0.5rem;
      color: white;

      &.buy-stock {
        background: #eb5757;
      }

      &.sell-stock {
        background: #2f80ed;
      }
    }
  }
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  .button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: white;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;

    font-size: 1.2rem;
    font-weight: bold;

    &.reset-button {
      flex: 2;
      margin-right: 10px;
    }

    &.proceed-button {
      flex: 3;
    }
  }
}
</style>
