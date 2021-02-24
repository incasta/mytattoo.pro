<template lang="pug">
    .MobileNavigation(:class='{ active: active }')
        .nav-mobile-burger(@click='active = !active')
            .burger-icon
                span
                span
                span
        .nav-mobile-navigation
        .nav-mobile-overlay
</template>

<script>
export default {
    name: 'MobileNavigation',
    data () {
        return {
            active: false
        }
    }
}
</script>

<style lang="scss" scoped>

.MobileNavigation {
    @include respond-to(wide-screens) {
        display: none;
    }
}

.nav-mobile-burger {
    @include flex-ja_center;
    width: 32px;
    height: 25px;

    position: relative;
    z-index: 5;
}

.burger-icon {
    position: absolute;
    height: 25px;
    width: 32px;
    span {
        @include trans-ease-in;
        width: 100%;
        height: 2px;
        background-color: var(--pallete-pink);
        display: block;
        position: absolute;
        z-index: 1;
        border-radius: 2px;

        &:nth-child(1) {
            top: 0;
        }
        &:nth-child(2) {
            top: 50%;
            transform: translate3d(0, -50%, 0);
            opacity: 1;
        }
        &:nth-child(3) {
            bottom: 0;
            width: calc(100% / 1.5);
        }
    }
}

</style>