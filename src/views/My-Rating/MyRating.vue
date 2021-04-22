<template lang="pug">

    .container
        .Row
            .SideBar
                SideNavigation
                    template(#panel)
                        .Side-Panel
                            .Side-Panel-Header
                                h2 Распределение звезд
                                app-icon.tooltip(name="tooltip" width="18" :content="`<span>Звезды присуждаются мастерам в зависимости от количества заработанных баллов. Чем больше баллов - тем больше звезд.</span><br><a href='#'><strong>Как заработать баллы?</strong></a>`" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme : 'custom', interactive : true, }")
                            .Side-Panel-Content
                                splide(:options="options")
                                    splide-slide
                                        .userRating_Stars
                                            .star-rating(data-stars="0.5")
                                        label 10 баллов
                                    splide-slide
                                        .userRating_Stars
                                            .star-rating(data-stars="1")
                                        label 150 БАЛЛОВ
                                    splide-slide
                                        .userRating_Stars
                                            .star-rating(data-stars="1.5")
                                        label 300 БАЛЛОВ
                                    splide-slide
                                        .userRating_Stars
                                            .star-rating(data-stars="2")
                                        label 500 БАЛЛОВ
                                    splide-slide
                                        .userRating_Stars
                                            .star-rating(data-stars="2.5")
                                        label 750 БАЛЛОВ
                                    splide-slide
                                        .userRating_Stars
                                            .star-rating(data-stars="3")
                                        label 1000 БАЛЛОВ
                                    splide-slide
                                        .userRating_Stars
                                            .star-rating(data-stars="3.5")
                                        label 1250 БАЛЛОВ
                                    splide-slide
                                        .userRating_Stars
                                            .star-rating(data-stars="4")
                                        label 1500 БАЛЛОВ
                                    splide-slide
                                        .userRating_Stars
                                            .star-rating(data-stars="4.5")
                                        label 1750 БАЛЛОВ
                                    splide-slide
                                        .userRating_Stars
                                            .star-rating(data-stars="5")
                                        label 2000 БАЛЛОВ
                    
            .Main
                .content
                    .Page-Block
                        .Page-Block-Header#section-1
                            h2 ФАКТОРЫ, ВЛИЯЮЩИЕ НА РЕЙТИНГ
                        .Page-Block-Content
                            .Table-DoubleCol
                                .Table-Columm
                                    .Table-Row
                                        .Table-RowTitle 
                                            span Основные
                                            .status-factor-group
                                                app-icon(name="check-filled" size="20")
                                        .Table-Cell-List
                                            .Table-Cell
                                                .Table-Cell-Name Имя
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name Фамилия
                                                .Table-Cell-Value 
                                                    span 10
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name Отчество
                                                .Table-Cell-Value 
                                                    span 6
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name Псевдоним
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name Загрузить фото на аватар
                                                .Table-Cell-Value 
                                                    span 23
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name Пол 
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                        //- END Table-Cell-Lis
                                    //- END Table-Row
                                    .Table-Row
                                        .Table-RowTitle 
                                            span Услуги
                                            .status-factor-group
                                                app-icon(name="check-filled" size="20")
                                        .Table-Cell-List
                                            .Table-Cell
                                                .Table-Cell-Name Имя
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name Фамилия
                                                .Table-Cell-Value 
                                                    span 11
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name Отчество
                                                .Table-Cell-Value 
                                                    span 123
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                        //- END Table-Cell-List
                                    //- END Table-Row
                                    .Table-Row
                                        .Table-RowTitle.completed 
                                            span ежедневные
                                            .status-factor-group
                                                app-icon(name="check-filled" size="20")
                                        .Table-Cell-List
                                            .Table-Cell.completed
                                                .Table-Cell-Name Ежедневное посещение сайта
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                        //- END Table-Cell-List
                                    //- END Table-Row
                                //- 
                                .Table-Columm
                                    .Table-Row
                                        .Table-RowTitle 
                                            span Подписка на pro-аккаунт
                                            .status-factor-group
                                                app-icon(name="check-filled" size="20")
                                        .Table-Cell-List
                                            .Table-Cell
                                                .Table-Cell-Name 1 месяц (30 дней)
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name 2 МЕСЯЦА (60 ДНЕЙ)
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name 3 МЕСЯЦА (90 ДНЕЙ)
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name Псевдоним
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name 4 МЕСЯЦА (90 ДНЕЙ)
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell.completed
                                                .Table-Cell-Name 5 МЕСЯЦА (90 ДНЕЙ) 
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell.completed
                                                .Table-Cell-Name приобрести каждый вид подписки хотя бы 1 раз
                                                .Table-Cell-Value 
                                                    span 125
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                        //- END Table-Cell-Lis
                                    //- END Table-Row
                                    .Table-Row
                                        .Table-RowTitle 
                                            span ПОРТФОЛИО
                                            .status-factor-group
                                                app-icon(name="check-filled" size="20")
                                        .Table-Cell-List
                                            .Table-Cell.completed
                                                .Table-Cell-Name Имя
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell
                                                .Table-Cell-Name Фамилия
                                                .Table-Cell-Value 2
                                                .status-factor
                                                    app-icon(name="check-filled" size="20")
                                            //- 
                                            .Table-Cell.completed
                                                .Table-Cell-Name Отчество
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                        //- END Table-Cell-List
                                    //- END Table-Row
                                    .Table-Row
                                        .Table-RowTitle 
                                            span ежедневные
                                            .status-factor-group
                                                app-icon(name="check-filled" size="20")
                                        .Table-Cell-List
                                            .Table-Cell
                                                .Table-Cell-Name Ежедневное посещение сайта
                                                .Table-Cell-Value 
                                                    span 2
                                                    .status-factor
                                                        app-icon(name="check-filled" size="20")
                                            //- 
                                        //- END Table-Cell-List
                                    //- END Table-Row
                                //- 

                    .Page-Block
                        .Page-Block-Header#section-2
                            h2 История рейтинга
                            app-icon.tooltip(name="tooltip" width="18" content="Все изменения Вашего рейтинга отображаются здесь. В том числе и те, которые были совершенны администрацией сервиса" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")
                        .Page-Block-Content
                            .Table-SingleCol
                                .Table-Header
                                    .Table-Columm-Name
                                        app-icon.tooltip(name="tooltip" width="18" content="Дополнительные отметки о статусе операции" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")
                                    .Table-Columm-Name
                                        span Баллы
                                    .Table-Columm-Name
                                        span Фактор
                                    .Table-Columm-Name
                                        span Дата
                                .Table-Row
                                    .Table-Cell
                                        .Gift-Status(content="Это действие было выполнено администрацией" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")
                                            app-icon(name="gift" size="15")
                                    .Table-Cell
                                        .Rating_Points.added 
                                            span.value 150
                                            app-icon(name='token')

                                    .Table-Cell
                                        .Table-Factor-Name
                                            span Ежедневные: Ежедневное посещение сайта
                                    .Table-Cell
                                        .Table-Date
                                            span 20 / 20 / 2044
                                //- 
                                .Table-Row
                                    .Table-Cell
                                        .Gift-Status(content="Это действие было выполнено администрацией" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")
                                            app-icon(name="gift" size="15")
                                    .Table-Cell
                                        .Rating_Points.removed 
                                            span.value 150
                                            app-icon(name='token')       
                                    .Table-Cell
                                        .Table-Factor-Name
                                            span Ежедневные: Ежедневное посещение сайта
                                    .Table-Cell
                                        .Table-Date
                                            span 20 / 20 / 2044
                                //- 
                                .Table-Row
                                    .Table-Cell
                                        //- .Gift-Status
                                        //-     app-icon(name="gift" size="15")
                                    .Table-Cell
                                        .Rating_Points.added 
                                            span.value 150
                                            app-icon(name='token')      
                                    .Table-Cell
                                        .Table-Factor-Name
                                            span Ежедневные: Ежедневное посещение сайта
                                    .Table-Cell
                                        .Table-Date
                                            span 20 / 20 / 2044
                                //- 
                                .Table-Row
                                    .Table-Cell
                                        .Gift-Status(content="Это действие было выполнено администрацией" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")
                                            app-icon(name="gift" size="15")
                                    .Table-Cell
                                        .Rating_Points.added 
                                            span.value 150
                                            app-icon(name='token')      
                                    .Table-Cell
                                        .Table-Factor-Name
                                            span Ежедневные: Ежедневное посещение сайта
                                    .Table-Cell
                                        .Table-Date
                                            span 20 / 20 / 2044
                                //- 
                                .Table-Row
                                    .Table-Cell
                                        //- .Gift-Status(content="Это действие было выполнено администрацией" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")
                                        //-     app-icon(name="gift" size="15")
                                    .Table-Cell
                                        .Rating_Points.added 
                                            span.value 150
                                            app-icon(name='token')      
                                    .Table-Cell
                                        .Table-Factor-Name
                                            span Ежедневные: Ежедневное посещение сайта
                                    .Table-Cell
                                        .Table-Date
                                            span 20 / 20 / 2044
                                //- 
                                .Table-Row
                                    .Table-Cell
                                        .Gift-Status(content="Это действие было выполнено администрацией" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")
                                            app-icon(name="gift" size="15")
                                    .Table-Cell
                                        .Rating_Points.added 
                                            span.value 150
                                            app-icon(name='token')      
                                    .Table-Cell
                                        .Table-Factor-Name
                                            span Ежедневные: Ежедневное посещение сайта
                                    .Table-Cell
                                        .Table-Date
                                            span 20 / 20 / 2044
                                //- 

                            Paginator
                
</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import Paginator from '@/components/common/Paginator.vue';

export default {
    components: {
        SideNavigation,
        Splide,
        SplideSlide,
        Paginator,
        
    },

    data() {
        return {
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
}
</script>

<style lang="scss" scoped>
@include tooltip;
@include TableDoubleCol;
@include TableSingleCol;
@include RatingStars;

.Page-Block-Header {
    justify-content: center;
}

.userRating_Stars {
    transform: scale(.75);
}

.Table-SingleCol {
    .Rating_Points {
        justify-content: center;
        display: inline-flex;
    }
}


.status-factor-group, 
.status-factor {
    position: absolute;
    display: inline-flex;
    right: 20px;
    opacity: .2;
}

.completed,
.Table-Cell.completed {
    .status-factor {
        opacity: 1;
        svg {
            fill: var(--palette-blue);
        }
    }
    .Table-Cell-Value {
        > span {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    .status-factor-group {
        opacity: 1;
        svg {
            fill: var(--palette-pink);
        }
    }
    .Table-Cell-Name {
        color: var(--palette-blue);
        opacity: 1;
    }
    &:hover {
        .Table-Cell-Value span{
            opacity: 1;
            transform: translateX(0);
        }
        .status-factor {
            opacity: 0;
            .icon {
                transform: translateX(-120%);
            }
        }
    }
}

.status-factor {
    @include trans-ease-out;
    opacity: 0;
    right: 0;
    .icon {
        @include trans-ease-out;
    }
}


.Gift-Status {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    // margin-right: 20px;
    border-radius: 100%;
    background-color: var(--palette-dark-light);
    width: 32px;
    height: 32px;
    .icon {
        fill: var(--palette-blue);
        filter: drop-shadow(0 0 5px var(--palette-blue));
    }
}



</style>