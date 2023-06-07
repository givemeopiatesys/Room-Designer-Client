import axios from "axios";
import {BASE_API_URL} from "../Utils/consts";

const $host = axios.create({
    baseURL: BASE_API_URL
})
const $authHost = axios.create({

})
const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}