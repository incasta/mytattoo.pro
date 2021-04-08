<template lang='pug'>
    main
        HeaderSection
        router-view
                    
        
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
// import SideNavigation from '@/components/Navigation/SideNavigation/Master/LKNavigation.vue';


export default {
    name: 'MasterLK',
    data () {
        return {
            
        }
    },
    components: {
        HeaderSection,
        // SideNavigation,

    }
}

</script>

<style lang="scss">

@include vue-multiselect;
@include blockUI;


</style>