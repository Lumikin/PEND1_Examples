import axios from "axios";

export const api_jsonfake = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com',
        timeout: 5000 //Demorou mais de 5 segundos ele sai 
    }
);