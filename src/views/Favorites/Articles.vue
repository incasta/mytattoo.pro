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
                                    CardArticle(image="1.jpg" title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardArticle(image="1.jpg" title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardArticle(image="1.jpg" title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardArticle(image="1.jpg" title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardArticle(title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardArticle(image="1.jpg" title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardArticle(image="1.jpg" title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardArticle(image="1.jpg" title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardArticle(image="1.jpg" title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardArticle(image="1.jpg" title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardArticle(image="1.jpg" title="КАК ПОДОБРАТЬ НУЖНЫЙ ЭСКИЗ?" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")

                            Hr
                            Paginator

</template>

<script>
import GridCards from "@/components/CardTemplates/GridCards.vue";
import CardArticle from "@/components/CardTemplates/CardArticle.vue";
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import Paginator from "@/components/common/Paginator.vue";
import Hr from "@/components/common/Hr.vue";

export default {
    name: 'FavArticles',
    components: {
        CardArticle,
        SideNavigation,
        GridCards,
        Paginator,
        Hr,
    }
}
</script>

<style lang="scss" scoped>

</style>