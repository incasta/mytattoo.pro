<template lang="pug">
    
    a.DeleteButton(href="#" content="Если Вы хотите написать другую новость, Вы можете начать с чистого листа, создав новый черновик. При этом текущий черновик будет сохранен автоматически, так что Вы сможете вернуться к нему в любой момент." v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}")
        app-icon(name="bin" size="14")

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.DeleteButton {
    height: 40px;
    width: 40px;
    @include flex-ja_center;
    background-color: var(--palette-dark-light);
    border-radius: 4px;
    @include trans-ease-out;
    
    .icon {
        fill: var(--palette-pink);
        @include trans-ease-out;
        transition-duration: .2s;
    }

    &:hover {
        background-color: var(--palette-dark-lighter);
        .icon {
            filter: drop-shadow(0 0 5px var(--palette-pink));
        }
    }
}

</style>