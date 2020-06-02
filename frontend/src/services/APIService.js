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

    // service pour ajouter un produit
    addProduct = (titre, prix, description, userId) => {
        return axios.post(this.url + '/produit/createProduct', { titre, prix, description, userId })
    }

    // service pour récupérer les produits
    getProducts = () => {
        return axios.get(this.url + '/produit/allProducts')
    }

    // service pour récupérer mes produits
    getMyProducts = (userId) => {
        return axios.get(this.url + '/produit/getMyProducts/' + userId)
    }

    // service pour reset password
    resetPassword = (password, newPassword, email) => {
        return axios.post(this.url + '/users/resetPassword', { password, newPassword, email })
    }

}