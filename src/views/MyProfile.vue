<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
            .Main
                .content
                    SaveButton
                    .Page-Block
                        .Page-Block-Header#section-1
                            h2 Основная информация
                        .Page-Block-Content
                            .Content-Row
                                .Content-Column
                                    .User-Avatar
                                        img(src="@/assets/img/users/master-ava.jpg")
                                        a.profile_preview(href="#")
                                            app-icon(name="profile_preview" size="16")
                                        .User-Avatar-Overlay
                                            a.User-Avatar-UploadPhoto(href="#")
                                                app-icon(name="arrow-small-up" size="16")
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
                                                    track-by="name",
                                                    :allow-empty="false",
                                                )
                                    .Data-Row
                                        label.Data-Item
                                            span.Data-Label Дата рождения
                                            input.Data-Input(type="date" placeholder="ДД.ММ.ГГГГ" value="1990-10-04")
                                    .Data-Row
                                        label.Data-Item
                                            input.Toggler.pink(type="checkbox" )
                                            span.Data-Label Скрыть возраст
                                            app-icon.tooltip(name="tooltip" width="18" content="Если поле активно, то Ваш возраст будете видеть только Вы" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")
                                            


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
                                                    track-by="name",
                                                    :allow-empty="false",
                                                )
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
                                                    track-by="name",
                                                    :allow-empty="false",
                                                )
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
                        .Page-Block-Header#section-2
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
                        .Page-Block-Header#section-3
                            h2 Информация об обучении татуировке
                        .Page-Block-Content
                            .Content-Row
                                .Content-Column.wide
                                    .Data-Row
                                        span.Data-Label Обучаю в следующих стилях *
                                            app-icon.tooltip(name="tooltip" width="15" content="Вы можете выбрать до 5 тегов. Чтобы удалить лишние выбранные теги, кликните на крестик рядом с названием" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")
                                        .Data-Multiselect-Tags
                                            multiselect(
                                                v-model="diseaseValue",
                                                placeholder="Начните писать или выберите из списка",
                                                label="name",
                                                track-by="name",
                                                :show-labels="false",
                                                :options="diseaseOptions",
                                                :multiple="true",
                                                :taggable="false",
                                                :hide-selected="true",
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
                        .Page-Block-Header#section-4
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
                                        app-icon.tooltip(name="tooltip" width="15" content="Вы можете выбрать до 5 тегов. Чтобы удалить лишние выбранные теги, кликните на крестик" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")
                                        .Data-Multiselect-Tags
                                            multiselect(
                                                v-model="styleValue",
                                                placeholder="Начните писать или выберите из списка",
                                                label="name",
                                                track-by="name",
                                                :show-labels="false",
                                                :options="styleOptions",
                                                :multiple="true",
                                                :taggable="false",
                                                :max="5",
                                                :hide-selected="true"
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
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import SaveButton from '@/components/common/SaveButton.vue';


export default {
    name: 'MyProfile',
    directives: {
        mask,
        money: VMoney,
    },
    components: {
        Multiselect,
        SideNavigation,
        Splide,
        SplideSlide,
        SaveButton,
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
            options: {
                type: "loop",
                perPage: 1,
                rewind: true,
                speed: 200,
                waitForTransition: false,
                pagination: false,
                autoplay: true,
                padding: "0px",
                easing: "cubic-bezier(0.75, 1, 0.5, 1)",
                arrowPath: "M31.667 19.1573C31.667 18.2276 31.2754 17.3542 30.5539 16.6968L17.0012 4.34756C15.5171 2.99525 13.0951 2.99525 11.611 4.34756L9.44673 6.31969C8.72529 6.97706 8.33366 7.85043 8.33366 8.78015C8.33366 9.70986 8.72529 10.5832 9.44673 11.2406L18.1452 19.1667L9.44673 27.0927C8.72529 27.7501 8.33366 28.6235 8.33366 29.5532C8.33366 30.4829 8.72529 31.3563 9.44673 32.0136L11.611 33.9858C13.0951 35.3381 15.5171 35.3381 17.0012 33.9858L30.5539 21.6177C31.2754 20.9604 31.667 20.087 31.667 19.1573Z",
                breakpoints: {
                    576: {
                        speed: 200,
                    }
                }
            },
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

<style lang="scss" scoped>

// @include vue-multiselect;
@include tooltip;
@include toggler;
@include radio;
@include textarea;
@include data-inputs;
@include RatingStars;


input[type="number"] {
    appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        display: none;
    }
}

.User-Avatar {
    @include flex-j_center;
    @include trans-ease-out;
    position: relative;
    img {
        width: 285px;
        height: 375px;
        object-fit: cover;
    }

    &:hover {
        .User-Avatar-Overlay {
            opacity: 1;
            .User-Avatar-UploadPhoto {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
}

.User-Avatar-Overlay {
    position: absolute;
    @include flex-ja_center;
    @include trans-ease-out;
    z-index: 2;
    top: 0;
    width: 285px;
    height: 100%;
    opacity: 0;
    background-color: var(--palette-transparent-bg);
    @include respond-to(small-medium-screens) {
        opacity: 1;
        .User-Avatar-UploadPhoto {
            transform: translateY(0);
            opacity: 1;
        }
    }
}

.User-Avatar-UploadPhoto {
    position: absolute;
    z-index: 3;
    @include flex-ja_center;
    @include trans-ease-out;
    transform: translateY(20px);
    width: 42px;
    height: 42px;
    background-color: var(--palette-transparent-bg);
    background-color: rgba(0, 0, 0, .5);
    border-radius: 100%;
    .icon {
        fill: var(--palette-blue);
    }
    &:hover {
        background-color: rgba(0, 0, 0, .75);
    }
}

.profile_preview {
    position: absolute;
    z-index: 3;
    @include flex-ja_center;
    @include trans-ease-out;
    width: 42px;
    height: 42px;
    background-color: var(--palette-transparent-bg);
    border-radius: 100%;
    bottom: 20px;
    opacity: 0.75;
    .icon {
        fill: var(--palette-blue);
    }

    &:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, .75);
    }
}



</style>