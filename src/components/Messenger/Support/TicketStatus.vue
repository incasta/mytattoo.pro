<template lang="pug">
    
    .TicketStatus(:class="{ closed: !open}") Тикет {{ '#' + number }} - 
        span(v-if="open") Открыт
        span(v-if="!open") Закрыт
    

</template>

<script>
export default {
    props: {
        number: {
            type: Number,
            required: true,
        },
        open: {
            type: Boolean,
            required: true,
        },
    }
}
</script>


<style lang="scss" scoped>

.TicketStatus {
    font-size: 13px;
    margin-left: auto;
    color: var(--palette-blue);
    &.closed {
        opacity: .5;
        color: var(--palette-white);
    }

    @include respond-to(handlers) {
        font-size: 11px;
        text-align: left;
    }
}

</style>