import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2e74f08e445c4f69862a83b8e850e640",
  },
});