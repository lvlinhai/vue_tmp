import { defineStore } from "pinia";

export const use = defineStore('use', {
    state: () => {
        return {
            age: 1,
            name: "use"
        }
    },
    getters: {},
    actions: {},
    persist: {
        // this 开启数据缓存
        // 刷新，关闭页面，数据依然存在
        enabled: true,
        strategies: [
            {
                key: 'name',
                // 本地缓存，关闭页面重启不会缓存数据，刷新会缓存数据
                storage: localStorage,
                // 默认将所有数据加入缓存
                // 如果配置如下，表示仅将 age 加入缓存，name 不会加入缓存
                paths: [age]
            }
        ]
    }
})