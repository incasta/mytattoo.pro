<template lang="pug">
    .Navigation(:class="{ 'navbar--hidden': !showNavbar }")
        .container
            MobileNavigation
            MainNavigation

</template>

<script>

import MobileNavigation from '@/components/Navigation/MobileNavigation.vue'
import MainNavigation from '@/components/Navigation/MainNavigation.vue'

export default {
  name: 'Navigation',
  components: {
      MobileNavigation,
      MainNavigation
  },

  data () {
      return {
        showNavbar: true,
        lastScrollPosition: 0,
      }
  },
  mounted () {
      window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
      onScroll () {
          // Get the current scroll position
          const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

          // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
          if (currentScrollPosition < 0) {
            return
          }

          // Stop executing this function if the difference between
          // current scroll position and last scroll position is less than some offset
          if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 300) {
              return
          }

          // Here we determine whether we need to show or hide the navbar
          this.showNavbar = currentScrollPosition < this.lastScrollPosition

          // Set the current scroll position as the last scroll position
          this.lastScrollPosition = currentScrollPosition

      }
  }
}


</script>

<style lang="scss" scoped>

.Navigation {
    @include trans-ease-in;
    background-color: rgba(0,0,0,.75);
    position: fixed;
    z-index: 99;
    width: 100%;
    top: 0;
    left: 0;
    &.navbar--hidden {
        transform: translate3d(0, -100%, 0);
        background-color: rgba(0,0,0,0);;
    }
}


</style>