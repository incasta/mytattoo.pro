<template lang="pug">
    
    a.CardDetails(href="javascript:void(0);" @click="ModalGallery")
        app-icon(name="zoom-in" size="20")

</template>

<script>
import ModalGallery from "@/components/Modals/ModalGallery.vue";

export default {
    components: {
        ModalGallery,
    },
    props: {
        
    },
    methods: {
        ModalGallery() {
            this.$modal.show(
            ModalGallery, 
            {
                // text: 'This text is passed as a property'
            },
            {
                pivotY: 0.35,
                clickToClose: true,
                scrollable: true, 
                reset: true, 
                width: "100%",
                // height: "600px", 
                height: "auto", 
                // adaptive: true, 
                classes: "Modal--Gallery",
                styles: {
                    "background-color" : "unset",
                    "box-shadow" : "none",
                }
            },
            )
        },
    }
}
</script>

<style lang="scss" scoped>

.CardDetails {
    @include trans-ease-out;
    transform: scale(0);
    opacity: 0;
    @include flex-ja_center;
    width: 100%;
    height: 100%;
    .icon {
        fill: var(--palette-blue);
    }
}

</style>