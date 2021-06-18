<template lang="pug">
    
    .MobileCloseDialog
        app-icon(name="arrow-small-left" siZE="16")

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.MobileCloseDialog {
    @include flex-ja_center;
    overflow: hidden;
    width: 55px;
    height: 55px;
    margin-left: -15px;
    background-color: var(--palette-dark-lighter);
    margin-right: 10px;
    .icon {
        fill: var(--palette-blue);
    }

    @include respond-to(wide-screens) {
        display: none;
    }

    @include respond-to (handlers) {
        width: 35px;
    }
}

</style>