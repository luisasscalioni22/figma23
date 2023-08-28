import axios from "axios";

export const api = axios.create({
    baseURL: "https://luisa.onrender.com",
    headers:{
        Accpet:'application/json'
    }
})