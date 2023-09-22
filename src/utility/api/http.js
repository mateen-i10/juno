import axios from "axios"
import authConfig from "../../configs/auth";

export const baseURL = process.env.NEXT_PUBLIC_API_BASEURL

// export const baseURL = "https://localhost:7191/api/"

const axiosInstance = axios.create()

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.getItem(authConfig.storageTokenKeyName)
    if(token) {
      // Modify the config object to add headers or perform other actions
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a request interceptor
axiosInstance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log('axios interceptor error', error)

    return Promise.reject(error);
  }
);
export default {
    _post: axiosInstance.post,
    _get: axiosInstance.get,
    _put: axiosInstance.put,
    _delete: axiosInstance.delete,
    _request: axiosInstance.request,
    _patch: axiosInstance.patch
}
