<template lang="pug">
    
    a.MessengerUser(href="#")
        .MessengerUser-Avatar
            img(:src="require('@/assets/img/users/1.jpg')")
        .MessengerUser-Name Никита Романов 
        .MessengerUser-Location Крым • Бахчисарай


</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.MessengerUser {
    display: grid;
    grid-template-columns: 36px auto;
    @include trans-ease-out;
    align-items: center;
    grid-column-gap: 10px;
    grid-template-areas: "ava name name" "ava location location";
    text-align: left;
    text-decoration: none;
    color: #fff;
    margin: -10px -20px;
    padding: 10px 20px;
    &:hover { 
        // opacity: .75;
        background-color: var(--palette-dark-lighter);
    }

    @include respond-to(medium-screens) {
        grid-template-areas: "ava name" "ava name";
        padding: 0;
        margin: 0;
        .MessengerUser-Name {
            font-size: 12px;
            max-width: 80px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .MessengerUser-Location {
            display: none;
        }
    }
}

.MessengerUser-Avatar {
    width: 36px;
    height: 36px;
    overflow: hidden;
    border-radius: 100%;
    grid-area: ava;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.MessengerUser-Name {
    grid-area: name;
    font-size: 13px;
    font-weight: 700;
}

.MessengerUser-Location {
    grid-area: location;
    font-size: 11px;
    opacity: .5;
    letter-spacing: .2ex;
}

</style>