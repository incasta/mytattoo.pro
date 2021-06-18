<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                    template(#ActionButtons)
                        ActionButton(name="Редактор" link="editor")
                
            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 На модерации
                        .Page-Block-Content
                            GridCards
                                template(#cards)
                                    PublicationCardTemplate(v-for="(item, index) in items" :key="item.id" :data="item" :index="index")

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import ActionButton from '@/components/Navigation/SideNavigation/ActionButton.vue';
import PublicationCardTemplate from '@/components/CardTemplates/PublicationCardTemplate.vue';
import GridCards from '@/components/CardTemplates/GridCards.vue';


export default {
    data () {
        return {
            items: [
                {
                    request: true,
                    tag: "Аренда",
                    title: "Открыта новая вакансия для тату-мастеров и новых",
                    optionTimeout: true,
                },
            ]
        }
    },
    components: {
        SideNavigation,
        ActionButton,
        PublicationCardTemplate,
        GridCards,
    },
}
</script>

<style lang="scss" scoped>
@include blockUI;


</style>