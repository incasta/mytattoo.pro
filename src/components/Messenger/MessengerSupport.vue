<template lang="pug">
    
    .Messenger(:class="{active : active}")
        aside.Messenger-Aside
            .Aside-Header
                SearchInput
                slot(name="AsideOptions")
            .ContactsFeed.thin-scrollbar(@click="active = !active")
                slot(name="ContactsFeed")
            

        main.Messenger-Main
            .Main-Header
                .MobileCloseDialog(@click="active = !active")
                    MobileCloseDialog
                MessengerUser(theme="Тема обращения")

                TicketStatus(:number="18123" :open="false")
                DialogNotification
                TicketClose
                
            .Dialog-Frame.thin-scrollbar
                .Dialog-Frame-Inner
                    slot(name="DialogFeed")
                    
            slot(name="MessageMsgBox")
                MessageMsgBox(:disabled="false")

</template>

<script>
import SearchInput from "@/components/common/SearchInput.vue";
import MessageMsgBox from "@/components/Messenger/MessageMsgBox.vue";
import MessengerUser from "@/components/Messenger/Support/MessengerUser.vue";
import DialogNotification from "@/components/Messenger/Support/DialogNotification.vue";
import TicketClose from "@/components/Messenger/Support/TicketClose.vue";
import TicketStatus from "@/components/Messenger/Support/TicketStatus.vue";

import MobileRemoveDialog from "@/components/Messenger/MobileRemoveDialog.vue";
import MobileCloseDialog from "@/components/Messenger/MobileCloseDialog.vue";

export default {
    data () {
        return {
            active: false,
        }
    },
    components: {
        SearchInput,
        MessageMsgBox,
        MessengerUser,
        DialogNotification,
        TicketClose,
        TicketStatus,
        MobileRemoveDialog,
        MobileCloseDialog
    },
}
</script>

<style lang="scss" scoped>

.Messenger {
    color: #fff;
    background-color: #091016;
    display: grid;
    width: 100%;
    border-radius: 4px;
    margin: 0 auto;
    grid-template-areas: "side-a main";
    grid-template-columns: minmax(240px,33%) 1fr;
    height: 100vh;
    max-height: 660px;
    @include respond-to (large-screens) {
        margin-top: 20px;
    }

    @include respond-to(medium-screens) {
        width: 100%;
        overflow: hidden;
        grid-template-columns: 1fr 0;
        grid-template-areas: "side-a main";
        .Messenger-Main {
            transform: translateX(100%);
        }

        &.active {
            grid-template-columns: 0 1fr;
            .Messenger-Aside {
                opacity: 0;
                transform: translateX(-100%);
            }

            .Messenger-Main {
                transform: translateX(0%);
            }
        }
    }
}


// ASIDE 

.Messenger-Aside {
    @include trans-ease-out;
    grid-area: side-a;
    display: flex;
    flex-direction: column;
    position: relative;
    max-height: inherit;
    @include respond-to(medium-screens) {
        width: 100%;
    }
}

.Aside-Header {
    background-color: #101b29;
    height: 55px;
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-between;
    &:before {
        content: "";
        width: 4px;
        height: 100%;
        border-radius: 2px 0 0 2px;
        background-color: #04afbc;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    }
}

// MAIN

.Messenger-Main {
    @include trans-ease-out;
    grid-area: main;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #232d38;
    position: relative;
    overflow: hidden;
}


.Main-Header {
    background-color: #101b29;
    height: 55px;
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-between;
    @include respond-to(medium-screens) {
        padding: 5px 10px;
    }
}


.MobileRemoveDialog {
    @include respond-to(medium-screens) {
        // margin-left: auto;
        // margin-left: 10px;
    }

    @include respond-to(wide-screens) {
        display: none;
    }
}

// .DialogNotification {
//     @include respond-to(handlers) {
//         margin-left: 0;
//     }
// }

.Dialog-UnChecked {
    margin-left: auto;

    @include respond-to(medium-screens) {
        margin: 0;
    }
}

.TicketClose {
    @include respond-to(handlers) {
        margin-right: -10px;
    }
}

.Dialog-Frame {
    position: relative;
    overflow-y: auto;
    flex: 1;
    flex-direction: column-reverse;
    display: flex;
}


.Dialog-Frame-Inner {
    display: flex;
    align-self: stretch;
    width: 100%;
    flex-direction: column-reverse;
}

.TicketStatus {
    @include respond-to(handlers) {
        // margin-left: 10px;
    }
}

.MobileCloseDialog {
    
}

</style>