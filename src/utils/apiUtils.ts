import axios from "axios";

export const apiClient = axios.create({ baseURL: "" });

apiClient.interceptors.request.use(async (config) => {
  const idToken = "";
  config.headers["Authorization"] = `Bearer ${idToken}`;
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
