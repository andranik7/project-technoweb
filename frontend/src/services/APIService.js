// cette classe est le model
// communication avec le serveur
import axios from "axios"


export default class APIService {
    constructor() {
        this.url = "http://localhost:3100"
    }

    testRequest = (params) => {
        return axios.post(this.url + "/users/", { params })
    }


    // service pour se connecter
    login = (email, password) => {
        return axios.post(this.url + '/users/login', { email, password })
    }


    // service pour créer un compte
    register = (credentials) => {
        return axios.post(this.url + '/users/register', credentials)
    }


    // service pour créer un conseil
    createAdvice = (data) => {
        return axios.post(this.url + '/advice/createAdvice', data)
    }

    // service pour récupérer les conseils
    getAdvices = () => {
        return axios.get(this.url + '/advice/getAdvices')
    }
}