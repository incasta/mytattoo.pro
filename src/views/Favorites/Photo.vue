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
                                    CardPhoto(image="1.jpg")
                                    CardPhoto
                                    CardPhoto
                                    CardPhoto(image="2.jpg")
                                    CardPhoto(image="3.jpg")
                                    CardPhoto
                                    CardPhoto(image="4.jpg")
                                    CardPhoto(image="5.jpg")
                                    CardPhoto 
                                    CardPhoto(image="1.jpg")
                                    CardPhoto
                                    CardPhoto
                                    CardPhoto(image="2.jpg")
                                    CardPhoto(image="3.jpg")
                                    CardPhoto
                                    CardPhoto(image="4.jpg")
                                    CardPhoto(image="5.jpg")
                                    CardPhoto 
                                    CardPhoto(image="1.jpg")
                                    CardPhoto
                                    CardPhoto
                                    CardPhoto(image="2.jpg")
                                    CardPhoto(image="3.jpg")
                                    CardPhoto
                                    CardPhoto(image="4.jpg")
                                    CardPhoto(image="5.jpg")
                                    CardPhoto 
                                    CardPhoto(image="1.jpg")
                                    CardPhoto
                                    CardPhoto
                                    CardPhoto(image="2.jpg")
                                    CardPhoto(image="3.jpg")
                                    CardPhoto
                                    CardPhoto(image="4.jpg")
                                    CardPhoto(image="5.jpg")
                                    CardPhoto 
                            Hr
                            Paginator

</template>

<script>
import GridCards from "@/components/CardTemplates/GridCards.vue";
import CardPhoto from "@/components/CardTemplates/CardPhoto.vue";
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import Paginator from "@/components/common/Paginator.vue";
import Hr from "@/components/common/Hr.vue";

export default {
    name: 'FavPhoto',
    components: {
        CardPhoto,
        SideNavigation,
        GridCards,
        Paginator,
        Hr,
    }
}
</script>

<style lang="scss" scoped>

</style>