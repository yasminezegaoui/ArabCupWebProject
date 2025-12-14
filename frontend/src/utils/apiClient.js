import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost', //i change it so NGINX decides where traffic goes
    headers:{
        'Content-Type': 'application/json'
    }
})
export default apiClient;