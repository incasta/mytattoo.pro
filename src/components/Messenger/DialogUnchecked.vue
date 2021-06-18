<template lang="pug">
    
    a.Dialog-UnChecked(href="#" v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}" content="Пометить непрочитанным")
        app-icon(name="unchecked-msg" size="18")

</template>

<script>
export default {
    
}

</script>

<style lang="scss" scoped>

.Dialog-UnChecked {
    @include flex-ja_center;
    overflow: hidden;
    width: 55px;
    height: 55px;
    .icon {
        fill: var(--palette-pink);
    }
    &:hover {
        background-color: var(--palette-dark-lighter);
    }

    @include respond-to(handlers) {
        width: 35px;
    }
}

</style>