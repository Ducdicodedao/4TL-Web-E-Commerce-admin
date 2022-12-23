import axios from "axios";

const http = axios.create({
    baseURL: "https://fourtl-web-e-commerce-backend.onrender.com",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
http.defaults.headers.common["Cookie"] = "access_token";
export default http;
