import { getToken } from "@/app/(auth)/actions";
import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fastbilling.azurewebsites.net/api",
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const token = await getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error instanceof AxiosError) {
      console.log("an error with axios has ocurred");
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
