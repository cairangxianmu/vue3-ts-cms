import axios from "axios";

axios.defaults.baseURL = "http://httpbin.org";
axios.defaults.timeout = 10000;

axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
    console.log("123get请求", res.data);
});

axios
    .all([
        axios.get("/get", { params: { name: "cairang", age: 19 } }),
        axios.post("/post", { data: { name: "why", age: 34 } }),
    ])
    .then((res) => {
        console.log("httpbin请求axiosall", res);
    });

axios.interceptors.request.use(
    (config) => {
        console.log("请求成功");
        return config;
    },
    (err) => {
        console.log("请求失败");
        return err;
    }
);
axios.interceptors.response.use(
    (res) => {
        console.log("响应成功的拦截");
        return res;
    },
    (err) => {
        console.log("服务器响应失败");
        return err;
    }
);
