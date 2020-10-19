import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test.shopkart.club/'
});

export default instance;