import axios, { AxiosRequestConfig } from 'axios'

// request 不支持泛型
// request.get post put 支持响应数据泛型
// 由于我们的后端又包含了一层data，导致我们访问数据比较麻烦，所以我们自己封装了一个request
const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL
})


// 请求拦截器
request.interceptors.request.use(function(config) {
    return config
},function (error){
    return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
    return response
},function(error) {
    return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig)=>{
    return request(config).then(res=>{
        return res.data.data as T
    })
}