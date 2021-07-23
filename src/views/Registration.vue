<template lang="pug">
    
    main
        CurrentLocation
        router-view

</template>

<script>
import CurrentLocation from '@/components/common/CurrentLocation.vue';

export default {
    components: {
        CurrentLocation,
    }
}
</script>

<style lang="scss" scoped>


</style>