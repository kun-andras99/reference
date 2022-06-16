import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});

export const webRoute = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-type": "application/json"
    }
});

export const jsonRoute = axios.create({
    baseURL: "http://localhost:3000/json",
    headers: {
        "Content-type": "application/json"
    }
});