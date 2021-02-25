<template lang="pug">
    .MobileNavigation(:class='{ active }')
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
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
}


</style>