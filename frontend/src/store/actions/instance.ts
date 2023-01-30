import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});

// 요청 인터셉터 -> then 또는  catch로 처리되기 전에 응답을 가로챌수 있음
instance.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("dc-user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      // config.headers.Authorization = `Bearer ${token}`;
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    console.log("### 토큰 있음!!!!");
    console.log("config", config);
    console.log("userDetails", userDetails);
    // header에 토큰 추가
    return config;
  },
  (err) => {
    // 에러일 시 거부
    return Promise.reject(err);
  }
);
