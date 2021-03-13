import axios from "axios";
import { BASE_URL } from "../constants/baseURl";
const axiosClien = axios.create({
  baseURL:BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

axiosClien.interceptors.request.use(async (congig) => {
  return congig;
});

axiosClien.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClien;
