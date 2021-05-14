<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Отзывы

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';

export default {
    components: {
        SideNavigation,
    }
}
</script>


<style lang="scss" scoped>
@include blockUI;


</style>