<template lang="pug">
    
    .HeaderSection.animation-flickering
        .HeaderSectionWrap.container
            splide(:options="options")
                splide-slide
                    .SlideContent Slide 1
                splide-slide
                    .SlideContent Slide 2

                //- .Slide
                //-     .SlideContent
                //-         .header Мой аккаунт
                //-         .userRememberStatus.pro PRO
                //-         .userRememberTimer
                //-             label Подписка истекает
                //-             .timer Через 
                //-                 span 20 
                //-                 | дней
                //-         .btn-wrap
                //-             router-link(to="/").btn-neon.pink Продлить

                //- .Slide 
                //-     .SlideContent МОЙ РЕЙТИНГ
        

</template>


<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

export default {
    components: {
        Splide,
        SplideSlide
    },

    data () {
        return {
            options: {
                type: "loop",
                perPage: 1,
                rewind: true,
                speed: 600,
                waitForTransition: false,
                height: "500px",
                padding: "0px",
                // easing: "ease-in-out",
                // easing: "ease-in",
                easing: "cubic-bezier(0.75, 1, 0.5, 1)",
                // swipeDistanceThreshold: 500,
            },
        };
    },
}
</script>

<style lang="scss" scoped>

.HeaderSection {
    background: repeating-linear-gradient(0, transparent, transparent 2px, rgba(0, 0, 0, .1) 4px, rgba(0, 0, 0, .1) 3px), url('../assets/img/main-min.jpg');
    background-size: cover;
    background-position: center 80%;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    height: 500px;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        z-index: inherit;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(9, 10, 5, 1) 0%, transparent 20%);
    }
}

.HeaderSectionWrap {
    position: relative;
    z-index: 9000;
    height: 100%;
    cursor: grab;
}

.splide {
    padding: 0;
}

.SlideContent {
    @include flex-ja_center;
    width: 100%;
    height: 100%;
}


</style>