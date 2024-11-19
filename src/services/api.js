import axios from 'axios'


 const apiCodeBurger = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json'
      }
})

apiCodeBurger.interceptors.request.use( async config => {
    const userData = await localStorage.getItem('devburger:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default apiCodeBurger