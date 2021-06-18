<template lang="pug">
    
    .MobileRemoveDialog
        app-icon(name="bin" size="16")

</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>

.MobileRemoveDialog {
    @include flex-ja_center;
    overflow: hidden;
    width: 45px;
    height: 55px;

    .icon {
        fill: var(--palette-pink);
    }

    @include respond-to (handlers) {
        width: 35px;
    }
}


</style>