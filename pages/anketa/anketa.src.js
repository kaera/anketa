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
                    name: 'Фамилия, имя, отчество',
                },
                {
                    elem: 'item',
                    name: 'E-mail',
                },
                {
                    elem: 'item',
                    name: 'Телефон',
                },
                {
                    elem: 'item',
                    name: 'Год рождения',
                },
                {
                    elem: 'item',
                    name: 'Город, в котором живете',
                },
                {
                    elem: 'item',
                    name: 'Вуз, факультет, специальность, кафедра',
                },
                {
                    elem: 'item',
                    name: 'Год окончания вуза',
                },
                {
                    elem: 'item',
                    name: 'На каком уровне владеете английским языком?',
                },
                {
                    elem: 'item',
                    name: 'Чего вы ожидаете от участия в Школе?',
                },
                {
                    elem: 'item',
                    name: 'Откуда вы о нас узнали?',
                },
                {
                    elem: 'item',
                    name: 'Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?',
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
                        mix: [{ block: 'b-details', elem: 'code' }],
                        content: '{{ auto.js }}'
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
                        mix: [{ block: 'b-details', elem: 'code' }],
                        content: '{{ args.sh }}'
                    },
                    {
                        elem: 'h3',
                        content: 'Python'
                    },
                    {
                        elem: 'pre',
                        mix: [{ block: 'b-details', elem: 'code' }],
                        content: '{{ args.py }}'
                    },
                    {
                        elem: 'h3',
                        content: 'Perl'
                    },
                    {
                        elem: 'pre',
                        mix: [{ block: 'b-details', elem: 'code' }],
                        content: '{{ args.pl }}'
                    }
                ]
            }
        }
    ]
})
