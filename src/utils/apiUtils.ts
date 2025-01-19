import axios from "axios";

export const privateApiClient = axios.create({ baseURL: "" });
export const publicApiClient = axios.create({ baseURL: "" });

privateApiClient.interceptors.request.use(async (config) => {
  const idToken = "";
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
