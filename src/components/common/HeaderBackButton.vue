<template lang="pug">
    
    .HeaderBackButton(@click="$router.go(-1)") 
        app-icon(name="arrow-small-left" size="16")

</template>


<script>
export default {
    
    props: {
        link: {
            type: String,
            required: false,
            default: "$router.go(-1)",
        }
    }

}
</script>


<style lang="scss" scoped>

.HeaderBackButton {
    cursor: pointer;
    @include flex-ja_center;
    width: 55px;
    height: 55px;
    background-color: var(--palette-dark-lighter);
    .icon {
        fill: var(--palette-blue)
    }
    &:hover {
        .icon {
            animation: swipe-right .3s ease alternate-reverse;
        }
        
    }
}

</style>