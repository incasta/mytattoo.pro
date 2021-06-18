<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                
            .Main
                .content
                    Messenger
                        template(#ContactsFeed)
                            ContactsFeed
                        template(#DialogFeed)
                            DialogFeed
                                template(#MessageRequest)
                        template(#AsideOptions)

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import Messenger from '@/components/Messenger/Messenger.vue';
import DialogFeed from '@/components/Messenger/Inbox/DialogFeed.vue';
import ContactsFeed from '@/components/Messenger/Inbox/ContactsFeed.vue';
import MessageRequest from '@/components/Messenger/Inbox/MessageRequest.vue';



export default {
    components: {
        SideNavigation,
        Messenger,
        DialogFeed,
        ContactsFeed,
        MessageRequest,
    }
}
</script>

<style lang="scss" scoped>

</style>