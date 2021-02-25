<template lang="pug">

    .MainNavigation
        .nav-mobile-burger(@click='active = !active')
            .burger-icon
                span
                span
                span
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
import UserProfile from '@/components/Navigation/MainNavigation/UserProfile.vue'
import Dialogs from '@/components/Navigation/MainNavigation/Dialogs.vue'

export default {
    name: 'MainNavigation',
    components: {
        Dialogs,
        UserProfile,
    },

    data () {
        return {
            active: false,
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
    }
}
</script>


<style lang="scss" scoped>

.MainNavigation {
    padding: 0.75em 20px;
    display: grid;
    grid-template-columns: max-content auto max-content max-content;
    grid-template-areas: "logo nav msg user";
    align-items: center;
    grid-column-gap: 10px;
    
    @include respond-to(small-medium-screens) {
        grid-template-columns: max-content max-content auto max-content;
        grid-template-areas: "mobnav logo msg user";
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
