<template lang="pug">
    
    a.User-Avatar(href="#")
        img(:src="require('@/assets/img/users/' + avatar + '.jpg')" :width="size + 'px'" :height="size + 'px'")
        .status(:class="{ online: online }")

</template>

<script>
export default {

    props: {
        online: {
            type: Boolean,
            required: false,
            default: false,
        },
        avatar: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            required: false,
            default: 64,
        }
    }
}
</script>

<style lang="scss" scoped>

.User-Avatar {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &:hover {
        img {
            opacity: .75;
        }
    }
    img {
        // width: 64px;
        // height: 64px;
        border-radius: 100%;
        overflow: hidden;
        object-fit: cover;
        @include trans-ease-out;
    }

    .status {
        position: absolute;
        z-index: 3;
        right: 5%;
        bottom: 10%;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: grey;
        &.online {
            background-color: var(--palette-green);
            box-shadow: 0 0 10px var(--palette-green);
        }
    }
}

</style>