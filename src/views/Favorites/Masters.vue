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
                            h2 Избранные объявления
                        .Page-Block-Content
                            GridCards
                                template(#cards)
                                    CardMaster(image="1.jpg" name="Алексей Вергунов" nickname="Warhammer")
                                    CardMaster(image="1.jpg" name="Алексей Вергунов" nickname="Warhammer")
                                    CardMaster(image="1.jpg" name="Алексей Вергунов" nickname="Warhammer")
                                    CardMaster(image="1.jpg" name="Алексей Вергунов" nickname="Warhammer")
                                    CardMaster(image="1.jpg" name="Алексей Вергунов" nickname="Warhammer")
                                    CardMaster(image="1.jpg" name="Алексей Вергунов" nickname="Warhammer")
                                    CardMaster(image="1.jpg" name="Алексей Вергунов" nickname="Warhammer")
                                    CardMaster(name="Алексей Вергунов" nickname="Warhammer")
                                    CardMaster(image="1.jpg" name="Алексей Вергунов" nickname="Warhammer")
                                    CardMaster(image="1.jpg" name="Алексей Вергунов" nickname="Warhammer")
                                    CardMaster(image="1.jpg" name="Алексей Вергунов" nickname="Warhammer")
                            Hr
                            Paginator

</template>

<script>
import GridCards from "@/components/CardTemplates/GridCards.vue";
import CardMaster from "@/components/CardTemplates/CardMaster.vue";
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import Paginator from "@/components/common/Paginator.vue";
import Hr from "@/components/common/Hr.vue";

export default {
    name: 'FavMasters',
    components: {
        CardMaster,
        SideNavigation,
        GridCards,
        Paginator,
        Hr,
    }
}
</script>

<style lang="scss" scoped>

</style>