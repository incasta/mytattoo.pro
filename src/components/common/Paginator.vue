<template lang="pug">
    
    .Paginator
        .prev
            app-icon(name="angle-double-left" size="10")
        .Paginator-Page-List
            .Paginator-Page.current
                span 1
            .Paginator-Page
                span 2
            .Paginator-Page
                span 3
        .next
            app-icon(name="angle-double-right" size="10")

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>


.Paginator {
    @include flex-ja_center;
    margin: 30px 0 20px 0;
    margin-top: 30px;
    text-align: center;
    .Paginator-Page-List {
        @include flex-ja_center;
    }
    .Paginator-Page {
        cursor: pointer;
        font-weight: 700;
        padding: 8px 15px;
        &:not(:first-child) {
            &:nth-child(even) {
                margin: 0 2px;
            }
        }
        &.current {
            text-shadow: 0 0 5px var(--palette-blue);
            color: var(--palette-blue);
            border: 1px solid var(--palette-blue);
            border-radius: 3px;
            box-shadow: 0 0 5px var(--palette-blue), inset 0 0 5px var(--palette-blue);
        }
    }
    .prev,
    .next {
        cursor: pointer;
        padding: 8px 15px;
    }
    .prev {
        margin-right: 10px;
    }
    .next {
        margin-left: 10px;
    }
}


</style>