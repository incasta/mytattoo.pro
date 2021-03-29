<template lang="pug">
    
    splide(:options="options")
        splide-slide
            //- MyRating
            MySub   
               
        splide-slide
            MyRating

</template>


<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

import MyRating from "@/components/Sliders/HeaderSectionSlider/MyRating.vue";
import MySub from "@/components/Sliders/HeaderSectionSlider/MySub.vue";

export default {
    components: {
        Splide,
        SplideSlide,
        MyRating,
        MySub
    },

    data () {
        return {
            options: {
                type: "loop",
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
        };
    },
}
</script>

<style lang="scss">

.splide {
    padding: 0;
    &:hover {
        cursor: grab;
        &:active {
            cursor: grabbing;
        }
        .splide__arrow {
            opacity: 1;
            &.splide__arrow--prev, 
            &.splide__arrow--next {
                transform: translate3d(0, -50%, 0);
            }
        }
        .splide__pagination {
            opacity: 1;
            transform: translate3d(-50%, 0%, 0);
        }
    }
}

.splide__arrow {
    @include trans-ease-in;
    opacity: 0;
    &.splide__arrow--prev {
        transform: translate3d(100%, -50%, 0);
    }
    &.splide__arrow--next {
        transform: translate3d(-100%, -50%, 0);
    }
    svg {
        width: 24px;
        height: 24px;
    }
}

.splide__arrows {
    @include respond-to(small-medium-screens) {
        display: none;
    }
}


.splide__pagination {
    @include trans-ease-out;
    @include respond-to(wide-screens) {
        transform: translate3d(-50%, 100%, 0);
        opacity: 0;
    }
}

.splide__pagination__page {
    height: 14px;
    width: 14px;
    transform: skew(-20deg, 0);
    opacity: .5;
    &.is-active {
        opacity: 1;
        background-color: var(--pallete-blue);
        box-shadow: 0 0 5px var(--pallete-blue);
    }
}

</style>