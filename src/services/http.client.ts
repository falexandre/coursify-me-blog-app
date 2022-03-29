import axios from 'axios';

const HttpClient = axios.create({
    baseURL: 'https://blog.coursify.me/wp-json/wp/v2/',
    validateStatus: (status: number) => {
        return status >= 200 && status < 300;
    },
});

export default HttpClient;