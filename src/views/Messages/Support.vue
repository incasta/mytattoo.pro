<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                
            .Main
                .content
                    MessengerSupport
                        template(#ContactsFeed)
                            ContactsFeed
                                template(#NewTicket)
                                    NewTicketButton
                        template(#DialogFeed)
                            DialogFeed
                        template(#AsideOptions)
                            ContactsFeedOptions

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import MessengerSupport from '@/components/Messenger/MessengerSupport.vue';
import ContactsFeedOptions from '@/components/Messenger/Support/ContactsFeedOptions.vue';
import DialogFeed from '@/components/Messenger/Inbox/DialogFeed.vue';
import ContactsFeed from '@/components/Messenger/Support/ContactsFeed.vue';
import NewTicketButton from '@/components/Messenger/Support/NewTicketButton.vue';

export default {
    components: {
        SideNavigation,
        MessengerSupport,
        DialogFeed,
        ContactsFeed,
        ContactsFeedOptions,
        NewTicketButton
    }
}
</script>

<style lang="scss" scoped>

</style>