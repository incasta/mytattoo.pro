<template lang="pug">
    
    app-icon.tooltip(name="tooltip" width="18" :content="content" v-tippy="{ delay: [0, 300], arrow : true, arrowType : 'round', theme: 'custom',}")

    //- Если поле активно, то Ваш возраст будете видеть только Вы
</template>

<script>
export default {
    props: {
        content: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>

.tooltip {
    vertical-align: middle;
    cursor: pointer;
    margin-left: 10px;
    &.icon {
        fill: var(--palette-pink);
    }
}

</style>