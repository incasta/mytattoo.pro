<template lang="pug">
    
section
    .container
        SectionHeader(title="Новости")
        Grid-Cards(:columns="5")
            template(#cards)
                CardAds(v-for="card in cards" :key="card.id" :image="card.img + '.jpg'" tag="Аренда" date="03 / 11 / 2020 16:28:49" title="Открыта новая вакансия для тату-мастеров и новых" views="32")

</template>

<script>
import SectionHeader from '@/components/common/SectionHeader.vue';
import GridCards from "@/components/CardTemplates/GridCards.vue";

import CardAds from "@/components/CardTemplates/CardAds.vue";


export default {
    data() {
        return {
            cards: [
                {
                    img: '1',
                },
                {
                    img: '1',
                },
                {
                    img: '1',
                },
                {
                    img: '1',
                },
                {
                    img: '1',
                },
                {
                    img: '1',
                },
                {
                    img: '1',
                },
                {
                    img: '1',
                },
                {
                    img: '1',
                },
                {
                    img: '1',
                },


            ]
        }
    },
    components: {
        SectionHeader,
        GridCards,
        CardAds,
    },
}
</script>


<style lang="scss" scoped>

section {
    margin-top: 100px;
    background: linear-gradient(180deg, rgba(9, 18, 28, 0) 0%, #09121C 52.08%, #09121C 59.37%, rgba(9, 18, 28, 0) 100%);
}

.Grid-Cards {
    margin-top: 40px;
}

</style>