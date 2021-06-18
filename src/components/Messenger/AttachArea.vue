<template lang="pug">
    
    .Attach-Area
        .Attach-File
            a.Remove-File(href="#")
                app-icon(name="cross-small" size="12")
            LightBox-Trigger
            img(:src="require('@/assets/img/photo/1.jpg')")

</template>

<script>
import LightBoxTrigger from "@/components/common/LightBoxTrigger.vue";

export default {
    components: {
        LightBoxTrigger,
    }
}
</script>

<style lang="scss" scoped>

.Attach-Area {
    width: 100%;
    margin-bottom: 20px;
}

.Attach-File {
    position: relative;
    width: 80px;
    height: 90px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
    }
    &:hover { 
        .Remove-File {
            opacity: 1;
            &:hover {
                background-color: var(--palette-dark-lighter);
            }
        }
    }
}

.Remove-File {
    @include flex-ja_center;
    @include trans-ease-out;
    border-radius: 4px;
    background-color: var(--palette-dark-light);
    position: absolute;
    z-index: 9;
    right: 5px;
    top: 5px;
    border-radius: 2px;
    width: 18px;
    height: 18px;
    opacity: .75;
    .icon {
        fill: var(--palette-pink);
        @include trans-ease-out;
    }
    
}

</style>