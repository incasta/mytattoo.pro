<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                
            .Main
                .content
                    NewTicket

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import MessengerSupport from '@/components/Messenger/MessengerSupport.vue';
import NewTicket from '@/components/Messenger/Support/NewTicket/NewTicket.vue';

export default {
    components: {
        SideNavigation,
        MessengerSupport,
        NewTicket,
    }
}
</script>

<style lang="scss" scoped>

</style>