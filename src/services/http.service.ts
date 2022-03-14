import axios from "axios";

const http = axios.create({
  baseURL: "https://serentestbot.herokuapp.com",
});

export default http;
