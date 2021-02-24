<template lang="pug">
    .Navigation(:class="{ 'navbar--hidden': !showNavbar }")
        .container
            MobileNavigation
            .nav-logo
                router-link(to="/")
                    img(src="@/assets/img/logo.png", alt="")
            .nav-links
                router-link(v-for='item in links' v-bind:key='item.id' v-bind:to="item.link") {{ item.name }}
                router-link(to="/").search
                    app-icon(name='search' size='15')
                
            Dialogs
            UserProfile

</template>

<script>
import UserProfile from '@/components/Navigation/UserProfile.vue'
import Dialogs from '@/components/Navigation/Dialogs.vue'
import MobileNavigation from '@/components/Navigation/MobileNavigation.vue'

export default {
  name: 'Navigation',
  components: {
      UserProfile,
      Dialogs,
      MobileNavigation
  },

  data () {
      return {
        showNavbar: true,
        lastScrollPosition: 0,
        links: [
            {
                link: '/masters',
                name: 'Мастера'
            },
            {
                link: '/news',
                name: 'Новости'
            },
            {
                link: '/sketches',
                name: 'Эскизы'
            },
            {
                link: '/gallery',
                name: 'Галерея'
            },
            {
                link: '/articles',
                name: 'Статьи'
            },
            {
                link: '/styles',
                name: 'Стили'
            },
            {
                link: '/meanings',
                name: 'Значения'
            }
        ]
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

.Navigation .container {
    // @include flex-a_center;
    padding: 0.75em 20px;
    display: grid;
    grid-template-columns: max-content auto max-content max-content;
    grid-template-areas: "logo nav msg user";
    align-items: center;
    grid-column-gap: 10px;
    
    @include respond-to(small-medium-screens) {
        grid-template-columns: max-content max-content auto max-content max-content;
        grid-template-areas: "mobnav logo nav msg user";
    }

    @include respond-to(handlers) {
        padding: 0.75em 10px;
        grid-template-columns: max-content 5em auto max-content;
        grid-template-areas: "mobnav logo msg user";
        grid-column-gap: 5px;
    }
}

.nav-logo {
    grid-area: logo;
}

.nav-links {
    display: flex;
    justify-content: center;
    grid-area: nav;
    align-items: center;
    @include respond-to(medium-screens) {
        display: none;
    }
    > a {
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        margin: 0 1em;
        
        @include respond-to(large-screens) {
          margin: 0 auto;
        }

        &.router-link-exact-active {
            color: var(--pallete-pink);
            .icon {
                fill: var(--pallete-pink);
            }
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

.search {
    @include flex-ja_center;
    background-color: var(--pallete-transparent-bg);
    border-radius: 100%;
    width: 3em;
    height: 3em;
}



</style>