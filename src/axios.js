import axios from "axios";
import environment from "./environment";

const axiosInstance = axios.create({
  baseURL:
    environment.NODE_ENV === "production"
      ? ""
      : "https://hackon-sks.herokuapp.com",
});

export default axiosInstance;
