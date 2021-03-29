<template lang="pug">
    
    .content
        .Page-Block
            .Page-Block-Header#main-info 
                h2 Основная информация
            .Page-Block-Content
                .Content-Row
                    .Content-Column
                        .User-Avatar
                            img(src="@/assets/img/users/master-ava.jpg")
                    .Content-Column
                        .Column-Heading
                            h3 Личная информация
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Имя
                                input.Data-Input(type="text" placeholder="Имя" value="Алексей")
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Фамилия
                                input.Data-Input(type="text" placeholder="Фамилия" value="Вергунов")
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Псевдоним
                                input.Data-Input(type="text" placeholder="Псевдоним" value="")
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Пол
                                input.Data-Input(type="text" placeholder="Пол" value="Мужской")
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Дата рождения
                                input.Data-Input(type="date" placeholder="ДД.ММ.ГГГГ" value="1990-10-04")
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Скрыть возраст
                                input.Toggler.pink(type="checkbox" )
                                span
                                    app-icon.tooltip(name="tooltip" width="15")
                                    
                //-
                .Content-Row
                    .Content-Column
                        .Column-Heading
                            h3 Профессиональные навыки
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Стаж
                                input.Data-Input(type="text" placeholder="СТАЖ" value="1 год")
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Художественное образование
                                input.Data-Input(type="text" placeholder="Название" value="МГАХИ им. В. И. Сурикова")
                        .Data-Row
                            label.Data-Item
                                span.Data-Label пАЛИТРА ЦВЕТОВ
                                input.Data-Input(type="text" placeholder="ВЫБЕРИТЕ" value="")
                        .Data-Row
                            label.Data-Item
                                span.Data-Label местро работы
                                input.Data-Input(type="text" placeholder="ВЫБЕРИТЕ" value="")
                        .Data-Row.disabled
                            label.Data-Item
                                span.Data-Label Название студии или салона
                                input.Data-Input(type="text" placeholder="cd project key" value="" disabled)
                        .Data-Row
                            label.Data-Item
                                span.Data-Label ссылка на ваш сайт
                                input.Data-Input(type="text" placeholder="ссылка на ваш сайт" value="")
                    .Content-Column
                        .Column-Heading
                            h3 контактная информация
                        .Data-Row
                            .Data-Social-Bind
                                a(href="#")
                                    app-icon(name="social_vk" size="27")
                                    span Привязать ВКонтакте
                        .Data-Row
                            .Data-Social-Bind
                                a(href="#")
                                    app-icon(name="social_insta" size="27")
                                    span Привязать Instagram
                        .Data-Row
                            label.Data-Item.qwer
                                span.Data-Label Номер телефона
                                input.Data-Input(type="text" placeholder="Номер телефона" value="")

                        .Data-Row 
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" )
                                span.Data-Label Использовать основной номер 
        //- 

        .Page-Block
            .Page-Block-Header 
                h2 Мои услуги
            .Page-Block-Content
                .Content-Row
                    .Content-Column
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label Стоимость сеанса тату
                                input.Data-Input.small(type="number" placeholder="Стоимость" value="2000 ₽")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" )
                                .Data-Label Перекрытие татуировки
                                input.Data-Input.small(type="number" placeholder="Стоимость" value="")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" )
                                span.Data-Label Шрамирование татуировкой
                                input.Data-Input.small(type="number" placeholder="Стоимость" value="")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" )
                                span.Data-Label коррекция татуировки
                                input.Data-Input.small(type="number" placeholder="Стоимость" value="")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label обучаю татуировке
                                input.Data-Input.small(type="number" placeholder="Стоимость" value="2000 ₽")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label продаю сертификаты на тату  
                                input.Data-Input.small(type="number" placeholder="Стоимость" value="2000 ₽")
                    .Content-Column
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label Интимное тату
                                input.Data-Input.small(type="number" placeholder="Стоимость" value="2000 ₽")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label удаление татуировки
                                input.Data-Input.small(type="number" placeholder="Стоимость" value="2000 ₽")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label Разработка эскизов под заказ
                                input.Data-Input.small(type="number" placeholder="Стоимость" value="2000 ₽")
        //- 

        .Page-Block
            .Page-Block-Header 
                h2 Информация об обучении татуировке
            .Page-Block-Content
                .Content-Row
                    .Content-Column.wide
                        .Data-Row
                            span.Data-Label Обучаю в следующих стилях *
                            .Data-Dropdown-List
                                input(type="text")
                        .Data-Row
                            span.Data-Label Время длительности обучения *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-1")
                                    span.Radio
                                    span 1 неделя
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-1")
                                    span.Radio
                                    span 2 недели
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-1")
                                    span.Radio
                                    span 3 недели
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-1")
                                    span.Radio
                                    span 1 месяц
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-1")
                                    span.Radio
                                    span 2 месяца
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-1")
                                    span.Radio
                                    span зависит от успеваемости обучающегося
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-1")
                                    span.Radio
                                    span не выбрано
                        .Data-Row
                            span.Data-Label Формат обучения *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-2")
                                    span.Radio
                                    span Преподаю индивидуально
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-2")
                                    span.Radio
                                    span Преподаю в группе
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-2")
                                    span.Radio
                                    span оба варианта
                        .Data-Row
                            span.Data-Label Материалы и инструменты *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-3")
                                    span.Radio
                                    span Сдам в аренду 
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-3")
                                    span.Radio
                                    span Включено в стоимость обучения
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-3")
                                    span.Radio
                                    span Нет своих
                        .Data-Row
                            span.Data-Label Выпишу сертификат на обучение *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-4")
                                    span.Radio
                                    span Да 
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-4")
                                    span.Radio
                                    span Нет
                        .Data-Row
                            span.Data-Label Расскажите о своем курсе более подробно
                            .Text-Grop
                                textarea.TextArea(rows="7" cols="80" name="text" placeholder="о курсе...")
        //- 

        .Page-Block
            .Page-Block-Header 
                h2 Информация о сертификатах на тату
            .Page-Block-Content
                .Content-Row
                    .Content-Column.wide
                        .Data-Row
                            span.Data-Label Срок годности сертификата *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-5")
                                    span.Radio
                                    span 1 неделя
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-5")
                                    span.Radio
                                    span Месяц
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-5")
                                    span.Radio
                                    span 2 месяца
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-5")
                                    span.Radio
                                    span Полгода
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-5")
                                    span.Radio
                                    span 1 год
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-5")
                                    span.Radio
                                    span Бессрочный
                        .Data-Row
                            span.Data-Label Сертификат может быть использован в счет частичной или полной оплаты работ *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-6")
                                    span.Radio
                                    span Да
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-6")
                                    span.Radio
                                    span Нет
                        .Data-Row
                            span.Data-Label Способ получения сертификата *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-7")
                                    span.Radio
                                    span забрать можно у мастера
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-7")
                                    span.Radio
                                    span Мастер готов его привезти куда вам удобно
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-7")
                                    span.Radio
                                    span Встреча на нейтральной территории
                        .Data-Row
                            span.Data-Label Как выглядит сертификат *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-8")
                                    span.Radio
                                    span Именной флаер-визитка
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-8")
                                    span.Radio
                                    span Неименной флаер-визитка
                        .Data-Row
                            span.Data-Label Расскажите о своем курсе более подробно
                            .Text-Grop
                                textarea.TextArea(rows="7" cols="80" name="text" placeholder="о сертификате...")
        //- 
        .Page-Block
            .Page-Block-Header 
                h2 Мои стили
            .Page-Block-Content
                .Content-Row
                    .Content-Column.wide
                        .Data-Row
                            span.Data-Label В каких стилях я работаю
                            .Data-Dropdown-List
                                input(type="text")
        //- 
        .Page-Block
            .Page-Block-Header 
                h2 Пара слов о себе
            .Page-Block-Content
                .Content-Row
                    .Content-Column.wide
                        .Data-Row
                            span.Data-Label Расскажите о себе
                            .Text-Grop
                                textarea.TextArea(rows="7" cols="80" name="text" placeholder="о сертификате...")
        //- 
        .Page-Block
            .Page-Block-Header 
                h2 Укажите свой рабочий адрес
            .Page-Block-Content
                .Content-Row
                    .Content-Column.wide
                        .Data-Row
                            span.Data-Label принимаю клиентов
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-9")
                                    span.Radio
                                    span Принимаю у себя
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-9")
                                    span.Radio
                                    span Работаю на выезде
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-9")
                                    span.Radio
                                    span По желанию клиента
                        .Data-Row
                            span.Data-Label Укажите свой адрес
                            .Radio-Group
                               



</template>

<script>
export default {
    name: 'MyProfile',

}
</script>

<style lang="scss">



input[type="number"] {
    appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        display: none;
    }
}

.Content-Column {
    width: calc(100% / 2 - 20px);
    &:last-child {
        margin-left: 20px;
    }
    &.width-auto {
        width: auto;
    }
    &.wide {
        width: 100%;
        max-width: 670px;
        .Data-Row {
            // flex-wrap: wrap;
            display: block;
            height: unset;
            margin-bottom: 20px;
        }
        .Data-Label {
            margin-bottom: 15px;
            display: inline-block;
        }
    }
}

.Content-Row {
    display: flex;
    flex-wrap: wrap;
    &:not(:first-child) {
        margin-top: 20px;
    }
}

.Data-Row {
    display: flex;
    align-items: center;
    height: 42px;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
    &.disabled {
        .Data-Label {
            opacity: .5;
        }
    }
}

.Data-Item {
    @include flex-a_center;
    min-width: 220px;
    width: 100%;
    cursor: pointer;
}

.Toggler {
    margin-left: auto;
    cursor: pointer;
    // margin: 0 10px 0 0;
    appearance: unset;
    background-color: rgba(0,0,0,.5);
    width: 38px;
    height: 22px;
    border-radius: 100px;
    border: 1px solid rgba(255, 255, 255, .2);
    position: relative;
    cursor: pointer;
    flex-shrink: 0;
    &:focus {
        outline: none;
    }
    &:after {
        @include trans-ease-out;
        content: "";
        width: 16px;
        height: 16px;
        position: absolute;
        z-index: 1;
        top: 2px;
        left: 2px;
        border-radius: 100%;
        background-color: #fff;
        box-shadow: 0 0 0 #f655a0;
        opacity: .25;
    }
    &:checked {
        background-color: rgba(97,0,45,.1);
        border-color: #fff;
        &:after {
            background-color: #fff;
            box-shadow: 0 0 15px #fff;
            opacity: 1;
            left: calc(100% - 18px);
        }
    }
    &.pink {
        &:checked {
            background-color: rgba(97,0,45,.1);
            border-color: #f655a0;
            &:after {
                background-color: #f655a0;
                box-shadow: 0 0 15px #f655a0;
                opacity: 1;
                left: calc(100% - 18px);
            }
        }   
    }

    & ~ .Data-Input {
        margin-left: 20px;
    }
    & + .Data-Label {
        order: -1;
    }
    &:not(:checked) + .Data-Label {
        opacity: .5;
    }
    &:not(:checked) ~ .Data-Input {
        pointer-events: none;
        opacity: .5;
    }
}

.Data-Label {
    margin-right: auto;
    color: var(--pallete-blue);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .2ex;
}

.Data-Input {
    @include trans-ease-in;
    position: relative;
    // width: 250px;
    width: 100%;
    max-width: 220px;
    height: 42px;
    margin-left: 20px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, .75);
    border-radius: 2px;
    border: none;
    color: #fff;
    font-size: 12px;
    letter-spacing: .1ex;
    padding: 10px 15px;
    border: 2px solid rgba(0, 0, 0, .75);
    &:focus {
        outline: none;
        border-color: var(--pallete-dark-light);
    }
    &[type="date"] {
        // width: 160px;
        &::-webkit-calendar-picker-indicator {
            @include trans-ease-out;
            background-color: var(--pallete-dark-light);
            background: url("data:image/svg+xml,%3Csvg id='Bold' width='14px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300F0FF'%3E%3Ctitle%3E130 calendar%3C/title%3E%3Cpath d='M18.5,2H18V1.5A1.5,1.5,0,0,0,16.5,0h0A1.5,1.5,0,0,0,15,1.5V2H9V1.5A1.5,1.5,0,0,0,7.5,0h0A1.5,1.5,0,0,0,6,1.5V2H5.5A5.5,5.5,0,0,0,0,7.5v11A5.5,5.5,0,0,0,5.5,24h13A5.5,5.5,0,0,0,24,18.5V7.5A5.5,5.5,0,0,0,18.5,2Zm0,19H5.5A2.5,2.5,0,0,1,3,18.5V10H21v8.5A2.5,2.5,0,0,1,18.5,21Z'/%3E%3C/svg%3E") no-repeat;
            display: block;
            background-size: 16px;
            background-position: center;
            cursor: pointer;
            &:hover {
                // background: var(--pallete-dark-semilight);
                opacity: .75;
            }
        }
    }
    &:disabled {
        opacity: .5;
    }
    &.small {
        max-width: 110px;
    }
}

.Data-Social-Bind {
    .icon {
        fill: var(--pallete-blue);
    }
    a {
        color: #fff;
        text-align: center;
        text-decoration: none;
        display: flex;
        align-items: center;
        span {
            margin-left: 1em;
        }
        &:hover {
            color: var(--pallete-blue);
        }
    }
}

.User-Avatar {
    @include flex-j_center;
    img {
        width: 285px;
        height: 375px;
        object-fit: cover;
    }
}

.Column-Heading {
    text-transform: uppercase;
    margin-bottom: 1em;
    &:after {
        content: '';
        margin-top: .5em;
        display: block;
        width: 100%;
        height: 1px;
        opacity: .2;
        background-color: #fff;
    }
    h3 {
        font-size: 13px;
        letter-spacing: 0.3ex;
        opacity: .8;
    }
}

.Radio-Group {
    background-color: var(--pallete-dark-light);
    // padding: 20px;
    padding: 5px;
    border-radius: 4px;
}

.Radio-Item {
    cursor: pointer;
    white-space: nowrap;
    margin: 10px 15px;
    display: inline-flex;
    align-items: center; 
    span {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
    }
    input[type="radio"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        &:checked ~ .Radio {
            border: 2px solid var(--pallete-blue);
            box-shadow: 0 0 8px var(--pallete-blue);
            &:after {
                opacity: 1;
                transform: scale(1);
            }
        }
        &:checked ~ span {
            color: var(--pallete-blue);
        }
    }
}

.Radio {
    @include trans-ease-out;
    width: 14px;
    height: 14px;
    border: 2px solid #fff;
    border-radius: 100%;
    position: relative;
    margin-right: 5px;
    box-shadow: 0 0 0 var(--pallete-blue);
    &:after {
        content: '';
        @include trans-ease-out;
        position: absolute;
        display: block;
        z-index: 1;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        border-radius: 100%;
        top: 2px;
        left: 2px;
        background-color: var(--pallete-blue);
        opacity: 0;
        transform: scale(.5);
    }
}

</style>