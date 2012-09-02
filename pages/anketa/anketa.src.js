({
    block: 'b-page',
    title: 'Pseudo link',
    head: [
        { elem: 'css', url: '_anketa.css'},
        // { elem: 'css', url: '_anketa', ie: true },
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
            block: 'b-article',
            header: 'Общие вопросы',
            content: [
                {
                    elem: 'item',
                    term: 'Фамилия, имя, отчество',
                },
                {
                    elem: 'item',
                    term: 'E-mail',
                },
                {
                    elem: 'item',
                    term: 'Телефон',
                },
                {
                    elem: 'item',
                    term: 'Год рождения',
                },
                {
                    elem: 'item',
                    term: 'Город, в котором живете',
                },
                {
                    elem: 'item',
                    term: 'Вуз, факультет, специальность, кафедра',
                },
                {
                    elem: 'item',
                    term: 'Год окончания вуза',
                },
                {
                    elem: 'item',
                    term: 'На каком уровне владеете английским языком?',
                },
                {
                    elem: 'item',
                    term: 'Чего вы ожидаете от участия в Школе?',
                },
                {
                    elem: 'item',
                    term: 'Откуда вы о нас узнали?',
                },
                {
                    elem: 'item',
                    term: 'Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?',
                }
            ]
        },
        {
            block: 'b-article',
            header: 'Опыт разработки',
            content: [
                {
                    elem: 'item',
                    term: 'Расскажите нам о вашем опыте разработки. Ничего не упускайте: это может быть как серьезный интерфейс, так и просто домашняя страничка.',
                },
                {
                    elem: 'item',
                    term: 'Какие языки программирования, фреймворки и технологии вы использовали? Сложились ли у вас личные предпочтения?',
                },
                {
                    elem: 'item',
                    term: 'Какие редакторы и среды разработки вы использовали? Чем обычно пользуетесь?',
                },
                {
                    elem: 'item',
                    term: 'С какими ОС приходилось сталкиваться? Для каких целей вы их использовали?',
                },
                {
                    elem: 'item',
                    term: 'Приходилось ли вам пользоваться системами контроля версий? Если да, то какими? Какая из них вам нравится больше всего?',
                },
                {
                    elem: 'item',
                    term: 'Использовали ли вы системы постановки и ведения задач?',
                },
                {
                    elem: 'item',
                    term: 'Какие полезные для фронтенд-разработчика ресурсы вы используете и можете посоветовать?',
                },
                {
                    elem: 'item',
                    term: 'Работали ли вы где-нибудь? Какие у вас были должностные обязанности? Есть ли опыт работы в команде?',
                }
            ]
        },
        {
            block: 'b-article',
            header: 'Технические вопросы',
            content: [
                {
                    elem: 'item',
                    term: 'Перечислите известные вам инструменты и приёмы для отладки кода в разных браузерах.',
                    content: [
                        { content: 'Chromium, Safari: Web Inspector' },
                        { content: 'Firefox: Firebug' },
                        { content: 'Opera: Dragonfly' },
                        { content: 'IE' }
                    ]
                },
                {
                    elem: 'item',
                    term: 'Опишите своими словами, что происходит в браузерах при клике на ссылку yandex.ru (полнота ответа — на ваше усмотрение).',
                    content: [
                        { tag: 'p', content: 'При включенном js последовательно вызываются обработчики событий onmousedown, onmouseup, onclick. Если какой-либо из этих обработчиков предотвращает событие по умолчанию, выполнение сценария останавливается.' },
                        { tag: 'p', content: 'В зависимости от значения атрибута target браузер открывает новую страницу в текущем окне или в новом.' },
                        { tag: 'p', content: 'Браузер преобразует доменное имя host в ip-адрес, при этом происходит обращение к DNS-серверу по умолчанию (если host не найден в кеше или файле hosts).' },
                        { tag: 'p', content: 'Браузер отправляет GET запрос по полученному ip-адресу на 80 TCP-порт. Вместе с запросом может передаваться дополнительная информация: в заголовках (accept-language, cache-control, connection, referer, user-agent etc) и в cookies.' },
                        { tag: 'p', content: 'В случае со ссылкой yandex.ru сервер присылает ответ с кодом 301 (Moved Permanently) и заголовком Location, указывающим на www.yandex.ru. Браузер отправляет новый запрос по новому адресу.' },
                        { tag: 'p', content: 'В случае успешного ответа от сервера (200 OK) браузер получает тело HTML-документа и начинает его обрабатывать, строя DOM-дерево.' },
                        { tag: 'p', content: 'В ходе обработки документа браузер находит ссылки на ресурсы (изображения, таблицы стилей, скрипты, фреймы) и посылает к ним запросы. Большинство современных браузеров поддерживает 6 одновременных запросов к одному домену. При загрузке скриптов загрузка/обработка последующих ресурсов блокируется, пока скрипты не будут обработаны.' },
                        { tag: 'p', content: 'Заголовок ответа Connection: Keep-alive означает, что браузеру не обязательно открывать повторное соединение с сервером, и для следующего запроса к тому же серверу можно использовать существующее соединение.' },
                        { tag: 'p', content: 'После построения DOM-дерева браузер начинает рендеринг страницы (хотя, в зависимости от различных факторов, например, скорости соединения, этот процесс может начаться и раньше). Перед непосредственной отрисовкой (repaint) элементов браузер применяет все найденные для них стили и выполняет reflow: вычисление координат и размеров размещаемых блоков.'},
                        { tag: 'p', content: 'После того, как тело документа обработано, срабатывает событие DOMContentLoaded (работает не во всех старых браузерах).' },
                        { tag: 'p', content: 'После того, как все ресурсы на странице загружены, вызывается обработчик события window.onload.' },
                        { tag: 'p', content: 'Помимо событий DOMContentLoaded и window.onload, можно следить за состоянием страницы, прослушивая событие document.onreadystatechange.' }
                    ]
                },
                {
                    elem: 'item',
                    term: 'Предположим, что мы представляем автосалон по продаже японских и немецких автомобилей. У нас есть базовые классы и примеры их использования. Допишите недостающий код.',
                    content: {
                        block: 'b-details',
                        summary: 'Решение',
                        content: {
                            block: 'b-article',
                            elem: 'code',
                            language: 'javascript',
                            content: '{{ auto.js }}'
                        }
                    }
                },
                {
                    elem: 'item',
                    term: 'Найдите все текстовые файлы (*.txt), в имени которых содержится «yandex», а в содержимом — «школа разработки интерфейсов».',
                    content: {
                        elem: 'code',
                        language: 'bash',
                        content: "grep -l 'школа разработки интерфейсов' `find . -name '*.txt' | grep yandex`"
                    }
                },
                {
                    elem: 'item',
                    term: 'Дана программа, реализованная одновременно на Bash, Python и Perl. Программа принимает произвольное количество аргументов и печатает их количество. Нужно добавить опцию -v для verbose-режима, в котором дополнительно выводится значение каждого из аргументов.',
                    content: [
                        {
                            block: 'b-details',
                            summary: 'Решение на bash',
                            content: {
                                block: 'b-article',
                                elem: 'code',
                                language: 'bash',
                                content: '{{ args.sh }}'
                            }
                        },
                        {
                            block: 'b-details',
                            summary: 'Решение на python',
                            content: {
                                block: 'b-article',
                                elem: 'code',
                                language: 'python',
                                content: '{{ args.py }}'
                            }
                        },
                        {
                            block: 'b-details',
                            summary: 'Решение на perl',
                            content: {
                                block: 'b-article',
                                elem: 'code',
                                language: 'perl',
                                content: '{{ args.pl }}'
                            }
                        }
                    ]
                },
                {
                    elem: 'item',
                    term: 'Расскажите, в каком объёме и при каких обстоятельствах вы изучали следующие темы: языки программирования (императивные/декларативные, разные системы типов), структуры (классы, структуры данных, примитивные типы), парадигмы (события, ООП, параллельность/асинхронность, кеширование), алгоритмы (парсинг, сортировка, поиск), паттерны.',
                }
            ]
        }
    ]
})
