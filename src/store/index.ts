import { defineStore } from 'pinia'

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