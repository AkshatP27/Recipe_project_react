import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",

  // 'true' if we want 'cookies', 'jwt tokens', etc.
  withCredentials: false,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    console.log("request result: ------->", config);
    
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log("response result: ------->", response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
