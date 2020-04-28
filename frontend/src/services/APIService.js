// cette classe est le model
// communication avec le serveur
import axios from "axios"


export default class APIService {
    constructor() {
        super();
        this.url = "http://localhost:3000"
    }

    testRequest = (params) => {
        return axios.post(this.url + "/", { params })
    }
}