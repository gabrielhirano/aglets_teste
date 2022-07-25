import axios from 'axios';

const baseURL = 'http://localhost:3333/';
const instance = axios.create({
    baseURL: baseURL,
})

export default instance;