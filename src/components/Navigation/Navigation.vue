<template lang="pug">
    .Navigation(:class="{ 'navbar--hidden': !showNavbar }")
        .container
            .nav-logo
                router-link(to="/")
                   img(src="@/assets/img/logo.png", alt="")
            .nav-links
                router-link(to="/masters") Мастера 
                router-link(to="/news") Новости
                router-link(to="/sketches") Эскизы 
                router-link(to="/gallery") Галерея 
                router-link(to="/articles") Статьи 
                router-link(to="/styles") Стили
                router-link(to="/meanings") Значения
                router-link(to="/meanings") Test
            Dialogs
            UserProfile

</template>

<script>
import UserProfile from '@/components/Navigation/UserProfile.vue'
import Dialogs from '@/components/Navigation/Dialogs.vue'

export default {
  name: 'Navigation',
  components: {
      UserProfile,
      Dialogs,
  },
  data () {
      return {
        showNavbar: true,
        lastScrollPosition: 0
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
    background-color: rgba(0,0,0,75);
    position: fixed;
    z-index: 99;
    width: 100%;
    &.navbar--hidden {
        transform: translate3d(0, -100%, 0);
        background-color: rgba(0,0,0,0);;
    }
}

.Navigation .container {
    @include flex-a_center;
    padding: 0.75em 0;
}

.nav-logo {
    width: 120px;
}

.nav-links {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    > a {
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        
        &:not(:last-child) {
            margin-right: 40px;
        }

        &.router-link-exact-active {
            color: var(--pallete-pink)
        }
        
    }

    &:hover {
        a {
            opacity: .7;
            &:hover {
                opacity: 1;
            }

        }
    }
}


</style>