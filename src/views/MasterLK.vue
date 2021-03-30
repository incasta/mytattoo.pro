<template lang='pug'>
    main
        HeaderSection
        .container
            .Row
                .SideBar
                    SideNavigation
                .Main
                    router-view
                    
        
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import SideNavigation from '@/components/Navigation/SideNavigation/Master/LKNavigation.vue';


export default {
    name: 'MasterLK',
    data () {
        return {
            
        }
    },
    components: {
        HeaderSection,
        SideNavigation,

    }
}

</script>

<style lang="scss">

.Row {
    display: flex;

    @include respond-to(large-screens) {
        flex-wrap: wrap;
    }
    margin-top: 20px;
}

.Page-Block {
    // height: 300vh;
    &:not(:first-child) {
        margin-top: 20px;
    }
    @include respond-to(large-screens) {
        margin-top: 20px;
    }
}

.Page-Block-Header {
    background-color: var(--palette-dark-light);
    padding: 15px 24px;
    position: relative;
    font-size: 16px;
    text-align: left;
    overflow: hidden;
    border-radius: 2px;
    text-transform: uppercase;
    h2 {
        font-size: 16px;
        text-align: left;
    }
    &:before {
        content: '';
        @include trans-ease-in;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
        background-color: var(--palette-blue);
    }
}

.Page-Block-Content {
    background: var(--palette-dark-medium);
    padding: 20px;
    text-align: left;
    @include respond-to(small-medium-screens) {
        padding: 10px;
    }
}

.Content-Column {
    // 
}

.SideBar {
    width: 260px;

    @include respond-to(large-screens) {
        width: 100%;
    }
}

.Main {
    flex-grow: 1;
    padding-left: 20px;
    @include respond-to(large-screens) {
        min-width: unset;
        width: 100%;
        padding-left: 0;
    }
}



</style>