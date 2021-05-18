<template lang="pug">
    
    main
        CurrentLocation
        .container
            .Row
                .SideBar
                    SideNavigation
                .Main
                    .content
                        .Page-Block
                            .Page-Block-Header
                                h2 Оставить отзыв о мастере
                            .Page-Block-Content
                                .Page-Block-Navigation
                                    ButtonBack(text="Отзывы мастера" icon="arrow-small-left")
                                    DropdownLarge(:options="options")


</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import CurrentLocation from '@/components/common/CurrentLocation.vue';
import ButtonBack from '@/components/common/ButtonBack.vue';
import DropdownLarge from '@/components/common/DropdownLarge.vue';

export default {
    data () {
        return {
            options: [
                {
                    name: "Интимная татуировка",
                    status: "В процесее",
                    date: "20 / 01 / 2021",
                },
                {
                    name: "Удаление татуировки",
                    status: "Завершено",
                    date: "20 / 01 / 2019",
                },
                {
                    name: "Набить татуировку",
                    status: "В процессе",
                    date: "18 / 12 / 2020",
                },
            ]
        }
    },
    components: {
        SideNavigation,
        CurrentLocation,
        ButtonBack,
        DropdownLarge,
    }
    
}
</script>

<style lang="scss" scoped>
@include blockUI;

.Page-Block-Navigation {
    display: flex;
    align-items: center;
    
}

.DropdownLarge {
    margin-left: auto;
    max-width: max-content;
}

</style>