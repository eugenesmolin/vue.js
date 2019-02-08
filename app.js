var cars = [
    {
        name: 'Toyota',
        model: 'TR-200',
        year: 2018,
        img: 'img/toyota.jpg',
        phone: '+380(50)3652256'
    },
    {
        name: 'Ford',
        model: 'TR-9652',
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
    }
];

new Vue({
    el: '#app',
    data: {
        cars: cars,
        carShow: cars[0],
        selectedCar: 0,
        visiblePhone: false,
        search: ''
    },
    methods: {
        clickCar(index) {
            this.carShow = cars[index];
            this.selectedCar = index;
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
    }
});