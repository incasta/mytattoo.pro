2<template lang="pug">
    
    .Card-Template
        .Card-Overlay
            .Overlay-Details
                a.CardName(href="#")
                    div {{ title }}
            .Overlay-Top
                a.Favorite(href="#")
                    app-icon(name="bookmark-solid" size="12")
                .views
                    app-icon(name='eye' size="10")
                    span {{ views }}
                Author 
            .Overlay-Bottom
                .date 
                    span {{ date }}
                .tag 
                    span {{ tag }}
        .Card-Image
            img(:src="require('@/assets/img/articles/' + image)")

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
            default: "no-image.png"
        },
        title: {
            type: String, 
            required: true,
        },
        tag: {
            type: String, 
            required: true,
        },
        date: {
            type: String, 
            required: true,
        },
        views: {
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
    }
}

.Overlay-Details {
    @include flex-ja_center;
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
    &:hover {
        opacity: 1;
    }
}

.Author {
    transform: translateY(-200%);
    opacity: 0;
}

.Card-Template {
    &:hover {
        .Card-Overlay {
            .Overlay-Top {
                .Author {
                    transform: translateY(0);
                    opacity: 1;
                }
                // .Favorite {
                //     opacity: 1;
                // }
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
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    // display: flex;
    text-align: center;
}

.CardName {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
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


.date {
    font-size: 12px;
    margin: 10px 0;
    @include trans-ease-out;
    transform: translateY(-20%);
    opacity: 0;
    span {
        background-color: rgba(0,0,0, .5);
        padding: 0.3em .7em;
        border-radius: 4px;
    }
}

.tag {
    font-size: 12px;
    @include trans-ease-out;
    opacity: .5;
    span {
        background: var(--palette-pink);
        padding: 0.2em .5em;
        border-radius: 4px;
        text-transform: uppercase;
    }
}

</style>