<template lang="pug">
    
    .Msg
        .subTitle Успешно!
        .Description
            app-icon(name="check-filled" size="26")
            span Ваше фото будет опубликовано после проверки в течение 24 часов
        .Btn-Wrap
            ButtonBack(text="Мои татуировки" icon="arrow-small-left" href="/masterLK/my-tattoo/")

</template>

<script>
import ButtonBack from '@/components/common/ButtonBack.vue';

export default {
    components: {
        ButtonBack,
    }
}
</script>


<style lang="scss" scoped>


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