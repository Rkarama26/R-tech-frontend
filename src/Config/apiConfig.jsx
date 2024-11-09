import axios from "axios";

// apiConfig.js or similar
export const API_BASE_URL = "http://localhost:8080"; // Make sure this is set to your backend URL
const jwt = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        'Content-Type':"application/json"
    }
})