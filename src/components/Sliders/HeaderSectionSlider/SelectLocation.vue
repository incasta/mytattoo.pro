<template lang="pug">

    .SlideContent 
        .SelectLocation
            .label Мое местоположение
            a.Current-City(href="javascript:void(0);")
                span Старый Крым
                app-icon(name="edit-alt" size="14")
                
</template>


<script>


export default {
    name: "MyRating",
    data () {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
@include SlideContent;


.SelectLocation { 
    .label {
        text-transform: uppercase;
        font-weight: 700;
        color: var(--palette-blue);
        font-size: 14px;
        letter-spacing: 0.1ex;
        margin-bottom: 20px;
    }

    .Current-City {
        text-transform: uppercase;
        @include flex-ja_center;
        font-weight: 700;
        color: #fff;
        text-decoration: none;
        .icon {
            fill: var(--palette-blue);
            margin-left: 10px;
        }
        &:hover {
            span {
                opacity: .75;
            }
            
        }
    }
}
</style>