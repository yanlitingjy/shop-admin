/**
 * 公共基础接口封装
 */

import request from '@/utils/request'
import { ILoginInfo } from './types/common'


export const getLoginInfo = () =>{
    request<ILoginInfo>({
        method:'GET',
        url: '/login/info'
    })
    // request.get<ResponseData>('/login/info')
}