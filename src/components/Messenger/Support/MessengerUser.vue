<template lang="pug">
    
    .MessengerUser(href="#")
        .MessengerUser-Avatar
            //- img(:src="require('@/assets/icons/support-ava.svg')")
            app-icon(name="support-ava" size="35")
        .MessengerUser-Name {{ theme }}


</template>

<script>
export default {
    props: {
        theme: {
            type: String,
            required: true, 
        }
    }
}
</script>

<style lang="scss" scoped>

.MessengerUser {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.MessengerUser-Avatar {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.MessengerUser-Name {
    font-size: 13px;
    font-weight: 700;
    color: var(--palette-pink);

    @include respond-to(handlers) {
        display: none;
    }
    
}

</style>