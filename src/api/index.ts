import axios from 'axios'
const api = axios.create({
    baseURL: "https://backend-projeto-edglobo.herokuapp.com/"
})
api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default api