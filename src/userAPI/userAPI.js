import axios from "axios"
import {locStorage} from "../helpers"


export default class UserService {

    baseURL = 'http://erp.apptrix.ru/api/clients/'

    createUser = async (data) => {
        return await axios.post(`${this.baseURL}create/`, data)
    }

    authUser = async (username, password) => {
        const data = {username: username, password: password}
        return await axios.post(`${this.baseURL}token/`, data)
    }

    getUser = async () => {
        return await axios.get(`${this.baseURL}${locStorage('client_id')}/`, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${locStorage('token')}`
            }
        })
    }

    refreshToken = async (token) => {
        return await axios.post(`${this.baseURL}token/refresh/`, token)
    }
}
