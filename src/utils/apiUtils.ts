import axios from "axios";

export const axiosPrivateApiHandler = axios.create({ baseURL: "" });
export const axiosPublicApiHandler = axios.create({ baseURL: "" });

axiosPrivateApiHandler.interceptors.request.use(async (config) => {
  const idToken = "";
  config.headers["Authorization"] = `Bearer ${idToken}`;
  return config;
});

axiosPrivateApiHandler.interceptors.response.use(
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
