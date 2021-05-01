<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                    template(#panel)
                        .Side-Panel
                            .Side-Panel-Content
                                div Получите дополнительные привилегии с PRO-аккаунтом
                
            .Main
                .content
                    .Page-Block.w-30
                        .Page-Block-Header
                            h2 Выбор тарифа
                        .Page-Block-Content
                            splide.TarifSlider(:options="options")
                                splide-slide(v-for="tarif in tarifs" :key="tarif.id")
                                    TarifCard(:name="tarif.name" :duration="tarif.duration" :current="tarif.current" :hit="tarif.hit" :price="tarif.price" :points="tarif.points")


</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
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
            tarifs: [
                {
                  name: "1 месяц",
                  duration: "30",
                  current: false,
                  hit: false,
                  price: "910",
                  points: "30",
                },
                {
                  name: "2 месяца",
                  duration: "60",
                  current: false,
                  hit: false,
                  price: "910",
                  points: "60",
                },
                {
                  name: "4 месяца",
                  duration: "120",
                  current: false,
                  hit: false,
                  price: "910",
                  points: "95",
                },
                {
                  name: "5 месяцев",
                  duration: "150",
                  current: false,
                  hit: false,
                  price: "910",
                  points: "125",
                },
            ],
            options: {
                type: "loop",
                autoplay: false,
                perPage: 1,
                rewind: true,
                speed: 600,
                waitForTransition: false,
                height: "550px",
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
    }
}
</script>

<style lang="scss" scoped>
@include splideCustomStyles;

::v-deep.TarifSlider {
    
}

</style>