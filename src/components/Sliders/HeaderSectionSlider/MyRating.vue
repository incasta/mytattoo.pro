<template lang="pug">

    .SlideContent 
        .header Мой рейтинг
        .userRating
            .userRating_Stars
                .star-rating(data-stars="3.5")
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
@include RatingStars;





</style>