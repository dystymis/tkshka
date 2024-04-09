const app = new Vue({
    el: '#app',
    data: {
        tasks: [
            {
                id: 1,
                category: "Vue",
                name: "Выполнить задание 1.1.1",
                description: "Выполнив данное задание вы научитесь лучше работать с условиями для отображения контента.",
                checked: false,
                subtasks: [
                    { name: "Объеденить все страницы в одну" },
                    { name: "Переключение по страницам" },
                    { name: "Текущий пункт навигации выделяется" },
                ]
            },
            {
                id: 2,
                category: "Vue",
                name: "Выполнить задание 1.1.2",
                description: "Выполнив данное задание вы научитесь лучше работать со списками, массивами, вычислительными свойствами и датой.",
                checked: false,
                subtasks: [
                    { name: "Добавление при клике по кнопке" },
                    { name: "Очистка предыдущего значения" },
                    { name: "Время выводится" },
                    { name: "Список сортируется" },
                ]
            },
            {
                id: 3,
                category: "Vue",
                name: "Выполнить задание 1.1.3",
                description: "Выполнив данное задание вы научитесь лучше работать со списками, массивами, css-классами и вычислительными свойствами.",
                checked: false,
                subtasks: [
                    { name: "Вывести список задач" },
                    { name: "Стиль карточки изменяется при переключении чекбокса" },
                    { name: "Сортировка по актуальности" },
                ]
            }
        ],   
    },
    computed: {
        sortedTasks() {
            return this.tasks.slice().sort((a, b) => {
                return a.checked - b.checked; 
            }); 
        }

    },

})


