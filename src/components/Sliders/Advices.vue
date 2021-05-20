<template lang="pug">

    splide(:options="options")
        splide-slide(v-for="(text, index) in slides" :key="index")
            .slideContent
                .subTitle Совет №{{ index + 1 }}
                .text {{ text.text }}

</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

export default {
    components: {
        Splide,
        SplideSlide,
    },
    props: {
        slides: {
            type: Array,
            required: true,
        }
    },
    data () {
        return {
            options: {
                type: "loop",
                autoplay: true,
                perPage: 1,
                speed: 600,
                gap: "20px",
                waitForTransition: false,
                autoHeight: true,
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

<style lang="scss" scoped>
@include splideCustomStyles;


::v-deep.splide {
    .splide__slide {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 60px;
        @include respond-to(medium-screens) {
            padding: 0;
        }
    }

    .splide__pagination {
        position: relative;
        left: unset;
        bottom: unset;
        transform: none;
        margin-top: 20px;
        opacity: 1;
        .splide__pagination__page {
            &.is-active {
                background: var(--palette-pink);
                box-shadow: 0 0 5px var(--palette-pink);
            }
        }
    }

    .splide__arrow.splide__arrow--prev, 
    .splide__arrow.splide__arrow--next {
        opacity: 1;
        transform: translate3d(0, -50%, 0);
    }

    &:hover {
        .splide__pagination {
            transform: translate3d(0%, 0%, 0);
        }
    }
}

.subTitle {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    width: 100%;
    color: var(--palette-pink);
    display: block;
    margin-bottom: 10px;
}

.slideContent {
    padding: 20px;
    background-color: var(--palette-dark-light);
    font-size: 14px;
    letter-spacing: 0.1em;
}

</style>