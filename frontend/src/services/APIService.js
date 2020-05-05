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
}