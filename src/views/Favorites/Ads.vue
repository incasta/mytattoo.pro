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
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")
                                    CardAds(image="1.jpg" title="Открыта новая вакансия для тату-мастеров и новых" tag="Аренда" date="03 / 11 / 2020 16:28:49" views="32")

                            Hr
                            Paginator

</template>

<script>
import GridCards from "@/components/CardTemplates/GridCards.vue";
import CardAds from "@/components/CardTemplates/CardAds.vue";
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import Paginator from "@/components/common/Paginator.vue";
import Hr from "@/components/common/Hr.vue";

export default {
    name: 'FavAds',
    components: {
        CardAds,
        SideNavigation,
        GridCards,
        Paginator,
        Hr,
    }
}
</script>

<style lang="scss" scoped>

</style>