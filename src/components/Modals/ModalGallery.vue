<template lang="pug">
    
    .container
        .Modal-Gallery
            div(slot="top-right")
                button.Close-Modal(@click="close")
                    app-icon(name="cross" size="12") 
            .ModalContent
                splide.Gallery-Slider(:options="options")
                    splide-slide(v-for="(item, index) in items" :key="item.id" )
                       GallerySlide(:data="item" :slides="items.length" :index="index")


</template>

<script>
import GallerySlide from "@/components/Sliders/ModalGallery/GallerySlide.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";


export default {
    name: "ModalGallery",
    data() {
        return {
            items: [
                {
                    price: "1234",
                    sex: "Унисекс",
                    palette: "Черно-белая",
                    timeCost: "3 часа (4 сеанса)",
                    tagPlaces: [
                        {
                            tag: "на_позвоночнике",
                        },
                        {
                            tag: "на_затылке",
                        }, 
                        {
                            tag: "на_икре",
                        }
                    ],
                    tagStyles: [
                        {
                            tag: "Этника",
                        },
                        {
                            tag: "Полинезия",
                        }, 
                        {
                            tag: "Нью скулл",
                        }
                    ],
                },
                {
                    price: "1234",
                    sex: "Унисекс",
                    palette: "Черно-белая",
                    timeCost: "3 часа (4 сеанса)",
                    tagPlaces: [
                        {
                            tag: "на_позвоночнике",
                        },
                        {
                            tag: "на_затылке",
                        }, 
                        {
                            tag: "на_икре",
                        }
                    ],
                    tagStyles: [
                        {
                            tag: "Этника",
                        },
                        {
                            tag: "Полинезия",
                        }, 
                        {
                            tag: "Нью скулл",
                        }
                    ],
                },
                {
                    price: "1234",
                    sex: "Унисекс",
                    palette: "Черно-белая",
                    timeCost: "3 часа (4 сеанса)",
                    tagPlaces: [
                        {
                            tag: "на_позвоночнике",
                        },
                        {
                            tag: "на_затылке",
                        }, 
                        {
                            tag: "на_икре",
                        }
                    ],
                    tagStyles: [
                        {
                            tag: "Этника",
                        },
                        {
                            tag: "Полинезия",
                        }, 
                        {
                            tag: "Нью скулл",
                        }
                    ],
                },
            ],
            options: {
                type: "fade",
                // autoplay: true,
                perPage: 1,
                // rewind: true,
                speed: 600,
                waitForTransition: false,
                pagination: false,
                height: "600px",
                drag: false,
                // autoHeight: true,
                padding: 0,
                gap: 0,
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
    components: {
        GallerySlide,
        Splide,
        SplideSlide,
    },
    methods: {
        close() {
            this.$emit('close')
        }
    },
}
</script>


<style lang="scss" scoped>
// @include splideCustomStyles;


.Modal-Gallery {
    background-color: var(--palette-dark-medium);
    font-family: Jura, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    
}

.container {
    position: relative;
    padding: 55px;
}

.Close-Modal {
    position: absolute;
    z-index: 999;
    right: 0;
    top: 0;
    // transform: translateX(100%) translateY(100%);
}


::v-deep.Gallery-Slider {
    padding: 0;
    .splide__arrow  {
        height: 100%;
        padding: 0 20px;
        @include trans-ease-out;
        opacity: .5;
        &:hover {
            opacity: 1;
            background-color: rgba(0,0,0, .2);
        }
        &.splide__arrow--prev {
            left: 0;
            transform: translateX(calc(-100%)) translateY(-50%);
        }
        &.splide__arrow--next {
            right: 0;
            transform: translateX(calc(100%)) translateY(-50%);
        }
        svg {
            width: 24px;
            height: 24px;
            fill: var(--palette-blue);
        }
    }
}


</style>