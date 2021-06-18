<template lang="pug">
    
    router-link.NewTicket(to="new-ticket")
        .NewTicket-Icon
            app-icon(name="plus-small")
        span Создать тикет
        
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.NewTicket {
    padding: 9px 5px;
    display: flex;
    align-items: center;
    text-decoration: none;
    @include trans-ease-out;
    span {
        font-weight: 700;
        font-size: 13px;
        text-transform: uppercase;
        color: var(--palette-blue);
        @include trans-ease-out;
    }
    &:hover {
        
        .icon {
            transform: rotate(90deg);
        }
        span {
            opacity: .75;
        }
    }
}

.NewTicket-Icon {
    @include flex-ja_center;
    background-color: var(--palette-dark-light);
    border-radius: 100%;
    width: 46px;
    height: 46px;
    margin-right: 10px;
    .icon {
        fill: var(--palette-blue);
        @include trans-ease-out;
    }
}

</style>