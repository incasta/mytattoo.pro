<template lang="pug">
    
section
    .container
        SectionHeader(title="Галерея")
        Grid-Cards(:columns="5")
            template(#cards)
                CardPhoto(v-for="card in cards" :key="card.id" :image="card.img + '.jpg'")

</template>

<script>
import SectionHeader from '@/components/common/SectionHeader.vue';
import GridCards from "@/components/CardTemplates/GridCards.vue";

import CardPhoto from "@/components/CardTemplates/CardPhoto.vue";


export default {
    data() {
        return {
            cards: [
                {
                    img: '1',
                },
                {
                    img: '2',
                },
                {
                    img: '3',
                },
                {
                    img: '4',
                },
                {
                    img: '5',
                },
                {
                    img: '3',
                },
                {
                    img: '2',
                },
                {
                    img: '5',
                },
                {
                    img: '1',
                },
                {
                    img: '2',
                },


            ]
        }
    },
    components: {
        SectionHeader,
        GridCards,
        CardPhoto,
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