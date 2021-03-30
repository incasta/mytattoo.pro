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
                                //- input.Data-Input(type="text" placeholder="Пол" value="Мужской")
                                .Data-Singleselect
                                    multiselect(
                                        v-model="sexValue",
                                        :options="sexOptions",
                                        :searchable="false",
                                        :close-on-select="true",
                                        :show-labels="false",
                                        placeholder="Выбрать",
                                        label="name",
                                        track-by="name",)
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
                                span.Data-Label Палитра цветов
                                .Data-Singleselect
                                    multiselect(
                                        v-model="paletteValue",
                                        :options="paletteOptions",
                                        :searchable="false",
                                        :close-on-select="true",
                                        :show-labels="false",
                                        placeholder="Выбрать",
                                        label="name",
                                        track-by="name",)
                                //- input.Data-Input(type="text" placeholder="ВЫБЕРИТЕ" value="")
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Место работы
                                //- input.Data-Input(type="text" placeholder="ВЫБЕРИТЕ" value="")
                                .Data-Singleselect
                                    multiselect(
                                        v-model="workPlaceValue",
                                        :options="workPlaceOptions",
                                        :searchable="false",
                                        :close-on-select="true",
                                        :show-labels="false",
                                        placeholder="Выбрать",
                                        label="name",
                                        track-by="name",)
                        .Data-Row.disabled
                            label.Data-Item
                                span.Data-Label Название студии или салона
                                input.Data-Input(type="text" placeholder="Студия или салон" value="" disabled)
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Ссылка на ваш сайт
                                input.Data-Input(type="text" placeholder="ссылка на ваш сайт" value="")
                    .Content-Column
                        .Column-Heading
                            h3 Контактная информация
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
                                input.Data-Input(type="tel" v-mask="'+7 ### ### - ## - ##'" placeholder="+ 7 XXX XXX - XX - XX" )

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
                                input.Data-Input.small(v-money="money" placeholder="Стоимость"  value="1000")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" )
                                .Data-Label Перекрытие татуировки
                                input.Data-Input.small(v-money="money" placeholder="Стоимость" value="")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" )
                                span.Data-Label Шрамирование татуировкой
                                input.Data-Input.small(v-money="money" placeholder="Стоимость" value="")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" )
                                span.Data-Label коррекция татуировки
                                input.Data-Input.small(v-money="money" placeholder="Стоимость" value="")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label обучаю татуировке
                                input.Data-Input.small(v-money="money" placeholder="Стоимость" value="2000")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label продаю сертификаты на тату  
                                input.Data-Input.small(v-money="money" placeholder="Стоимость" value="2000")
                    .Content-Column
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label Интимное тату
                                input.Data-Input.small(v-money="money" placeholder="Стоимость" value="2000")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label удаление татуировки
                                input.Data-Input.small(v-money="money" placeholder="Стоимость" value="2000")
                        .Data-Row
                            label.Data-Item
                                input.Toggler.pink(type="checkbox" checked)
                                span.Data-Label Разработка эскизов под заказ
                                input.Data-Input.small(v-money="money" placeholder="Стоимость" value="2000")
        //- 

        .Page-Block
            .Page-Block-Header 
                h2 Информация об обучении татуировке
            .Page-Block-Content
                .Content-Row
                    .Content-Column.wide
                        .Data-Row
                            span.Data-Label Обучаю в следующих стилях *
                            .Data-Multiselect-Tags
                                multiselect(
                                    v-model="diseaseValue",
                                    placeholder="Начните писать или выберите из списка",
                                    label="name",
                                    track-by="name",
                                    :show-labels="false",
                                    :options="diseaseOptions",
                                    :multiple="true",
                                    :taggable="true",
                                )
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
                            .Data-Multiselect-Tags
                                multiselect(
                                    v-model="styleValue",
                                    placeholder="Начните писать или выберите из списка",
                                    label="name",
                                    track-by="name",
                                    :show-labels="false",
                                    :options="styleOptions",
                                    :multiple="true",
                                    :taggable="true",
                                    :max="5",
                                )
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
                                textarea.TextArea(rows="7" cols="80" name="text" placeholder="о себе...")
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
import {mask} from 'vue-the-mask';
import {VMoney} from 'v-money';
import Multiselect from 'vue-multiselect';


export default {
    name: 'MyProfile',
    directives: {
        mask,
        money: VMoney,
    },
    components: {
        Multiselect,
    },
    data () {
        return {
            money: {
                suffix: ' ₽',
                masked: false,
                precision: 0,
                thousands: "",
            },
            diseaseValue: [
                // { name: 'Javascript', code: 'js' }
            ],
            styleValue: [
                // { name: 'Javascript', code: 'js' }
            ],
            sexValue: [
                { name: 'Не выбрано'},
            ],
            paletteValue: [
                { name: 'Не выбрано'},
            ],
            workPlaceValue: [
                { name: 'Не выбрано'},
            ],
            diseaseOptions: [
                { name: 'Беременность или лактация' },
                { name: 'Аллергия' },
                { name: 'Дерматит' },
                { name: 'Инфекционные заболевания' },
                { name: 'Воспаления на коже' },
                { name: 'Повышенная кровоточивость' },
                { name: 'Диабет' },
                { name: 'Экзема' },
                { name: 'Онкологическое заболевание' },

            ],
            styleOptions: [
                { name: 'Хэндпоук', },
                { name: 'Этника', },
                { name: 'Гравюра', },
                { name: 'Чикано', },
                { name: 'Полинезия', },
                { name: 'Хайда', },
                { name: 'Леттеринг', },
                { name: 'Гравюра', },
                { name: 'Полинезия', },
                { name: 'Хэндпоук', },
                { name: 'Этника', },
                { name: 'Гравюра', },
                { name: 'Чикано', },
                { name: 'Полинезия', },
                { name: 'Хайда', },
                { name: 'Леттеринг', },
                { name: 'Гравюра', },
                { name: 'Полинезия', },
            ],
            sexOptions: [
                { name: 'Не выбрано'},
                { name: 'Мужской'},
                { name: 'Женский'},
            ],
            paletteOptions: [
                { name: 'Не выбрано'},
                { name: 'Черно-белая'},
                { name: 'Цветная'},
            ],
            workPlaceOptions: [
                { name: 'Не выбрано'},
                { name: 'Салон'},
                { name: 'Студия'},
                { name: 'Дома'},
            ],
        }
    },
    methods: {
        addTag (newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.options.push(tag)
            this.value.push(tag)
        }
    },
}
</script>

<style lang="scss">

// @include vue-multiselect;

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
    &:first-child {
        margin-left: 0px;
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

    @include respond-to(small-medium-screens) {
        width: 100%;
        &:last-child {
            margin-left: 0;
        }
        &:not(:first-child) {
            margin-top: 30px;
        }
    }

}

.Content-Row {
    display: flex;
    flex-wrap: wrap;
    &:not(:first-child) {
        margin-top: 20px;
    }
    @include respond-to(small-medium-screens) {
        flex-wrap: wrap;
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

    @include respond-to(small-medium-screens) {
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    @include respond-to(handlers) {
        height: unset;
        &:not(:last-child) {
            margin-bottom: 15px;
        }
    }
}

.Data-Item {
    @include flex-a_center;
    min-width: 220px;
    width: 100%;
    cursor: pointer;
    
    @include respond-to(handlers) {
        flex-wrap: wrap;
        .Data-Label, .Data-Input, .Data-Singleselect {
            width: 100%;
            margin: 0;
            max-width: 100%;
        }
        .Data-Label {
            margin-bottom: 5px;
        }
        .Toggler {
            margin-left: 0;
            & ~ .Data-Input.small {
                margin-left: 0;
                margin-right: 20px;
                order: -1;
            }
            & ~ .Data-Label {
                margin-bottom: 15px;
            }
        }
    }
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

    @include respond-to(small-medium-screens) {
        & ~ .Data-Input {
            margin-left: 10px;
        }
    }
}

.Data-Label {
    margin-right: auto;
    color: var(--palette-blue);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .2ex;
    @include respond-to(handlers) {
        font-size: 10px;
    }
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
        border-color: var(--palette-dark-light);
    }
    &[type="date"] {
        // width: 160px;
        &::-webkit-calendar-picker-indicator {
            @include trans-ease-out;
            background-color: var(--palette-dark-light);
            background: url("data:image/svg+xml,%3Csvg id='Bold' width='14px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300F0FF'%3E%3Ctitle%3E130 calendar%3C/title%3E%3Cpath d='M18.5,2H18V1.5A1.5,1.5,0,0,0,16.5,0h0A1.5,1.5,0,0,0,15,1.5V2H9V1.5A1.5,1.5,0,0,0,7.5,0h0A1.5,1.5,0,0,0,6,1.5V2H5.5A5.5,5.5,0,0,0,0,7.5v11A5.5,5.5,0,0,0,5.5,24h13A5.5,5.5,0,0,0,24,18.5V7.5A5.5,5.5,0,0,0,18.5,2Zm0,19H5.5A2.5,2.5,0,0,1,3,18.5V10H21v8.5A2.5,2.5,0,0,1,18.5,21Z'/%3E%3C/svg%3E") no-repeat;
            display: block;
            background-size: 16px;
            background-position: center;
            cursor: pointer;
            &:hover {
                // background: var(--palette-dark-semilight);
                opacity: .75;
            }
            @include respond-to(small-medium-screens) {
                width: 10px;
            }
        }
    }
    &:disabled {
        opacity: .5;
    }
    &.small {
        max-width: 110px;
        @include respond-to(small-medium-screens) {
            max-width: 100px;
        }
    }
    
    @include respond-to(small-medium-screens) {
        max-width: 50%;
    }
}

.Data-Social-Bind {
    .icon {
        fill: var(--palette-blue);
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
            color: var(--palette-blue);
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
    background-color: var(--palette-dark-light);
    width: fit-content;
    padding: 5px;
    border-radius: 4px;
    @include respond-to(small-medium-screens) {
        max-width: 100%;
    }
}

.Radio-Item {
    cursor: pointer;
    white-space: nowrap;
    margin: 10px 15px;
    display: inline-flex;
    align-items: center; 
    max-width: 100%;
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
            border: 2px solid var(--palette-blue);
            box-shadow: 0 0 8px var(--palette-blue);
            &:after {
                opacity: 1;
            }
        }
        &:checked ~ span {
            color: var(--palette-blue);
        }
    }

    @include respond-to(small-medium-screens) {
        white-space: inherit;
        display: flex;
    }
}

.Radio {
    @include trans-ease-out;
    width: 14px;
    height: 14px;
    border: 2px solid #fff;
    border-radius: 100%;
    position: relative;
    margin-right: 7px;
    box-shadow: 0 0 0 var(--palette-blue);
    flex-shrink: 0;
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
        background-color: var(--palette-blue);
        opacity: 0;
    }
    @include respond-to(small-medium-screens) {
        margin-right: 10px;
    }
}

.TextArea {
    @include trans-ease-out;
    background: rgba(0, 0, 0, .75);
    color: #fff;
    border: none;
    border: 1px solid rgba(0, 0, 0, .75);
    padding: 1em;
    font-size: 13px;
    max-width: 100%;
    &::placeholder {
        color: rgba(255, 255, 255, .5);
        text-transform: uppercase;
    }
    &:focus {
        outline: none;
        border-color: var(--palette-dark-light);
    }
}

.Data-Multiselect-Tags, .Data-Singleselect {
    .multiselect__placeholder {
        display: inline-block;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .multiselect {
        box-sizing: content-box;
        display: block;
        position: relative;
        width: 100%;
        min-height: 40px;
        text-align: left;
        outline: none;
        &.multiselect--active {
            .multiselect__select {
                transform: rotate(180deg);
            }
        }
    }
    .multiselect__select {
        position: absolute;
        width: 40px;
        height: 38px;
        right: 1px;
        top: 1px;
        padding: 4px 8px;
        text-align: center;
        transition: transform .2s ease;
        &:before {
            position: relative;
            right: 0;
            top: 65%;
            color: #999;
            color: var(--palette-blue);
            margin-top: 4px;
            border-style: solid;
            border-width: 5px 5px 0;
            border-color: var(--palette-blue) transparent transparent;
            content: "";
        } 
    }
    .multiselect__current, .multiselect__select {
        line-height: 16px;
        box-sizing: border-box;
        display: block;
        margin: 0;
        text-decoration: none;
        cursor: pointer;
    }
    .multiselect__tags {
        min-height: 40px;
        display: block;
        padding: 10px 40px 0 20px;
        border-radius: 5px;
        // border: 1px solid var(--palette-dark-semilight);
        // background: #fff;
        background-color: var(--palette-dark-light);
        font-size: 14px;
        text-transform: uppercase;
    }
    .multiselect__tags-wrap {
        display: inline;
    }
    .multiselect__tag {
        position: relative;
        display: inline-block;
        padding: 4px 26px 4px 10px;
        border-radius: 5px;
        margin-right: 10px;
        color: #fff;
        line-height: 1;
        // background: var(--palette-dark-medium);
        background: #253850;
        margin-bottom: 5px;
        white-space: nowrap;
        overflow: hidden;
        max-width: 100%;
        text-overflow: ellipsis;
        font-weight: 700;
        letter-spacing: .1ex;
    }
    .multiselect__tag-icon {
        cursor: pointer;
        margin-left: 7px;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        font-weight: 700;
        font-style: normal;
        width: 22px;
        text-align: center;
        line-height: 22px;
        transition: all .2s ease;
        border-radius: 5px;
        &:after {
            content: "\D7";
            color: var(--palette-pink);
            font-size: 14px;
        }
    }

    .multiselect__spinner {
        position: absolute;
        right: 1px;
        top: 1px;
        width: 48px;
        height: 35px;
        background: #fff;
        display: block;
    }
    .multiselect__input, .multiselect__single {
        position: relative;
        display: inline-block;
        min-height: 20px;
        line-height: 20px;
        border: none;
        border-radius: 5px;
        // background: #fff;
        background-color: var(--palette-dark-light);
        // padding: 0 0 0 5px;
        width: 100%;
        transition: border .1s ease;
        box-sizing: border-box;
        margin-bottom: 10px;
        vertical-align: top;
        color: #fff;
        text-transform: uppercase;
        &:focus {
            outline: none;
        }
    }

    .multiselect__content-wrapper {
        // @include trans-ease-in;
        @include CustomScroll;
        position: absolute;
        display: block;
        background: var(--palette-dark-semilight);
        width: 100%;
        max-height: 240px;
        overflow: auto;
        // border: 1px solid #e8e8e8;
        border-top: none;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        z-index: 3;
        -webkit-overflow-scrolling: touch;
    }

    .multiselect__content {
        list-style: none;
        display: inline-block;
        padding: 0;
        margin: 0;
        min-width: 100%;
        vertical-align: top;
        background: var(--palette-dark-semilight);
    }

    .multiselect__element {
        display: block;
    }
    .multiselect__option--selected {
        background: #f3f3f3;
        color: #35495e;
        font-weight: 700;
        display: none !important;
    }
    .multiselect__option {
        @include trans-ease-out;
        display: block;
        padding: 10px 20px;
        min-height: 40px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: .2ex;
        line-height: 16px;
        text-decoration: none;
        text-transform: none;
        vertical-align: middle;
        position: relative;
        cursor: pointer;
        white-space: nowrap;
        text-transform: uppercase;
        &:hover {
            background-color: var(--palette-dark-light);
        }
    }
    .multiselect__option--highlight {
        // display: none !important;
    }
}

.Data-Singleselect {
    width: 100%;
    max-width: 220px;
    .multiselect__single {
        color: var(--palette-blue);
    }
    .multiselect__tags, .multiselect__single {
        background-color: rgba(0, 0, 0, 0.75);
    }
    .multiselect__option {
        &.multiselect__option--selected {
            display: block !important;
            background: rgba(0, 0, 0, .25);
            color: var(--palette-blue);
        }
    }
    @include respond-to(small-medium-screens) {
        max-width: 50%;
    }
}

</style>