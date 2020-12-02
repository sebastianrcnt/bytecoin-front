import axios from "axios";
const api = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = api;

export async function getTop5Stocks() {
  return axios.get("api/stocks/top");
}

export async function getStockHistory(stockId) {
  console.log(stockId);
  return {};
}

export async function getStockById(stockId) {
  return axios.get(`api/stocks/${stockId}`);
}
