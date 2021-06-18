<template lang="pug">
    
    .CardOption.CardOptionRequest
        app-icon(v-if="value" name="file-check" size="14" content="Заявки с публикации ВКЛЮЧЕНЫ" v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}")
        app-icon(v-if="!value" name="file-cross" size="14" content="Заявки с публикации ОТКЛЮЧЕНЫ" v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}")

</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            required: true,
        }
    }
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
        @include trans-ease-out;
        &:first-child {
            fill: var(--palette-blue);
        }
        &:last-child {
            fill: var(--palette-pink);
        }
    }

    &:hover {
        background-color: rgba(0,0,0, .85);
        .icon {
            &:first-child {
                filter: drop-shadow(0 0 10px var(--palette-blue));
            }
            &:last-child {
                filter: drop-shadow(0 0 10px var(--palette-pink));
            }
        }
        
    }
}

</style>