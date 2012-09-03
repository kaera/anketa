/**
 * Создает экземпляр Машины
 * @this {Car}
 * @param {string} manufacturer Производитель
 * @param {string} model Модель
 * @param {number} year Год производство
 */
function Car(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;

    // Если конструктор вызывается без указания текущего года, то подставлять текущий
    this.year = year || (new Date).getFullYear();
}

// Методы вывода информации о машине
Car.prototype.getInfo = Car.prototype.toString = function() {
    return [this.manufacturer, this.model, this.year].join(' ')
}
Car.prototype.getDetailedInfo = function() {
    return 'Производитель: ' + this.manufacturer +
           '. Модель: ' + this.model +
           '. Год: ' + this.year
}

var bmw = new Car('BMW', 'X5', 2010),
    audi = new Car('Audi', 'Q5', 2012),
    toyota = new Car('Toyota', 'Camry');

// console.log('Car: ' + bmw); // Car: BMW X5 2010
// console.log(bmw.getInfo()); // BMW X5 2010
// console.log(bmw.getDetailedInfo()); // Производитель: BMW. Модель: X5. Год: 2010

/**
 * Создает экземпляр Автосалона
 * @this {CarDealer}
 * @param {string} name Название автосалона
 */
function CarDealer(name) {
    this.name = name;
    this.cars = [];
}

var yandex = new CarDealer('Яндекс.Авто');

/**
 * Добавить одну или несколько машин в автосалон
 * @param {...Car} var_args
 */
CarDealer.prototype.add = function() {
    for (var i = 0, l = arguments.length; i < l; i++)
        if (arguments[i] instanceof Car)
            this.cars.push(arguments[i]);

    return this
}
yandex
    .add(toyota)
    .add(bmw, audi);

/**
 * Установить цену на машину
 * @param {string} car идентификатор машины
 * @param {string} price стоимость
 */
CarDealer.prototype.setPrice = function(car, price) {
    (this.catalog) || (this.catalog = {});
    // Стоимость машины может быть задана в двух валютах: йена и евро.
    if (price[0] == '€' || price[0] == '¥')
        this.catalog[car] = price;

    return this
}
yandex
    .setPrice('BMW X5 2010', '€2000')
    .setPrice('Audi Q5 2012', '€3000')
    .setPrice('Toyota Camry 2012', '¥3000');

function getCountry() {
    switch (this.manufacturer.toLowerCase()) {
        case 'bmw':
        case 'audi':
            return 'Germany';

        case 'toyota':
            return 'Japan';
    }
}

/**
 * Вывод списка автомобилей
 */
CarDealer.prototype.list = function() {
    console.log(this.cars.join(', '));
}

/**
 * Вывод списка автомобилей с фильтрацией
 * по стране производителю, используя метод getCountry
 *
 * @param {string} country
 */
CarDealer.prototype.listByCountry = function(country) {
    var cars = [];
    for (var i = 0, l = this.cars.length; i < l; i++) {
        if (getCountry.call(this.cars[i]) == country) {
            cars.push(this.cars[i]);
        };
    };
    console.log(cars.join(', '));
}
yandex.list(); //BMW X5 2010, Audi Q5 2012, Toyota Camry 2012
yandex.listByCountry('Germany'); //BMW X5 2010, Audi Q5 2012

/**
 * Вывод списка машин с ценой в рублях
 */
CarDealer.prototype.listWithPrice = function() {
    var cars = [],
        car;

    for (car in this.catalog) {
        if (this.catalog.hasOwnProperty(car)) {
          console.log(car + ': ' + convert(this.catalog[car]));
        };
    };

    function convert(price) {
      var rate;
      switch (price[0]) {
        case '€': rate = 40; break;
        case '¥': rate = 15; break;
      };
      return +price.slice(1) * rate + ' руб.'
    };
}
yandex.listWithPrice();
