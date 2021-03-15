import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5050/api/",
  withCredentials: true,
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    //error message: err.response.data.message
    if (err.response.status === 401) {
      //log user off
      console.log("unauthhhh");
    }
  }
);

export default instance;
