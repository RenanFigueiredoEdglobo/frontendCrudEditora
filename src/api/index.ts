import https from 'https'
import axios from 'axios'

const api = axios.create({
    baseURL: "https://backend-projeto-edglobo.herokuapp.com/",
})
export default api