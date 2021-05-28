import axios from "axios";
import environment from "./environment";

const axiosInstance = axios.create({
  baseURL:
    environment.NODE_ENV === "production"
      ? ""
      : process.env.REACT_APP_BACKEND_URL,
});

export default axiosInstance;
