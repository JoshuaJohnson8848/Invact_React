import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:7000/',
    baseURL: 'http://192.168.1.2:7000/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;