import axios from "axios";



const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_URL,
    withCredentials: true
});

axiosInstance.interceptors.request.use(
    (config)=> {
        const token = localStorage.getItem('accessToken');
        // console.log(token)
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }
)


axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 403){
            localStorage.removeItem('accessToken')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)


export default axiosInstance