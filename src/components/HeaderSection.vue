<template lang="pug">
    
    .HeaderSection.animation-flickering
        .HeaderSectionWrap.container
            HeaderSectionSlider
            
</template>


<script>

import HeaderSectionSlider from "@/components/Sliders/HeaderSectionSlider.vue";


export default {
    components: {
        HeaderSectionSlider,
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
    height: var(--HeaderSectionHeight);
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
}

</style>