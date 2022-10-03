import { defineStore } from 'pinia'
import { IUserInfo } from '@/api/types/common'
import { getItem,setItem } from '@/utils/storage'

export const useIsCollapseStore = defineStore('collapse', {
    state: () => {
        return { isCollapse: true }
    },
    actions: {
        toggleBar() {
            this.isCollapse = !this.isCollapse
        },
    },
})

export const useUserInfoStore = defineStore('user', {
    state: ()=> {
        return {
            userInfo:getItem<IUserInfo>('user'),
        }
    },
    actions: {
        setUser(value:IUserInfo | null) {
            this.userInfo = value
            setItem('user', value)
        }
    },
})