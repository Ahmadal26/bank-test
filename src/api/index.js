import axios from "axios";
const instance = axios.create({
  baseURL: "https://coded-projects-api.herokuapp.com/api/",
});

export default instance;
