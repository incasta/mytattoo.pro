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
                            h2 Избранные эскизы
                        .Page-Block-Content
                            GridCards
                                template(#cards)
                                    CardSketch(image="1.jpg" price="1000")
                                    CardSketch(image="6.jpg" price="123")
                                    CardSketch(image="7.jpg" price="412")
                                    CardSketch(image="2.jpg" price="123123")
                                    CardSketch(image="3.jpg" price="123142")
                                    CardSketch(price="512341")
                                    CardSketch(image="4.jpg" price="123")
                                    CardSketch(image="5.jpg" price="123")
                                    CardSketch(price="765")
                                    CardSketch(image="1.jpg" price="345435")
                                    CardSketch(image="7.jpg" price="34556")
                                    CardSketch(price="3466")
                                    CardSketch(image="2.jpg" price="77634")
                                    CardSketch(image="3.jpg" price="3455")
                                    CardSketch(price="3453")
                                    CardSketch(image="4.jpg" price="145000")
                                    CardSketch(image="5.jpg" price="1000")
                                    CardSketch(image="8.jpg" price="1000") 
                                    CardSketch(image="1.jpg" price="1000")
                                    CardSketch(image="8.jpg" price="102300")
                                    CardSketch(image="6.jpg" price="1000")
                                    CardSketch(image="2.jpg" price="1023400")
                                    CardSketch(image="3.jpg" price="1000")
                                    CardSketch(image="8.jpg" price="1000")
                                    CardSketch(image="4.jpg" price="1000")
                                    CardSketch(image="5.jpg" price="1000")
                                    CardSketch(image="8.jpg" price="1000") 
                                    CardSketch(image="1.jpg" price="1000")
                                    CardSketch(price="1000")
                                    CardSketch(image="7.jpg" price="1000")
                                    CardSketch(image="2.jpg" price="1000")
                                    CardSketch(image="3.jpg" price="1000")
                                    CardSketch(image="6.jpg" price="1000")
                                    CardSketch(price="1000")
                                    CardSketch(price="1000")

                            Hr
                            Paginator

</template>

<script>
import GridCards from "@/components/CardTemplates/GridCards.vue";
import CardSketch from "@/components/CardTemplates/CardSketch.vue";
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import Paginator from "@/components/common/Paginator.vue";
import Hr from "@/components/common/Hr.vue";

export default {
    name: 'FavSketches',
    components: {
        CardSketch,
        SideNavigation,
        GridCards,
        Paginator,
        Hr,
    }
}
</script>

<style lang="scss" scoped>

</style>