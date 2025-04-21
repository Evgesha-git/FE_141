import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = 'https://fakestoreapi.com/'

export default axiosInstance