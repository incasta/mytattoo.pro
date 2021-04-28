<template lang="pug">
    
    .userRating_Points(:class="[ { small } ]")
        span
            | {{ value }}
            app-icon(name="token" size="14" class="token") 


</template>


<script>
export default {
    name: 'PointRating',
    props: {
        value: {
            type: String, 
            required: true,
        },
        small: {
            typer: Boolean,
            required: false,
            default: false
        }
    },
}
</script>


<style lang="scss" scoped>

// RATING STARS

.userRating_Points {
    @include trans-ease-out;
    display: flex;
    align-items: center;
    margin: 8px 0;
    color: var(--palette-blue);
    font-weight: 700;
    span {
        display: block;
        margin-left: auto;
        display: flex;
        align-items: center;
    }
    &.small {
        font-size: 11px;
    }
}

.token {
    fill: var(--palette-blue);
    margin-left: 5px;
}


</style>