import axios, { AxiosInstance } from 'axios';

export const setUpAxios = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: 'https://api.api-ninjas.com/v1',
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SnU+umX0n0GfdMaujg/LFw==mGmrDm4jFHKuTd1g"
        }
    });
    return instance;
};

// api used
export const api = setUpAxios();