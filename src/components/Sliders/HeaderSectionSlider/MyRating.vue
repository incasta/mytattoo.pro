<template lang="pug">

    .SlideContent 
        .header Мой рейтинг
        .userRating
            .userRating_Stars
                .stars--3_5 ***
            .userRating_Points 
                | 603 
                app-icon(name='token')
            label Подписка истекает
            .timer Через
            span 20 
            | дней
            .btn-wrap
                router-link(to="/").btn-neon.pink Продлить

</template>

<style lang="scss" scoped>

@include SlideContent;
@include SlideHeader;

.userRating_Points {
    @include flex-ja_center;
    font-weight: 700;
    color: var(--pallete-blue);
    .icon {
        margin-left: 5px;
    }
}

</style>