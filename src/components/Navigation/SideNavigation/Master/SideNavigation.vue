<template lang="pug">
    .SideNavigation
        ul.Section-Link-List
            li(v-for='link in links' :key='link.id')
                router-link.Section-Link(:to="link.link") {{ link.name }}
                slot(name="ExtraAction")
                    router-link.ExtraAction(v-if="link.extra" :to="link.extra")
                        app-icon(name="settings-alt" size="24")

                        
                .Anchor-List
                    slot(name="ActionButtons")
                    router-link.Anchor-Link(v-for='anchor in link.anchors' :key='anchor.id' :to='anchor.link') {{ anchor.name }}
        slot(name="panel") 


</template>

<script>

export default {
    name: 'SideNavigation',
    data () {
        return {
            links: [
                {
                    link: '/masterLK/my-profile',
                    name: 'Мой профиль',
                    extra: '/masterLK/my-settings',
                    anchors: [
                        {
                            link: '#section-1',
                            name: '# Основная информация'
                        },
                        {
                            link: '#section-2',
                            name: '# Мои услуги'
                        },
                        {
                            link: '#section-3',
                            name: '# Мои стили'
                        },
                        {
                            link: '#section-4',
                            name: '# Мой адрес'
                        },
                    ]
                },
                {
                    link: '/masterLK/messages',
                    name: 'Сообщения',
                    anchors: [
                        {
                            link: '/masterLK/messages/inbox',
                            name: 'Диалоги'
                        },
                        {
                            link: '/masterLK/messages/support',
                            name: 'Поддержка MYTATTOO.PRO'
                        },
                    ]
                },
                {
                    link: '/masterLK/my-tattoo',
                    name: 'Мои татуировки',
                    anchors: [
                        {
                            link: '/masterLK/my-tattoo/all-tattoo',
                            name: 'Все татуировки'
                        },
                        {
                            link: '/masterLK/my-tattoo/publish-tattoo',
                            name: 'Опубликованные'
                        },
                        {
                            link: '/masterLK/my-tattoo/moderation-tattoo',
                            name: 'На модерации'
                        },
                        {
                            link: '/masterLK/my-tattoo/canceled-tattoo',
                            name: 'Отклоненные'
                        },
                        {
                            link: '/masterLK/my-tattoo/deleted-tattoo',
                            name: 'Удаленные'
                        },
                    ]
                },
                {
                    link: '/masterLK/my-sketches',
                    name: 'Мои эскизы',
                    anchors: [
                        {
                            link: '/masterLK/my-sketches/all-sketch',
                            name: 'Все эскизы'
                        },
                        {
                            link: '/masterLK/my-sketches/publish-sketch',
                            name: 'Опубликованные'
                        },
                        {
                            link: '/masterLK/my-sketches/moderation-sketch',
                            name: 'На модерации'
                        },
                        {
                            link: '/masterLK/my-sketches/canceled-sketch',
                            name: 'Отклоненные'
                        },
                        {
                            link: '/masterLK/my-sketches/deleted-sketch',
                            name: 'Удаленные'
                        },
                    ]
                },
                {
                    link: '/masterLK/my-publications',
                    name: 'Мои объявления',
                    anchors: [
                        {
                            link: '/masterLK/my-publications/published',
                            name: 'Опубликованные'
                        },
                        {
                            link: '/masterLK/my-publications/drafts',
                            name: 'Черновики'
                        },
                        {
                            link: '/masterLK/my-publications/moderation',
                            name: 'На модерации'
                        },
                        {
                            link: '/masterLK/my-publications/canceled',
                            name: 'Отклоненные'
                        },
                    ]
                },
                {
                    link: '/masterLK/feedbacks',
                    name: 'Отзывы',
                    anchors: [
                        {
                            link: '/masterLK/feedbacks/all-feedbacks',
                            name: 'Все отзывы'
                        },
                        {
                            link: '/masterLK/feedbacks/positive-feedbacks',
                            name: 'Положительные'
                        },
                        {
                            link: '/masterLK/feedbacks/negative-feedbacks',
                            name: 'Отрицательные'
                        },
                    ]
                },
                {
                    link: '/masterLK/favorites',
                    name: 'Избранное',
                    anchors: [
                        {
                            link: '/masterLK/favorites/photo',
                            name: 'Фотографии'
                        },
                        {
                            link: '/masterLK/favorites/sketches',
                            name: 'Эскизы'
                        },
                        {
                            link: '/masterLK/favorites/ads',
                            name: 'Объявления'
                        },
                        {
                            link: '/masterLK/favorites/articles',
                            name: 'Статьи'
                        },
                        {
                            link: '/masterLK/favorites/masters',
                            name: 'Мастера'
                        },
                    ],
                },
                {
                    link: '/masterLK/rating',
                    name: 'Рейтинг',
                    anchors: [
                        {
                            link: '/masterLK/rating/my-rating',
                            name: 'Мой рейтинг'
                        },
                        {
                            link: '/masterLK/rating/my-charts',
                            name: 'Мои чарты'
                        },
                        {
                            link: '/masterLK/rating/my-reposts',
                            name: 'Мои репосты'
                        },
                    ]
                },
                {
                    link: '/masterLK/balance-sub',
                    name: 'Баланс и подписка',
                    anchors: [
                        {
                            link: '/masterLK/balance-sub/my-balance',
                            name: 'Мой баланс'
                        },
                        {
                            link: '/masterLK/balance-sub/my-subscribe',
                            name: 'Моя подписка'
                        },
                    ]
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
    top: 20px;
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