<template lang="pug">

    .SlideContent 
        .header Мой аккаунт
        .userSubStatus.pro PRO
        .userSubTimer
            label Подписка истекает
            .timer 
                | Через 
                span 20 
                | дней 
            .btn-wrap
                router-link(to="/").btn-neon.pink.hover-effect-neon_glitch Продлить
        
</template>

<style lang="scss" scoped>

@include SlideContent;
@include SlideHeader;
@include userSubStatus;
@include ButtonNeon;

.userSubTimer {
    text-transform: uppercase;
    font-weight: 700;
    label {
        color: var(--palette-blue);
        font-size: 14px;
        margin-bottom: 1.25em;
    }
    .timer {
        font-size: 22px;
    }
}

.btn-wrap {
    margin: 1.5em;
}

</style>