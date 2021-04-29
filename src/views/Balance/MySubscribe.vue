<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                    template(#panel)
                        .Side-Panel
                            .Side-Panel-Content
                                div Получите дополнительные привилегии с PRO-аккаунтом
                
            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Выбор тарифа
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