<template lang="pug">
    
    .Grid-Cards(:class="{ 'columns-5': columns == 5 }")
        slot(name="cards") 

</template>

<script>
export default {
    props: {
        columns: {
            type: Number,
            required: false,
        }
    }
}
</script>

<style lang="scss" scoped>

.Grid-Cards {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(11rem,1fr));
    width: 100%;
    height: 100%;
    grid-gap: .9rem;
    gap: .9rem;
    align-content: flex-start;
    &.columns-5 {
        grid-template-columns: repeat(auto-fill,minmax(13rem,1fr));
    }
}

</style>
