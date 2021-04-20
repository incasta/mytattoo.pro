<template lang="pug">
    
    .Card-Template
        .Card-Overlay
            .Overlay-Details
                a.CardDetails(href="javascript:void(0);")
            .Overlay-Top
                Author
                .Favorite
        .Card-Image
            img(:src="require('@/assets/img/photo/' + image)")

</template>

<script>
import Author from "@/components/common/Author.vue";

export default {
    components: {
        Author,
    },
    props: {
        image: {
            type: String, 
            required: false,
            default: "no-image.png"
        }
    },


}
</script>

<style lang="scss" scoped>

.Card-Template {
    height: 230px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.Card-Overlay {
    position: absolute;
    z-index: 1;
    // opacity: 0;
}

.Card-Image {
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.Card-Overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
}

</style>