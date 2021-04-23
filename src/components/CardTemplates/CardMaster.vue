2<template lang="pug">
    
    .Card-Template
        .Card-Overlay
            .Overlay-Details
                a.CardName(href="#")
                    .name {{ name }}
                    .nickname {{ nickname }}

            .Overlay-Top
                a.Favorite(href="#")
                    app-icon(name="bookmark-solid" size="12")
                .proStatus
                    .pro.top-1 PRO
            .Overlay-Bottom
                .Smart-Panel
                    a(href="#" content="Работы мастера" v-tippy="{ delay: [400, 300], arrow : true, arrowType : 'round', theme: 'custom',}").Smart-Panel-Option
                        app-icon(name="work" size="24")
                        .counter
                            span.value 213 
                            //- span работ
                    a(href="#" content="Эскизы мастера" v-tippy="{ delay: [400, 300], arrow : true, arrowType : 'round', theme: 'custom',}").Smart-Panel-Option
                        app-icon(name="sketch" size="24")
                        .counter
                            span.value 4 
                            //- span эскизов
                    a(href="#" content="Объявления мастера" v-tippy="{ delay: [400, 300], arrow : true, arrowType : 'round', theme: 'custom',}").Smart-Panel-Option
                        app-icon(name="ad" size="24")
                        .counter
                            span.value 9 
                            //- span новостей
                    a(href="#" content="Отзывы мастера" v-tippy="{ delay: [400, 300], arrow : true, arrowType : 'round', theme: 'custom',}").Smart-Panel-Option
                        app-icon.pink(name="feedback" size="24")
                        .counter
                            span.value 3123 
                            //- span отзывов

        .Card-Image
            img(:src="require('@/assets/img/masters/' + image)")

</template>

<script>
import Author from "@/components/common/Author.vue";

export default {
    components: {
        Author,
    },
    props: {
        image: {
            type: String, 
            required: false,
            default: "no-image.jpg"
        },
        name: {
            type: String, 
            required: true,
        },
        nickname: {
            type: String, 
            required: true,
        },
    },


}
</script>

<style lang="scss" scoped>

.Card-Template {
    height: 320px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}


.Card-Image {
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.Card-Overlay {
    @include trans-ease-out;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // cursor: pointer;
    &:after {
        content: '';
        background: linear-gradient(180deg, rgba(3, 2, 26, 0.57) 0%, rgba(3, 2, 26, 0.85) 73.96%);
        transition: all .3s ease;
        opacity: .85;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }
    &:hover {
        &:after {
            opacity: 1;
            transform: translateY(0%);
        }
        .CardDetails {
            opacity: 1;
            transform: scale(1);
        }
        .Overlay-Bottom {
            transform: translateY(0);
        }
        .CardName {
            height: 75%;
        }
    }
    @include respond-to (tablets-screens) {
        &:after {
            opacity: 1;
            transform: translateY(0%);
        }
        .CardDetails {
            opacity: 1;
            transform: scale(1);
        }
        .Overlay-Bottom {
            transform: translateY(0);
        }
        .CardName {
            height: 75%;
        }
    }
}

.Overlay-Details {
    // @include flex-ja_center;
    position: absolute;
    z-index: 4;
    opacity: 1;
    width: 100%;
    height: 100%;
}

.CardDetails {
    @include trans-ease-out;
    transform: scale(0);
    opacity: 0;
    .icon {
        fill: var(--palette-blue);
    }
}

.Overlay-Top {
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    z-index: 20;
}

.Favorite {
    @include flex-ja_center;
    border-radius: 100%;
    width: 36px;
    height: 36px;
    background-color: rgba(0,0,0, .5);
    opacity: .5;
    .icon {
        fill: var(--palette-pink);
    }
}

.Card-Template {
    &:hover {
        .Card-Overlay {
            .Overlay-Top {
                .Author {
                    transform: translateY(0);
                    opacity: 1;
                }
                .Favorite {
                    opacity: 1;
                }
            }
        }
        .views,
        .tag,
        .date {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @include respond-to (tablets-screens) {
        .Card-Overlay {
            .Overlay-Top {
                .Author {
                    transform: translateY(0);
                    opacity: 1;
                }
                .Favorite {
                    opacity: 1;
                }
            }
        }
        .views,
        .tag,
        .date {
            opacity: 1;
            transform: translateY(0);
        }
    }
}

.Overlay-Bottom {
    @include trans-ease-out;
    position: absolute;
    z-index: 25;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    // display: flex;
    text-align: center;
    transform: translateY(100%);
    border-top: 1px solid var(--palette-dark-lighter);
}

.Smart-Panel {
    display: flex;
    align-items: center;
    width: 100%;
}

.Smart-Panel-Option {
    flex: 1 1 0;
    text-decoration: none;
    color: var(--palette-blue);
    .icon {
        fill: var(--palette-blue);
        &.pink {
            fill: var(--palette-pink);
            & + .counter {
                color: var(--palette-pink);
            }
        }
    }

    .counter {
        font-size: 11px;
        text-transform: uppercase;
        // display: none;
        font-weight: 700;

    }
}

.CardName {
    @include trans-ease-out;
    display: flex;
    width: 100%;
    // height: 75%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    align-content: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 13px;
    color: #fff;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    position: relative;
    z-index: 4;
    &:hover{
        color: var(--palette-blue);
    }
    
    .nickname {
        color: var(--palette-blue);
        opacity: .5;
        &:before {
            content: '‘’';
        }
        &:after {
            content: '’’';
        }
    }
}

.views {
    @include trans-ease-out;
    opacity: 0;
    transform: translateY(-20%);
    border-radius: 4px;
    background-color: rgba(0,0,0, .5);
    padding: .2em .7em;
    font-size: 12px;
    display: flex;
    align-items: center;
    .icon {
        margin-right: 5px;
    }
}


.proStatus {
    pointer-events: none;
    .pro {
        pointer-events: none;
        user-select: none;
        font-weight: 700;
        background-color: var(--palette-yellow);
        color: var(--palette-black-bg);
        font-size: 12px;
        padding: .15em .5em;
        border-radius: 100px;
        box-shadow: 0 0 8px var(--palette-yellow);
    }
}



</style>