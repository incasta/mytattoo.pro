<template lang="pug">
    
    .container
        .Row
            .SideBar
                MasterProfileSide
                    template(#TopButton)
                        Button(text="Написать отзыв" icon="edit-alt" href="/master/master-feedbacks/create-feedback" :iconSize="15")
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
                                ButtonBack(text="Отзывы мастера" icon="arrow-small-left" href="/master/master-feedbacks")

</template>

<script>
import MasterProfileSide from '@/components/MasterPublicProfile/MasterProfileSide.vue';
import ButtonBack from '@/components/common/ButtonBack.vue';
import Button from '@/components/common/Button.vue';

export default {
    components: {
        MasterProfileSide,
        ButtonBack,
        Button,
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