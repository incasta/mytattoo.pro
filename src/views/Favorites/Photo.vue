<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                    template(#panel)
                        .Side-Panel
                            .Side-Panel-Content
                                div Заполненность профиля
                
            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Избранные фотографии
                        .Page-Block-Content
                            GridCards
                                template(#cards)
                                    CardPhoto(path="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80")
                                    CardPhoto
                                    CardPhoto
                                    CardPhoto
                                    CardPhoto
                                    CardPhoto
                                    CardPhoto 

</template>

<script>
import GridCards from "@/components/CardTemplates/GridCards.vue";
import CardPhoto from "@/components/CardTemplates/CardPhoto.vue";
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';

export default {
    name: 'FavPhoto',
    components: {
        CardPhoto,
        SideNavigation,
        GridCards,
    }
}
</script>

<style lang="scss" scoped>



</style>