<template lang="pug">
    
    .Card-Template
        .Card-Overlay
            .Overlay-Details
                a.CardDetails(href="javascript:void(0);")
                    app-icon(name="zoom-in" size="20")
            .Overlay-Top
                a.Favorite(href="#")
                    app-icon(name="bookmark-solid" size="12")
                Author 
            .Overlay-Bottom
                .Price.money
                    span.value {{ price }} 
                    span.currency ₽
        .Card-Image
            img(:src="require('@/assets/img/sketches/' + image)")

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
        price: {
            type: String,
            required: true,
        }
    },


}
</script>

<style lang="scss" scoped>

.Card-Template {
    height: 230px;
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
    cursor: pointer;
    &:after {
        content: '';
        background: linear-gradient(180deg, rgba(3, 2, 26, 0) 0%, rgba(3, 2, 26, 0.85) 100%);
        transition: all .3s ease;
        transform: translateY(50%);
        opacity: 0;
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
    z-index: 99;
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
                .Favorite {
                    opacity: 1;
                }
            }
            .Price {
                background-color: rgba(0,0,0, .8);
            }
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
    display: flex;
    .Price {
        @include trans-ease-out;
        margin-left: auto;
        background-color: rgba(0,0,0, .4);
        padding: .25em .5em;
        border-radius: 4px;
    }
}

.currency {
    margin-left: 5px;
}

.money {
    color: var(--palette-green);
    font-weight: 700;
    font-size: 12px;
}
</style>