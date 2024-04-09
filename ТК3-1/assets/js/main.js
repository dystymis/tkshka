Vue.createApp({
    data() {
        return {
            page: 'index',
            services: [
                {
                    id: 1,
                    name: 'Услуга по смене шин',
                    description: ' Описание услуги 1',
                    image: 'assets/images/pic1.jpg'
                },
                {
                    id: 2,
                    name: 'Услуга слесарные работы',
                    description: 'Описание услуги 2',
                    image: 'assets/images/pic2.jpg'
                },
                {
                    id: 3,
                    name: 'Услуга по ремонту кузова',
                    description: 'Описание услуги 3',
                    image: 'assets/images/pic3.jpg'
                }
            ]
        }
    },
    methods: {
        openPage(pageName) {
            this.page = pageName;
        }
    }
}).mount('#app')