<template lang="pug">
    
    .LightBox-Trigger
        app-icon(name="zoom-in" size="18")

</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>

.LightBox-Trigger {
    cursor: pointer;
    background: rgba(0,0,0, .75);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    @include flex-ja_center;
    opacity: 0;
    @include trans-ease-out;
    .icon {
        @include trans-ease-out;
        transform: scale(0);
        fill: var(--palette-blue);
    }

    &:hover {
        opacity: 1;
        .icon {
            transform: scale(1);
        }
    }
}

</style>