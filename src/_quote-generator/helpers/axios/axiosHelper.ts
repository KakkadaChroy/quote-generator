import axios, { AxiosInstance } from 'axios';

export const setUpAxios = (): AxiosInstance =>
    axios.create({
        baseURL: 'https://quotable.vercel.app/quotes',
        headers: {
            "Content-Type": "application/json",
        }
    });

// api used
export const api = setUpAxios();