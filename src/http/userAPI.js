import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";
export const registration = async (email, password) => {
    const {data} = await $host.post('auth/register/', {email, password})
    return jwtDecode(data.token)
}
export const login = async (email, password) => {
    const {data} = await $host.post('auth/login/', {email, password})
    localStorage.setItem("accessToken",data.accessToken)
    return jwtDecode(data.accessToken)
}
// export const check = async () => {
//     const response = await $host.post('auth/registration/', {login, password})
//     return response
// }