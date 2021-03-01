<template lang="pug">

    .Navigation(:class="{ 'navbar--hidden': !showNavbar }")
        .container
            .MobileNavigation(:class='{ active }')
                .nav-mobile-navigation
                    .nav-links
                        router-link(v-for='item in links' :key='item.id' :to="item.link") {{ item.name }}
                        router-link(to='/search') Поиск
                .nav-mobile-overlay
        
            .MainNavigation
                .nav-mobile-burger(:class='{ active }' v-scroll-lock='active' @click=('active = !active'))
                    .burger-icon
                        span
                        span
                        span
                .nav-logo
                    router-link(to="/")
                        img(src="@/assets/img/logo.png", alt="")
                .nav-links
                    router-link(v-for='item in links' :key='item.id' class='hover-effect-glitch' :to="item.link" :data-text='item.name') {{ item.name }}
                    router-link(to="/").search
                        app-icon(name='search' size='15')

                Dialogs
                UserProfile

</template>

<script>

import UserProfile from '@/components/Navigation/MainNavigation/UserProfile.vue'
import Dialogs from '@/components/Navigation/MainNavigation/Dialogs.vue'

export default {
  name: 'Navigation',
  components: {
        Dialogs,
        UserProfile,
  },

  data () {
      return {
        active: false,
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
            ],
      }
  },
  mounted () {
      window.addEventListener('scroll', this.onScroll);
      document.addEventListener('click', this.closeMobNav);
  },
  beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll);
      document.removeEventListener('click', this.closeMobNav);
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

      },

  },

  watch: {
      $route () {
          this.active = false;
      }
  }
}


</script>

<style lang="scss" scoped>

.Navigation {
    @include trans-ease-in;
    // background-color: rgba(0,0,0,.75);
    background-color: rgba(0,0,0,.5);
    position: fixed;
    z-index: 9998;
    width: 100%;
    top: 0;
    left: 0;
    &.navbar--hidden {
        transform: translate3d(0, -100%, 0);
        background-color: rgba(0,0,0,0);;
    }
}

.MobileNavigation {
    @include respond-to(wide-screens) {
        display: none;
    }

    position: fixed;
    z-index: 98;
    left: 0;
    width: 100%;
    height: 0%;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    opacity: 1;
    &.active {
        height: calc(100% - 65px - 1em);
        .nav-mobile-overlay {
            opacity: 1;
            height: 100%;
        }
    }

    .nav-mobile-navigation {
        overflow: hidden auto;
        height: 100%;
        position: relative;
        z-index: 2;
    }

    .nav-links {
        flex-direction: column;
        a {
            margin: 0;
            margin-bottom: 2px;
            padding: 1.25em 0;
            width: 100%;
            background: linear-gradient(90deg,transparent,rgba(0,0,0,.7) 49.48%,transparent);
            transform: translate3d(0, -100%, 0);
        }
    }

    .nav-mobile-overlay {
        @include trans-ease-out;
        transition-duration: .5s;
        backdrop-filter: blur(8px);
        background: linear-gradient(90deg,rgba(18,18,18,.56471) 40%,rgba(1,1,1,0));
        position: fixed;
        z-index: 1;
        width: 100%;
        // height: 100%;
        height: 0%;
        top: 0;
        left: 0;
        opacity: 0;
    }
}

// @for $i from 1 through 3 {
//   .UserProfile-links a:nth-child(#{$i}) {
//     transform: translate3d(0, $translateY + $i * -110, 0);
//     opacity: 0;
//   }
// }

$translateY: 0%;

@for $i from 8 through 1 {
    .MobileNavigation .nav-links a:nth-child(9n - #{$i}) {
        transform: translate3d(0, $translateY + $i * -10, 0);
        opacity: 0;
        // transition-duration: $i * .025s;
    }
}

.MobileNavigation {
    &.active {
        .nav-links a {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
    }
} 



.MainNavigation {
    padding: 0.75em 20px;
    display: grid;
    grid-template-columns: max-content auto max-content max-content;
    grid-template-areas: "logo nav msg user";
    align-items: center;
    grid-column-gap: 10px;
    position: relative;
    z-index: 99;
    
    @include respond-to(small-medium-screens) {
        grid-template-columns: max-content max-content auto max-content;
        grid-template-areas: "burger logo msg user";
    }

    @include respond-to(handlers) {
        padding: 0.75em 0px;
        grid-template-columns: max-content 5em auto max-content;
        grid-template-areas: "burger logo msg user";
        grid-column-gap: 5px;
    }

    .nav-links {
        @include respond-to(medium-screens) {
            display: none;
        }
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
    // background-color: var(--pallete-transparent-bg);
    background-color: var(--pallete-dark-regular);
    border-radius: 100%;
    width: 3em;
    height: 3em;
}

.nav-mobile-burger {

    @include respond-to(wide-screens) {
        display: none;
    }

    @include flex-ja_center;
    width: 32px;
    height: 25px;
    grid-area: burger;
    position: relative;
    z-index: 5;

    &.active {
        span {
            &:nth-child(1) {
                transform: translate3d(0%, -50%, 0) rotate(-45deg);
                top: calc(25% + 1px);
                width: 50%;
            }
            &:nth-child(2) {
                opacity: 0;
                width: 0px;
            }
            &:nth-child(3) {
                width: 50%;
                top: calc(75% + 0px);
                transform: translate3d(0%, -50%, 0) rotate(45deg);
            }
        }
    }
}

.burger-icon {
    position: absolute;
    height: 19px;
    width: 28px;
    span {
        @include trans-ease-in;
        width: 100%;
        height: 2px;
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
            opacity: 1;
        }
        &:nth-child(3) {
            top: 100%;
            transform: scaleX(.5) translate3d(-50%, 0, 0);
        }
    }
}



</style>