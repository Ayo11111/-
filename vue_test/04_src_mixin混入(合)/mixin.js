// 主要用来复用配置
export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },

    mounted() {
        console.log('666');
    },
}

export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}