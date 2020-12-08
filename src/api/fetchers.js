import axios from "axios";
const api = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = api;

export async function getTop5Stocks() {
  return axios.get("api/stocks/top");
}

export async function getGameInfo() {
  return axios.get("api/game/info");
}

export async function getStockById(stockId) {
  return axios.get(`api/stocks/${stockId}`);
}
