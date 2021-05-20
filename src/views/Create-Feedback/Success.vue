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
                                .subTitle Спасибо!
                                .Description
                                    app-icon(name="check-filled" size="26")
                                    span Ваш отзыв будет опубликован после проверки
                                .Btn-Wrap
                                    ButtonBack(text="Отзывы мастера" icon="arrow-small-left")

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import CurrentLocation from '@/components/common/CurrentLocation.vue';
import ButtonBack from '@/components/common/ButtonBack.vue';

export default {
    components: {
        CurrentLocation,
        SideNavigation,
        ButtonBack,
    }
}
</script>

<style lang="scss" scoped>
@include blockUI;

.subTitle {
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    color: var(--palette-blue);
    margin-top: 10px;
}

.Description {
    text-align: center;
    margin: 0 auto;
    .icon {
        vertical-align: middle;
        margin-right: 10px;
        fill: var(--palette-blue);
    }
    span {
        text-transform: uppercase;
        margin-top: 20px;
        display: inline-flex;
    }
}

.Btn-Wrap {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

</style>