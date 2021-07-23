<template lang="pug">
    .SideNavigation
        ul.Section-Link-List
            li(v-for='link in links' :key='link.id')
                router-link.Section-Link(:to="link.link") {{ link.name }}
                slot(name="ExtraAction")
                    router-link.ExtraAction(v-if="link.extra" :to="link.extra")
                        app-icon(name="settings-alt" size="24")

</template>

<script>

export default {
    name: 'SideNavigation',
    data () {
        return {
            links: [
                {
                    link: '/registration/registration-master/step1',
                    name: 'Я тату-мастер',
                },
                {
                    link: '/registration/registration-user/step1',
                    name: 'Я ищу тату-мастера',
                },
            ],
        }
    },
}

</script>

<style lang="scss" scoped>

@include splideCustomStyles;

.SideNavigation {
    @include trans-ease-in;
    position: sticky;
    // top: 100px;
    // top: 20px;
    font-size: 13px;
    letter-spacing: .2ex;
    z-index: 9;
    
    ul {
        list-style: none;
        padding: 0;
    }

    @include respond-to(large-screens) {
        width: 100%;
        position: relative;
        top: 0;
        margin-bottom: 30px;
    }
    
}

.Section-Link-List {
    margin: 0;
    background-color: var(--palette-dark-regular);
    > li {
        &:not(:last-child) {
            margin-bottom: 1px;
        }
    }
    .Section-Link {
        display: block;
        padding: 15px 20px;
        text-align: left;
        background-color: var(--palette-dark-light);
        color: var(--palette-white);
        text-decoration: none;
        position: relative;
        // margin-bottom: 1px;
        overflow: hidden;
        border-radius: 2px;
        font-weight: 600;
        &:before {
            content: '';
            @include trans-ease-in;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 4px;
            background-color: var(--palette-dark-semilight);
        }
        &.router-link-exact-active,
        &.router-link-active {
            color: var(--palette-blue);
            text-shadow: 0 0 5px var(--palette-blue);
            &:before {
                background-color: var(--palette-blue);
            }

            ~ .Anchor-List {
                // display: block;
                max-height: 300px;
                opacity: 1;
            }
        }
    }
}

.Anchor-List {
    .Anchor-Link {
        display: block;
        padding: 15px 20px;
        text-align: left;
        font-weight: 400;
        border-radius: 2px;
        background-color: #09121C;
        text-decoration: none;
        color: #fff;
        &.active, &.router-link-exact-active {
            background-color: #080D12;
            color: var(--palette-blue);
        }
    }
}

.Anchor-List {
    transition: opacity .3s ease, max-height .3s ease;
    opacity: 0;
    max-height: 0px;
    overflow: hidden;
}

// Extra Side Panels

.Side-Panel {
    margin-top: 20px;
}

.Side-Panel-Header {
    @include flex-ja_center;
    border-radius: 2px;
    padding: 15px 10px;
    position: relative;
    overflow: hidden;
    background-color: var(--palette-dark-light);
    h2 {
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 700;
    }
    &:before {
        content: '';
        transition-property: all;
        transition-duration: .15s;
        transition-timing-function: ease-in;
        transition-delay: 0s;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 4px;
        background-color: var(--palette-blue);
    }
}

.Side-Panel-Content {
    background-color: var(--palette-dark-regular);
    padding: 20px;
}

.ExtraAction {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    height: 50px;
    width: 50px;
    @include flex-ja_center;
    background-color: rgba(0,0,0,.15);

    &.router-link-exact-active {
        background-color: rgba(255,255,255,.03);
        .icon {
            fill: var(--palette-blue);
        }
    }
    .icon {
        fill: var(--palette-blue);
        @include trans-ease-out;
    }

    &:hover {
        .icon {
            filter: drop-shadow(0 0 10px var(--palette-blue));
        }
    }
}

</style>