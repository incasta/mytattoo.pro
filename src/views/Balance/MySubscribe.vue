<template lang="pug">
    
    .container        
        .Row
            .SideBar
                SideNavigation
                    template(#panel)
                        .Side-Panel
                            .Side-Panel-Content
                                .About-Pro
                                    .bage-pro PRO
                                    .subTitle Получите дополнительные привилегии с PRO-аккаунтом
                                    .advantages-list
                                        .advantage(v-for="(adv, index) in advantages" :key="adv.id") 
                                            .advantage-icon 
                                                app-icon(:name="`adv-${ index + 1 }`" size="44")
                                            .advantage-text {{ adv.text }}
                                    
            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Выбор тарифа
                        .Page-Block-Content
                            splide.TarifSlider(:options="options")
                                splide-slide(v-for="tarif in tarifs" :key="tarif.id")
                                    TarifCard(:totalPrice="(tarif.duration / 30) * tarif.price" :name="tarif.name" :duration="tarif.duration" :current="tarif.current" :hit="tarif.hit" :price="tarif.price" :points="tarif.points")

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
// import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import TarifCard from "@/components/CardTemplates/TarifCard.vue";

export default {
    name: 'FavPhoto',
    components: {
        SideNavigation,
        Splide,
        SplideSlide,
        TarifCard,
    },
    data() {
        return {
            advantages: [
                {
                    text: 'Получайте отклики от клиентов напрямую с сайта'
                },
                {
                    text: 'Используйте возможности рейтингового продвижения'
                },
                {
                    text: 'Станьте участником местных чартов'
                },
                {
                    text: 'Выкладывайте авторские эскизы и собственные новости'
                },
                {
                    text: 'Клиенты увидят вас на картах'
                },
            ],
            tarifs: [
                {
                  name: "1 месяц",
                  duration: "30",
                  current: false,
                  hit: true,
                  price: 910,
                  points: "30",
                },
                {
                  name: "2 месяца",
                  duration: "60",
                  current: true,
                  hit: false,
                  price: 810,
                  points: "60",
                },
                {
                  name: "4 месяца",
                  duration: "120",
                  current: false,
                  hit: false,
                  price: 710,
                  points: "95",
                },
                {
                  name: "5 месяцев",
                  duration: "150",
                  current: false,
                  hit: false,
                  price: 610,
                  points: "125",
                },
                {
                  name: "6 месяцев",
                  duration: "180",
                  current: false,
                  hit: false,
                  price: 450,
                  points: "125",
                },
            ],
            options: {
                destroy: true,
                type: "loop",
                autoplay: false,
                perPage: 3,
                focus: 'center',
                rewind: true,
                speed: 600,
                waitForTransition: false,
                height: "430px",
                padding: "0px",
                easing: "cubic-bezier(0.75, 1, 0.5, 1)",
                arrowPath: "M31.667 19.1573C31.667 18.2276 31.2754 17.3542 30.5539 16.6968L17.0012 4.34756C15.5171 2.99525 13.0951 2.99525 11.611 4.34756L9.44673 6.31969C8.72529 6.97706 8.33366 7.85043 8.33366 8.78015C8.33366 9.70986 8.72529 10.5832 9.44673 11.2406L18.1452 19.1667L9.44673 27.0927C8.72529 27.7501 8.33366 28.6235 8.33366 29.5532C8.33366 30.4829 8.72529 31.3563 9.44673 32.0136L11.611 33.9858C13.0951 35.3381 15.5171 35.3381 17.0012 33.9858L30.5539 21.6177C31.2754 20.9604 31.667 20.087 31.667 19.1573Z",
                breakpoints: {
                    1200: {
                        speed: 200,
                        destroy: false,
                    },
                    992: {
                        perPage: 1,
                        speed: 200,
                    }
                }
            },
        }
    }
}
</script>

<style lang="scss" scoped>
@include splideCustomStyles;
// @include blockUI;

::v-deep.TarifSlider {
    @include respond-to (extra-large-screens) {
        &:hover, 
        &:hover :active {
            cursor: default;
        }

        .splide__list {
            display: flex;
            flex-wrap: wrap;
            width: unset;
            justify-content: center;
        }
    }

    .splide__slide {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .splide__pagination {
        opacity: 1;
        transform: translate3d(-50%, 0%, 0);
    }

    .splide__arrow.splide__arrow--prev, 
    .splide__arrow.splide__arrow--next {
        transform: translate3d(0, -50%, 0);
        opacity: 1;
        
    }
}

.Main {
    max-width: calc(100% - 260px);
    @include respond-to (large-screens) {
        max-width: 100%;
    }
}


.Side-Panel-Content {
    background: linear-gradient(290deg,rgba(255,255,112,0) 5%,rgba(255,255,112,.564706)),#091016;
    padding: 1px;
    .bage-pro {
        background-color: var(--palette-yellow);
        display: inline-block;
        color: var(--palette-dark-regular);
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        padding: 0.3em .75em;
        border-radius: 100px;
        box-shadow: 0 3px 15px var(--palette-yellow);
        margin-bottom: 20px;
    }
    .About-Pro {
        border-radius: 2px;
        background-color: var(--palette-dark-regular);
        padding: 2em;
    }
    .subTitle {
        text-transform: uppercase;
        letter-spacing: .2ex;
        font-size: 12px;
        color: var(--palette-yellow);
        &:after {
            content: '';
            margin: 20px 0;
            display: block;
            height: 1px;
            margin-left: -2em;
            width: calc(100% + 4em);
            margin-bottom: 20px;
            background: linear-gradient(269.09deg, rgba(255, 255, 112, 0) 0.79%, rgba(255, 255, 112, 0.39) 48.18%, rgba(255, 255, 112, 0) 99.23%);
            // background: linear-gradient(270deg,rgba(255,255,112,0) 5%,rgba(255,255,112,.564706)),#091016;
        }
    }
    .advantage-text {
        font-size: 12px;
        text-transform: uppercase;
        margin-top: 10px;
        font-weight: 300;
    }
    .advantage {
        &:not(:last-child) {
            margin-bottom: 20px;
            &:after {
                content: '';
                display: block;
                background: linear-gradient(269.09deg, rgba(255, 255, 255, 0) 0.79%, rgba(255, 255, 255, 0.39) 48.18%, rgba(255, 255, 255, 0) 99.23%);
                height: 1px;
                width: calc(100%);
                max-width: 200px;
                margin: 0 auto;
                opacity: .5;
                margin-top: 20px;
            }
        }
    }
}

</style>