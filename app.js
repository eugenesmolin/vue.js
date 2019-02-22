// import Vue from 'vue';

var cars = [
    {
        name: 'Toyota',
        model: 'Camry',
        year: 2018,
        img: 'img/toyota.jpg',
        phone: '+380(50)3652256'
    },
    {
        name: 'Ford',
        model: 'Mondeo',
        year: 2015,
        img: 'img/ford.png',
        phone: '+380(50)3123377'
    },
    {
        name: 'Mitsubishi',
        model: 'Lancer',
        year: 2006,
        img: 'img/mitsubishi.jpg',
        phone: '+380(63)9991155'
    },
    {
        name: 'Ford',
        model: 'Focus',
        year: 2004,
        img: 'img/ford.png',
        phone: '+380(95)1112233'
    }
];

var log = (text, type, date = new Date()) => ({text, type, date});

new Vue({
    el: '#app',
    data: {
        cars: cars,
        carShow: cars[0],
        logs: [],
        selectedCar: 0,
        visiblePhone: false,
        search: '',
        visibleModal: false
    },
    methods: {
        clickCar(index) {
            this.carShow = cars[index];
            this.selectedCar = index;
        },
        newOrder() {
            this.visibleModal = false;
            this.logs.push(
                log(`Success order: ${this.carShow.name} - ${this.carShow.model}`, 'ok')
            );
        },
        cancelOrder() {
            this.visibleModal = false;
            this.logs.push(
                log(`Cancel order: ${this.carShow.name} - ${this.carShow.model}`, 'cancel')
            );
        }
    },
    computed: {
        phoneBtnText() {
            return this.visiblePhone ? 'Hide phone' : 'Show phone';
        },
        filteredCars() {
            return this.cars.filter(carShow => {
                return carShow.name.indexOf(this.search) > -1;
            });
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString();
        }
    }
});