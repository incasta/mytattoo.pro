<template lang="pug">
    
    .CardOption.CardOptionUnpublish
        app-icon(name="cross-small" size="14" content="Убрать из публикации" v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}")

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.CardOption {
    background-color: rgba(0,0,0, .5);
    border-radius: 100%;
    @include flex-ja_center;
    width: 34px;
    height: 34px;
    cursor: pointer;
    @include trans-ease-out;
    .icon {
        fill: var(--palette-blue);
        @include trans-ease-out;
    }

    &:hover {
        background-color: rgba(0,0,0, .85);
        .icon {
            filter: drop-shadow(0 0 10px var(--palette-blue));
        }
    }
}

</style>