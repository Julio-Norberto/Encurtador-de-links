// TOKEN: 0f4fac6b69f8693a44eff7f2379ab4c4fb26d3d0

import axios from 'axios';

export const key = "0f4fac6b69f8693a44eff7f2379ab4c4fb26d3d0"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;