import axios from "axios";
import { auth } from "../molecules/auth/utils/firebase";

export const privateApiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const publicApiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
});

privateApiClient.interceptors.request.use(async (config) => {
  const idToken = await auth?.currentUser?.getIdToken(true);
  if (idToken) {
    config.headers["Authorization"] = `Bearer ${idToken}`;
    return config;
  }
  const user = JSON.parse(localStorage.getItem("userDetails") || "");

  config.headers["Authorization"] = `Bearer ${user?.idToken}`;

  return config;
});

privateApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      // window.location.pathname = "/loading";
    } // Handle other errors

    return Promise.reject(error);
  }
);
