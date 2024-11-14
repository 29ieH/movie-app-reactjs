import axios from "axios";
const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzNhNjkwNjNjNmE2MTQ1MDg5OGMzYTk2NzVhZDA0OSIsIm5iZiI6MTcyOTUyMDk0OS4zNzczMTQsInN1YiI6IjY3MTY2NDEzNmRjYTcxZTEwOWQ0ZjAyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fxsLG7puZQVh9gZ8f1wbxcG7qnEs_zLDibZrB5fcroQ";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
  headers: {
    accept: "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response && response.data) return response.data;
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
export default instance;
