import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:8080/backend/api/'
})
export default instance;