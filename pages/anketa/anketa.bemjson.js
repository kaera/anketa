({
    block: 'b-page',
    title: 'Pseudo link',
    head: [
        { elem: 'css', url: '_anketa.css'},
        { elem: 'css', url: '_anketa', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_anketa.js' }
    ],
    content: [
        {
            block: 'b-text',
            content: [
                {
                    elem: 'h1',
                    content: 'Анкета'
                }
            ]
        },
        {
            block: 'b-details',
            summary: 'Автосалон',
            content: {
                block: 'b-text',
                content: [
                    {
                        elem: 'pre',
                        content: "\
                            /** \n \
                             * Создает экземпляр Машины \n \
                             * @this {Car} \n \
                             * @param {string} manufacturer Производитель \n \
                             * @param {string} model Модель \n \
                             * @param {number} year Год производство \n \
                             */ \n \
                            function Car(manufacturer, model, year) { \n \
                                this.manufacturer = manufacturer; \n \
                                this.model = model; \n \
                            \n \
                                // Если конструктор вызывается без указания текущего года, то подставлять текущий \n \
                                this.year = year || (new Date).getFullYear(); \n \
                            } \n \
                            \n \
                            // Методы вывода информации о машине \n \
                            Car.prototype.getInfo = Car.prototype.toString = function() { \n \
                                return [this.manufacturer, this.model, this.year].join(' ') \n \
                            } \n \
                            Car.prototype.getDetailedInfo = function() { \n \
                                return 'Производитель: ' + this.manufacturer + \n \
                                       '. Модель: ' + this.model + \n \
                                       '. Год: ' + this.year \n \
                            } \n \
                            \n \
                            var bmw = new Car('BMW', 'X5', 2010), \n \
                                audi = new Car('Audi', 'Q5', 2012), \n \
                                toyota = new Car('Toyota', 'Camry'); \n \
                            \n \
                            // console.log('Car: ' + bmw); // Car: BMW X5 2010 \n \
                            // console.log(bmw.getInfo()); // BMW X5 2010 \n \
                            // console.log(bmw.getDetailedInfo()); // Производитель: BMW. Модель: X5. Год: 2010 \n \
                            \n \
                            /** \n \
                             * Создает экземпляр Автосалона \n \
                             * @this {CarDealer} \n \
                             * @param {string} name Название автосалона \n \
                             */ \n \
                            function CarDealer(name) { \n \
                                this.name = name; \n \
                                this.cars = []; \n \
                            } \n \
                            \n \
                            var yandex = new CarDealer('Яндекс.Авто'); \n \
                            \n \
                            /** \n \
                             * Добавить одну или несколько машин в автосалон \n \
                             * @param {...Car} var_args \n \
                             */ \n \
                            CarDealer.prototype.add = function() { \n \
                                for (var i = 0, l = arguments.length; i < l; i++) { \n \
                                    this.cars.push(arguments[i]); \n \
                                }; \n \
                                return this \n \
                            } \n \
                            yandex \n \
                                .add(toyota) \n \
                                .add(bmw, audi); \n \
                            \n \
                            /** \n \
                             * Установить цену на машину \n \
                             * @param {string} car идентификатор машины \n \
                             * @param {string} price стоимость \n \
                             */ \n \
                            CarDealer.prototype.setPrice = function(car, price) { \n \
                                (this.catalog) || (this.catalog = {}); \n \
                                // Стоимость машины может быть задана в двух валютах: йена и евро. \n \
                                if (price[0] == '€' || price[0] == '¥') { \n \
                                    this.catalog[car] = price; \n \
                                }; \n \
                                return this \n \
                            } \n \
                            yandex \n \
                                .setPrice('BMW X5 2010', '€2000') \n \
                                .setPrice('Audi Q5 2012', '€3000') \n \
                                .setPrice('Toyota Camry 2012', '¥3000'); \n \
                            \n \
                            function getCountry() { \n \
                                switch (this.manufacturer.toLowerCase()) { \n \
                                    case 'bmw': \n \
                                    case 'audi': \n \
                                        return 'Germany'; \n \
                            \n \
                                    case 'toyota': \n \
                                        return 'Japan'; \n \
                                } \n \
                            } \n \
                            \n \
                            /** \n \
                             * Вывод списка автомобилей \n \
                             */ \n \
                            CarDealer.prototype.list = function() { \n \
                                console.log(this.cars.join(', ')); \n \
                            } \n \
                            \n \
                            /** \n \
                             * Вывод списка автомобилей с фильтрацией \n \
                             * по стране производителю, используя метод getCountry \n \
                             * \n \
                             * @param {string} country \n \
                             */ \n \
                            CarDealer.prototype.listByCountry = function(country) { \n \
                                var cars = []; \n \
                                for (var i = 0, l = this.cars.length; i < l; i++) { \n \
                                    if (getCountry.call(this.cars[i]) == country) { \n \
                                        cars.push(this.cars[i]); \n \
                                    }; \n \
                                }; \n \
                                console.log(cars.join(', ')); \n \
                            } \n \
                            yandex.list(); //BMW X5 2010, Audi Q5 2012, Toyota Camry 2012 \n \
                            yandex.listByCountry('Germany'); //BMW X5 2010, Audi Q5 2012 \n \
                            \n \
                            /** \n \
                             * Вывод списка машин с ценой в рублях \n \
                             */ \n \
                            CarDealer.prototype.listWithPrice = function() { \n \
                                var cars = [], \n \
                                    car; \n \
                            \n \
                                for (car in this.catalog) { \n \
                                    if (this.catalog.hasOwnProperty(car)) { \n \
                                      console.log(car + ': ' + convert(this.catalog[car])); \n \
                                    }; \n \
                                }; \n \
                            \n \
                                function convert(price) { \n \
                                  var rate; \n \
                                  switch (price[0]) { \n \
                                    case '€': rate = 40; break; \n \
                                    case '¥': rate = 15; break; \n \
                                  }; \n \
                                  return +price.slice(1) * rate + ' руб.' \n \
                                }; \n \
                            } \n \
                            yandex.listWithPrice(); \n \
                        "
                    }
                ]
            }
        },
        {
            block: 'b-details',
            summary: 'Скриптовая задача',
            content: {
                block: 'b-text',
                content: [
                    {
                        elem: 'h3',
                        content: 'Bash'
                    },
                    {
                        elem: 'pre',
                        content: " \
                            #!/usr/bin/env bash \n \
                            \n \
                            usage() { \n \
                            cat << EOF \n \
                            Usage: printargs.sh [OPTIONS] [ARGUMENTS] \n \
                              Print the number of arguments. \n \
                            \n \
                            OPTIONS: \n \
                              -h      print help message \n \
                              -m MSG  custom message \n \
                              -v      verbose mode \n \
                            \n \
                            Examples: \n \
                              printargs.sh a b c \n \
                              printargs.sh -m 'Arguments count: ' a b c \n \
                              printargs.sh -v -m 'Arguments count: ' a b c \n \
                              printargs.sh -h \n \
                            \n \
                            EOF \n \
                            } \n \
                            \n \
                            while getopts 'hm:v' OPTION \n \
                            do \n \
                                case $OPTION in \n \
                                    h) \n \
                                        usage \n \
                                        exit 1;; \n \
                                    m) \n \
                                        MESSAGE=$OPTARG;; \n \
                                    v) \n \
                                        VERBOSE=1;; \n \
                                esac \n \
                            done \n \
                            \n \
                            COUNT=0 \n \
                            \n \
                            [ $VERBOSE ] && shift \n \
                            [ $MESSAGE ] && shift 2 \n \
                            \n \
                            for ARG in $@; do \n \
                                [ $VERBOSE ] && echo $ARG \n \
                                let COUNT+=1 \n \
                            done \n \
                            \n \
                            if [[ $MESSAGE != '' ]]; then \n \
                                echo $MESSAGE \n \
                            fi \n \
                            \n \
                            echo $COUNT \n \
                        "
                    },
                    {
                        elem: 'h3',
                        content: 'Python'
                    },
                    {
                        elem: 'pre',
                        content: "\ \n \
                            #!/usr/bin/env python \n \
                            \n \
                            import argparse \n \
                            \n \
                            parser = argparse.ArgumentParser(description='Print the number of arguments.') \n \
                            parser.add_argument('arguments', metavar='ARG', type=str, nargs='*', help='some arguments') \n \
                            parser.add_argument('-m', dest='message', default='', help='custom message') \n \
                            parser.add_argument('-v', '--verbose', action='store_true', dest='verbose', help='verbose mode') \n \
                            \n \
                            args = parser.parse_args() \n \
                            \n \
                            count = 0 \n \
                            \n \
                            for a in args.arguments: \n \
                                if args.verbose: \n \
                                    print a \n \
                                count += 1 \n \
                            \n \
                            if args.message != '': \n \
                                print(args.message) \n \
                            \n \
                            print(count) \n \
                        "
                    },
                    {
                        elem: 'h3',
                        content: 'Perl'
                    },
                    {
                        elem: 'pre',
                        content: ' \
                            #!/usr/bin/env perl \n \
                            \n \
                            use strict; \n \
                            use Getopt::Long; \n \
                            use Pod::Usage; \n \
                            \n \
                            my $help; \n \
                            my $message = ""; \n \
                            my $verbose; \n \
                            \n \
                            @ARGV and GetOptions( \n \
                                "h" => \$help, \n \
                                "m:s" => \$message, \n \
                                "v" => \$verbose, \n \
                            ) or pod2usage(1); \n \
                            pod2usage(-verbose => 2, -exitval => 2) if $help; \n \
                            \n \
                            my $count = 0; \n \
                            my $arg; \n \
                            \n \
                            foreach $arg (@ARGV) { \n \
                                print($arg . "\\n") if $verbose; \n \
                                $count++; \n \
                            } \n \
                            \n \
                            if($message ne "") { \n \
                                print($message . "\\n"); \n \
                            } \n \
                            \n \
                            print($count . "\\n"); \n \
                            \n \
                            __END__ \n \
                            \n \
                            =head1 NAME \n \
                            \n \
                                printargs.pl - Print the number of arguments. \n \
                            \n \
                            =head1 SYNOPSIS \n \
                            \n \
                                printargs.pl [options] [arguments] \n \
                            \n \
                            =head1 OPTIONS \n \
                            \n \
                                -h      Show help message. \n \
                            \n \
                                -m MSG  Specify a custom message. \n \
                            \n \
                            \n \
                            =head1 EXAMPLE \n \
                            \n \
                                printargs.sh a b c \n \
                            \n \
                                printargs.pl -m "Arguments count: " a b c \n \
                            \n \
                                printargs.pl -v a b c \n \
                            \n \
                                printargs.pl -h \n \
                        '
                    }
                ]
            }
        }
    ]
})
