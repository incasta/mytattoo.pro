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

    &.active {
        .nav-mobile-burger {
            span {
                &:nth-child(1) {
                    transform: translate3d(0%, -50%, 0) rotate(-45deg);
                    top: calc(25% + .5px);
                    width: 50%;
                }
                &:nth-child(2) {
                    opacity: 0;
                    width: 0px;
                }
                &:nth-child(3) {
                    width: 50%;
                    top: calc(75% + .5px);
                    transform: translate3d(0%, -50%, 0) rotate(45deg);
                }
            }
        }

        .nav-mobile-navigation {
            // 
        }
    }
}

.nav-mobile-navigation {
    position: fixed;
    // z-index: 98;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
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
    height: 19px;
    width: 28px;
    span {
        @include trans-ease-in;
        width: 100%;
        height: 3px;
        background-color: var(--pallete-pink);
        display: block;
        position: absolute;
        z-index: 1;
        border-radius: 2px;
        left: 0%;

        &:nth-child(1) {
            top: 0;
        }
        &:nth-child(2) {
            top: 50%;
            // transform: translate3d(0, -50%, 0);
            opacity: 1;
        }
        &:nth-child(3) {
            top: 100%;
            // width: calc(100% / 1.5);
            transform: scaleX(.5) translate3d(-50%, 0, 0);
            // width: 50%;
        }
    }
}

</style>