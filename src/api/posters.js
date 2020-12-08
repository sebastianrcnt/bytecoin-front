import axios from "axios";
const api = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = api;

export async function reportUp(postId) {
  return axios.post(`api/report/posts/${postId}`, { value: 1 });
}

export async function reportDown(postId) {
  return axios.post(`api/report/posts/${postId}`, { value: -1 });
}

export async function buyStock(stockId, count) {
  return axios.post(`api/game/buy`, { stockId, count });
}

export async function sellStock(stockId, count) {
  return axios.post(`api/game/sell`, { stockId, count });
}

export async function resetGame() {
  console.log("Start resetting..");
  return axios.post("api/game/reset");
}

export async function proceedGame() {
  return axios.get("api/game/proceed");
}
