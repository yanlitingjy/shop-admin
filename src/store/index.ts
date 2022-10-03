import { defineStore } from 'pinia'
import { IUserInfo } from '@/api/types/common'

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
            userInfo:null as IUserInfo | null,
            name:'123'
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'user',
                storage: localStorage,
            },
        ],
    },
    actions: {
        setUser(value:IUserInfo | null) {
            console.log(value)
            this.userInfo = value
        }
    },
})