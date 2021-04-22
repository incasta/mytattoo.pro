<template lang="pug">
    .Author
        a(href="#")
            img(:src="require('@/assets/img/users/' + image)")

</template>

<script>
export default {
    
    props: {
        image: {
            type: String, 
            required: false,
            default: "avaMale.jpg"
        }
    },

    computed: {

    },
}
</script>

<style lang="scss" scoped>


.Author {
    @include trans-ease-out;
    width: 50px;
    height: 50px;
    overflow: hidden;
    a {
        @include flex-ja_center;
        overflow: hidden;
        border-radius: 100%;
    }
}

</style>