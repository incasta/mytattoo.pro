<template lang="pug">

    .SlideContent 
        .header Мой рейтинг
        .userRating
            .userRating_Stars
                .star-rating(data-stars="3.5")
            .userRating_Points.Rating_Points 
                span.value 603 
                app-icon(name='token')
            
            .userRatingProgress
                .userRatingProgress-Header
                    label Ваш прогресс
                    //- app-icon(name="rating-up" size="24")
                .progressBar
                    .progressCurrent(:style="{ width: RatingValue + '%' }")
                .userRatingProgress-Footer
                    .progress-left.Rating_Points 
                        | Еще 
                        span.value 123 
                        app-icon(name='token')
                    .progress-next
                        | до 
                        .userRating_Stars
                            .star-rating(data-stars="4")
                
</template>


<script>


export default {
    name: "MyRating",
    data () {
        return {
            RatingValue: 20,
        }
    },
}
</script>

<style lang="scss" scoped>

@include SlideContent;
@include SlideHeader;
@include RatingStars;

.Rating_Points {
    .icon {
        fill: var(--palette-blue) !important;
    }
}

.userRating_Points {
    justify-content: center;
}

.userRating {
    width: 100%;
    max-width: 320px;
}

.userRatingProgress {
    margin: 40px 0;
}

.userRatingProgress-Header,
.userRatingProgress-Footer {
    display: flex;
    justify-content: space-between;
}

.userRatingProgress-Header {
    text-transform: uppercase;
    color: var(--palette-blue);
    font-weight: 700;
    label {
        margin: 0 auto;
        // color: #fff
    }
}

.userRatingProgress-Footer {

}

.progress-next {
    display: flex;
    align-items: center;
    .userRating_Stars {
        margin: 0;
        margin-left: 5px;
        width: calc(160px / 1.5);
        height: calc(32px / 1.5);
    }
}

.RatingProgessBar {
    position: relative;
    overflow: hidden;
    
}

.progressCurrent {
    overflow: hidden;
    background: #ac92ec;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(270deg, #00F0FF 20%, rgba(0, 240, 255, 0) 100%);
    border-radius: 10px;
}
    

.progressBar {
    background-color: rgba(0,0 ,0 ,.4);
    position: relative;
    height: 8px;
    border-radius: 5px;
    overflow: hidden;
    border-radius: 10px;
    margin: 15px 0;
    &.maximum {
        .progressCurrent {
            background: linear-gradient(270deg, #FFFF70 20%, rgba(0, 240, 255, 0) 100%);
        }
    }
}

.progress-left {
    text-transform: uppercase;
    margin-right: auto;
    span {
        margin-left: .25em;
    }    

}



</style>