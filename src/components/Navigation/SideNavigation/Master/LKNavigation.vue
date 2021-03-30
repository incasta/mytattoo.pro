<template lang="pug">
    .SideNavigation
        ul.Section-Link-List
            li(v-for='link in links' :key='link.id')
                router-link.Section-Link(:to="link.link") {{ link.name }}
                .Anchor-List
                    a.Anchor-Link(v-for='anchor in link.anchors' :key='anchor.id' :href='anchor.link') {{ anchor.name }}
</template>

<script>

export default {
    name: 'LKNavigation',
    data () {
        return {
            links: [
                {
                    link: '/masterLK/my-profile',
                    name: 'Мой профиль',
                    anchors: [
                        {
                            link: '#',
                            name: 'Основная информация'
                        },
                        {
                            link: '#',
                            name: 'Мои услуги'
                        },
                        {
                            link: '#',
                            name: 'Мои стили'
                        },
                        {
                            link: '#',
                            name: 'Мой адрес'
                        },
                    ]
                },
                {
                    link: '/masterLK/messages',
                    name: 'Сообщения',
                    anchors: [
                        {
                            link: '#',
                            name: 'Диалоги'
                        },
                        {
                            link: '#',
                            name: 'Поддержка MYTATTOO.PRO'
                        },
                    ]
                },
                {
                    link: '/masterLK/my-photos',
                    name: 'Мои фотографии'
                },
                {
                    link: '/masterLK/my-sketches',
                    name: 'Мои эскизы'
                },
                {
                    link: '/masterLK/publics',
                    name: 'Объявления'
                },
                {
                    link: '/masterLK/feedbacks',
                    name: 'Отзывы'
                },
                {
                    link: '/masterLK/favorites',
                    name: 'Избранное'
                },
                {
                    link: '/masterLK/rating',
                    name: 'Рейтинг'
                },
                {
                    link: '/masterLK/balance-sub',
                    name: 'Баланс и подписка'
                },
            ],
        }
    },
}

</script>

<style lang="scss" scoped>

.SideNavigation {
    position: sticky;
    top: 100px;
    font-size: 13px;
    letter-spacing: .2ex;
    ul {
        list-style: none;
        padding: 0;
    }

    @include respond-to(large-screens) {
        width: 100%;
    }
    
}

.Section-Link-List {
    margin: 0;
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
        &.router-link-exact-active {
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
}



</style>