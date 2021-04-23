<template lang="pug">
    
    .Grid-Cards
        slot(name="cards") 

</template>

<script>
export default {
    
}
</script>

<style scoped>

.Grid-Cards {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(11rem,1fr));
    width: 100%;
    height: 100%;
    grid-gap: .9rem;
    gap: .9rem;
    align-content: flex-start;
}


</style>