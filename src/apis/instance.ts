import axios from "axios";

export const https = axios.create({
  baseURL: `${import.meta.env.VITE_API_SERVER_BASE_URL}/v1/api`,
});

https.interceptors.response.use(({ data }) => data);
