import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID nLrV3_3TfjOxXmxw9XuXHN3RXrN0ncUQEddGDqjVnYU'
    }
});