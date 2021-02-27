<template lang="pug">
    
    .HeaderSection.animation-flickering
        .HeaderSectionWrap.container
            flicking.HeaderSectionSlider(:options="{ circular: true, duration: 600, }" :plugins="plugins")
                .Slide
                    .SlideContent
                        .header Мой аккаунт
                        .userRememberStatus.pro PRO
                        .userRememberTimer
                            label Подписка истекает
                            .timer Через 
                                span 20 
                                | дней
                        .btn-wrap
                            router-link(to="/").btn-neon.pink Продлить

                .Slide 
                    .SlideContent МОЙ РЕЙТИНГ
            .pagination
        

</template>


<script>
import { Component, Vue } from "vue-property-decorator";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";

@Component({})
export default class DemoClass extends Vue {
  plugins = [new Fade(), new AutoPlay(2000, "NEXT")];
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
    height: 100%;
    width: 100%;
}

.HeaderSectionSlider {
    height: 100%;
    width: 100%;
    .Slide {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
} 

</style>