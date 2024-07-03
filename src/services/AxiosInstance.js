import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:7000/',
    baseURL: 'https://invact-node-joshuajohnson8848s-projects.vercel.app/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;