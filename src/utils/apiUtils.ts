import axios from "axios";
import { auth } from "../molecules/auth/utils/firebase";

export const privateApiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
});
export const publicApiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
});

privateApiClient.interceptors.request.use(async (config) => {
  const idToken = await auth?.currentUser?.getIdToken();
  console.log(idToken);
  config.headers["Authorization"] = `Bearer ${idToken}`;
  return config;
});

privateApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (status === 403) {
      // Handle unauthorized error
    } else if (status === 404) {
      // Handle not found errors
    } else {
      // Handle other errors
    }
    return Promise.reject(error);
  }
);
