<template lang="pug">
    
    .Msg
        .subTitle Надо же, ошибочка :(
        .Description
            app-icon(name="cross-filled" size="26")
            span Что-то пошло не так, Ваше фото не опубликовано. Попробуйте еще раз или обратитесь в тех поддержку
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
    color: var(--palette-pink);
    margin-top: 10px;
}

.Description {
    text-align: center;
    margin: 0 auto;
    .icon {
        vertical-align: middle;
        margin-right: 10px;
        fill: var(--palette-pink);
    }
    span {
        text-transform: uppercase;
        margin-top: 20px;
        display: inline-flex;
        max-width: 600px;
    }
}

.Btn-Wrap {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

</style>