<template lang="pug">
    .Author
        a(href="#")
            img(:src="path")

</template>

<script>
export default {
    
    props: {
        path: {
            type: String, 
            required: false,
            default: require("@/assets/img/avaMale.jpg")
        }
    },

    computed: {
        src() {
            return this.path ? (this.path) : undefined; 
        }
    }

}
</script>

<style lang="scss" scoped>


.Author {
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