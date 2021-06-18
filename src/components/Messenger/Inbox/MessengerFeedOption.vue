<template lang="pug">
    
    .MessengerFeedOption
        DropdownPopup
            template(#trigger)
            template(#content)
                .MessengerFeed-FilterList
                    a.MessengerFeed-FilterItem.selected(href="#") Все сообщения
                    a.MessengerFeed-FilterItem(href="#") Только заявки
                    a.MessengerFeed-FilterItem(href="#") Фотографии

            

</template>

<script>
import DropdownPopup from "@/components/common/DropdownPopup.vue"

export default {
    components: {
        DropdownPopup,
    }
}
</script>


<style lang="scss" scoped>

.MessengerFeed-FilterList {
    width: max-content;
    .MessengerFeed-FilterItem {
        display: block;
        text-decoration: none;
        color: #fff;
        padding: 15px 20px;
        text-align: left;
        min-width: 15em;
        &:hover {
            background-color: var(--palette-dark-semilight);
        }
        &.selected {
            color: var(--palette-blue);
            background-color: var(--palette-dark-semilight);
        }
    }
}

</style>