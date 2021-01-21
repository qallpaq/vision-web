import axios from "axios"
import {locStorage} from "../helpers"


export default class UserService {

    baseURL = 'http://erp.apptrix.ru/api/clients/'

    createUser = data => {
        return axios.post(`${this.baseURL}create/`, data)
    }

    authUser = (username, password) => {
        const data = {username: username, password: password}
        return axios.post(`${this.baseURL}token/`, data)
    }

    getUser = () => {
        return axios.get(`${this.baseURL}${locStorage('client_id')}/`, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${locStorage('token')}`
            }
        })
    }

    refreshToken = token => {
        return axios.post(`${this.baseURL}token/refresh/`, token)
    }
}
