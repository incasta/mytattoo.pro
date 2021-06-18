<template lang="pug">
    
    .TicketClose(v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}" content="Закрыть тикет")
        app-icon(name="lock" size="16")

</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>

.TicketClose {
    cursor: pointer;
    // margin: 0 10px;
    // margin-left: 10px;
    margin-right: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 55px;
    height: 55px;
    @include trans-ease-out;
    &:hover {
        background-color: var(--palette-dark-lighter);
    }
    .icon {
        fill: var(--palette-pink);
    }
}

</style>