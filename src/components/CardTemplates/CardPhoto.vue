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
        .Card-Image
            img(:src="require('@/assets/img/photo/' + image)")

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
        }
    },


}
</script>

<style lang="scss" scoped>

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
    z-index: 4;
    opacity: 1;
    width: 100%;
    height: 100%;
}

.CardDetails {
    @include trans-ease-out;
    transform: scale(0);
    opacity: 0;
    @include flex-ja_center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    opacity: 1;
    .icon {
        fill: var(--palette-blue);
    }
}

.Overlay-Top {
    position: relative;
    z-index: 10;
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
    &:hover {
        opacity: 1;
    }
}

.Author {
    transform: translateY(-200%);
    opacity: 0;
}


.Card-Template {
    height: 230px;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
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
    }
}

</style>