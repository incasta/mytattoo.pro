<template lang="pug">
    
    router-link.ActionButton(:to="link")
        .ActionButton-Name {{ name }}
        .ActionButton-Icon
            app-icon(:name="icon" size="18")

</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: false,
            default: "plus-small",
        },
        link: {
            type: String,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>

.ActionButton {
    display: flex;
    align-items: center;
    background-color: var(--palette-dark-lighter);
    margin: 1px 0;
    text-decoration: none;
    &:hover,
    &.router-link-active {
        .ActionButton-Icon {
            .icon {
                filter: drop-shadow(0 0 10px var(--palette-blue));
            }
        }
        .ActionButton-Name {
            color: var(--palette-blue);
        }
    }

}

.ActionButton-Name  {
    color: var(--palette-white);
    padding: 15px 20px;
    text-align: left;
    font-weight: 400;
    color: #fff;
    @include trans-ease-out;
}

.ActionButton-Icon {
    background-color: var(--palette-dark-light);
    @include flex-ja_center;
    height: 100%;
    width: 49px;
    height: 49px;
    margin-left: auto;
    border-radius: 2px;
    .icon {
        fill: var(--palette-blue);
        @include trans-ease-out;
    }
}

</style>