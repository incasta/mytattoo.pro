<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                    template(#ActionButtons)
                        ActionButton(name="Добавить татуировку" link="new-tattoo")
                
            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Мое портфолио татуировок
                        .Page-Block-Content
                            GridCards
                                template(#cards)
                                    TattooCardTemplate(v-for="(item, index) in items" :key="item.id" :data="item" :index="index")

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import ActionButton from '@/components/Navigation/SideNavigation/ActionButton.vue';
import TattooCardTemplate from '@/components/CardTemplates/TattooCardTemplate.vue';
import GridCards from '@/components/CardTemplates/GridCards.vue';


export default {
    data () {
        return {
            items: [
                {
                    status: "Опубликовано",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "На модерации",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "Опубликовано",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "Отклонено",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "Опубликовано",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "Опубликовано",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "На модерации",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "Опубликовано",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "Отклонено",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "Опубликовано",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "Удалено",
                    date: "03 • 11 • 2020 16:28:49",
                },
                {
                    status: "Удалено",
                    date: "03 • 11 • 2020 16:28:49",
                },
            ]
        }
    },
    components: {
        SideNavigation,
        ActionButton,
        TattooCardTemplate,
        GridCards,
    },
}
</script>

<style lang="scss" scoped>
@include blockUI;


</style>