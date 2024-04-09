Vue.createApp({
    data() {
        return {
            courseName: 'Vue.JS',
            userName: 'Вася Пупкин',
            newTask: '',
            tasks: [
                'Задание 1',
                'Задание 2',
                'Задание 3'
            ],
            forms: {
                input1: null,
                input2: null,
                checkboxes:[],
                select: null
            },
            demoInput: {
                disabled: false,
                placeholder: 'Новый плейсхолдер',
                classes: [],
            },
            showMessages: true
        }
    },
    methods: {
        clickByButton() {
            alert('Кнопка нажата');
        },
        formSubmitted() {
            alert('Форма отправлена');
        }
    },
    computed: {
        tasksNum() {
            if (this.tasks.length > 2) {
                return 'Много заданий'
            } else {
                return 'Мало заданий'
            }
        }
    }
}).mount('#app');