<template lang="pug">
    
    a.User-Avatar(href="#")
        img(:src="require('@/assets/img/masters/' + avatar + '.jpg')" :width="size + 'px'" :height="size + 'px'")
        .pro(v-if="pro") Pro
        .status(:class="{ online: online }")

</template>

<script>
export default {

    props: {
        pro: {
            type: Boolean,
            required: false,
            default: false,
        },
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

    .pro {
        position: absolute;
        z-index: 2;
        left: 50%;
        transform: translateX(-50%) translateY(40%);
        bottom: 0;
        padding: .3em .5em;
        font-size: 10px;
        background-color: var(--palette-yellow);
        color: var(--palette-dark-regular);
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 100px;
        box-shadow: 0 0px 8px var(--palette-yellow);
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