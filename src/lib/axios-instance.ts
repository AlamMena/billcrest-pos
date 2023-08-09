import { getToken } from "@/app/(auth)/actions";
import { toast } from "@/components/ui/use-toast";
import axios, { AxiosError } from "axios";
import { redirect, useRouter } from "next/navigation";

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
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        redirect("/signin");
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
