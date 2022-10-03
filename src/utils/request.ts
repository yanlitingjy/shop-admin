import axios, { AxiosRequestConfig } from "axios";
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '@/router/'
import pinia from "@/plugins/pinia";
import { useUserInfoStore } from "@/store";
const userStore = useUserInfoStore(pinia);
// request 不支持泛型
// request.get post put 支持响应数据泛型
// 由于我们的后端又包含了一层data，导致我们访问数据比较麻烦，所以我们自己封装了一个request
const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
});

// 请求拦截器
request.interceptors.request.use(
    function (config) {
        config.url = config.url?.trim();
        const { userInfo } = userStore;
        if (userInfo && userInfo.token) {
            config.headers.Authorization = `Bearer ${userInfo.token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 控制登录过期的锁
let isRefreshing = false;

// 响应拦截器
request.interceptors.response.use(
    function (response) {
        const status = response.data.status;
        // 正确的情况
        if (!status || status === 200) {
            return response;
        }
        // 错误情况：比如 token 无效...
        // 统一处理登录过期
        if (status === 410000) {
            if (isRefreshing) return Promise.reject(response);
            isRefreshing = true;
            ElMessageBox.confirm(
                "您的登录已过期，您可以取消停留在此页面，或确认重新登录",
                "登录过期",
                {
                    confirmButtonText: "确认",
                    cancelButtonText: "取消",
                }
            )
                .then(() => {
                    // 清除本地过期的登录状态
                    userStore.setUser(null)
                    // 跳转到登录页面
                    router.push({
                        name: "login",
                        query: {
                            redirect: router.currentRoute.value.fullPath,
                        },
                    });
                    // 抛出异常
                })
                .finally(() => {
                    isRefreshing = false;
                });

            // 在内部消化掉这个业务异常
            return Promise.reject(response);
        }

        // 其它错误情况
        ElMessage.error(response.data.msg || "请求失败，请稍后重试");
        // 手动返回一个 Promise 异常
        return Promise.reject(response);
    },
    function (error) {
        ElMessage.error(error.message || "请求失败，请稍后重试");
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default <T = any>(config: AxiosRequestConfig) => {
    return request(config).then((res) => {
        return (res.data.data || res.data) as T;
    });
};
