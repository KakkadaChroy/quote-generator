import axios, { AxiosInstance } from 'axios';

export const setUpAxios = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: 'https://quotable.vercel.app/quotes',
        headers: {
            "Content-Type": "application/json",
        }
    });
    return instance;
};

// api used
export const api = setUpAxios();