Vue.createApp({
    data() {
        return {
            lists: [],
            listTitle: null,
        }
    },
    methods: {
        addList() {
            let date = new Date();
            if(this.listTitle ) {
                let list = {};
                list.title = this.listTitle;
                list.time = (date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
                this.lists.unshift(list);
                this.listTitle = '';
            }
        }
    }
}).mount('#app')