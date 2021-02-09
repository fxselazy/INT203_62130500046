const app ={
    data(){
        return{
            name: 'Nirawat Poramathumsakul',
            account: '@fxselazy',
            countPost: 1042,
            followers: 73.4,
            following: 153,
            image: './images/profile.png'
        }
    }
}

mountedApp = Vue.createApp(app).mount('#app')