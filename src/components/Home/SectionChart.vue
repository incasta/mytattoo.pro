<template lang="pug">
    
section
    .container
        SectionHeader(title="ЧАРТ INTATTOO.pro")
        ChartToggler
        Grid-Cards(:columns="5")
            template(#cards)
                CardMaster(v-for="card in cards" :key="card.id" :place="card.place" image="1.jpg" :name="card.name" :nickname="card.nickname")


</template>

<script>
import SectionHeader from '@/components/common/SectionHeader.vue';
import ChartToggler from '@/components/common/ChartToggler.vue';
import GridCards from "@/components/CardTemplates/GridCards.vue";

import CardMaster from "@/components/CardTemplates/CardMaster.vue";


export default {
    data() {
        return {
            cards: [
                {
                    name: "Алексей Вергунов",
                    nickname: "Warhammer",
                    place: 1
                },
                {
                    name: "Алексей Вергунов",
                    nickname: "Warhammer",
                    place: 2
                },
                {
                    name: "Алексей Вергунов",
                    nickname: "Warhammer",
                    place: 3
                },
                {
                    name: "Алексей Вергунов",
                    nickname: "Warhammer",
                    place: 4
                },
                {
                    name: "Алексей Вергунов",
                    nickname: "Warhammer",
                    place: 5
                },
            ]
        }
    },
    components: {
        SectionHeader,
        GridCards,
        CardMaster,
        ChartToggler,
    },
}
</script>


<style lang="scss" scoped>

section {
    margin-top: 100px;
}

.Grid-Cards {
    margin-top: 40px;
}

</style>