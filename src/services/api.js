import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api-musics.onrender.com',
    timeout: 5000
})