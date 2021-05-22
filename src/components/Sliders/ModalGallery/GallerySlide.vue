<template lang="pug">
    
    .GallerySlide
        .Gallery-Image
            img(:src="require('@/assets/img/photo/' + (index + 1) + '.jpg')")
            a.MaximiseImage(href="#")
                app-icon(name="maximise" size="26")
        .Gallery-Details
            .Gallery-Details-Header
                .Gallery-Counter
                    span Фотография {{ index + 1 }} из {{ slides }}
                .Gallery-Edit
                    a.Edit(href="#")
                        app-icon(name="edit-alt" size="12")
            .Gallery-Details-Author
                Author()
                a.authorName(href="#") {{ data.authorName }}
                StarRating(:small="true" value="4.5")
            .Gallery-Details-Options
                .Gallery-Option(v-if="data.price !== undefined")
                    span.Gallery-Option-Name Цена: 
                    span.Gallery-Option-Value.money {{ data.price }} ₽
                        Tooltip(content="Цена указана за 1 сеанс")

                .Gallery-Option(v-if="data.sex !== undefined")
                    span.Gallery-Option-Name Для кого: 
                    span.Gallery-Option-Value {{ data.sex }}

                .Gallery-Option(v-if="data.palette !== undefined")
                    span.Gallery-Option-Name Цвет татуировки: 
                    span.Gallery-Option-Value {{ data.palette }}

                .Gallery-Option(v-if="data.timeCost !== undefined")
                    span.Gallery-Option-Name Потрачено: 
                    span.Gallery-Option-Value {{ data.timeCost }}

                .Gallery-Option(v-if="data.canDoIt !== undefined")
                    span.Gallery-Option-Value.canDoIt(v-if="data.canDoIt")
                        app-icon.blue(name="work" size="18")
                        span Мастер может набить этот эскиз 
                        Tooltip(content="Мастер сможет набить тату согласно данному эскизу, в указанных стилях")
                    span.Gallery-Option-Value.canDoIt(v-if="!data.canDoIt")
                        app-icon.blue(name="work" size="18")
                        span Мастер не может набить этот эскиз
                        Tooltip(content="Мастер не сможет набить тату согласно данному эскизу. Если Вам понравился эскиз, а мастер не готов реализовать сопутствующую услугу - набить тату согласно эскизу, то рекомендуем сперва приобрести эскиз у данного автора, а далее найти другого специалиста для его реализации.")

            .Gallery-Details-location
                app-icon(name="location" size="24")
                span {{ data.location }}
            .Gallery-Details-Footer
                .Gallery-Tag-List
                    .tagPlaces(v-for="tag in data.tagPlaces" :key="tag.id") {{ tag.tag }}
                .Gallery-Tag-List
                    .tagStyles(v-for="tag in data.tagStyles" :key="tag.id") {{ tag.tag }}

        div.hidden {{ data }}

</template>

<script>
import StarRating from "@/components/common/StarRating.vue";
import Author from "@/components/common/Author.vue";
import Tooltip from "@/components/common/Tooltip.vue";

export default {
    components: {
      StarRating,  
      Author,
      Tooltip,
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
        slides: {
            type: Number,
            required: true,
        },
        index: {
            type: Number,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>


.GallerySlide {
    display: flex;
    width: 100%;
    height: 100%;

    @include respond-to(large-screens) {
        .Gallery-Image {
            flex-shrink: 1;
        }
        .Gallery-Details {
            flex-shrink: 0;
            width: 320px;
        }
    }

    @include respond-to(tablets-screens) {
        display: block;

        .Gallery-Image {
            width: 100%;
            height: 50%;
        }
        .Gallery-Details {
            width: 100%;
            overflow-y: auto;
            max-height: 50%;
            .Gallery-Details-Header {
                position: sticky;
                top: 0;
                z-index: 10;
            }
        }
    }
    
    @include respond-to(handlers) {
        .Gallery-Details-Header,
        .Gallery-Details-Author,
        .Gallery-Details-Options,
        .Gallery-Details-location,
        .Gallery-Details-Footer {
            padding-left: 10px;
            padding-right: 10px;
        }
    }
}

.Gallery-Image {
    width: 775px;
    flex-shrink: 0;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.Gallery-Details {
    flex-grow: 1;
    display: grid;
    grid-template-areas: "header" "author" "options" "location" "footer";
    grid-template-rows: min-content min-content min-content auto min-content;

    @include respond-to(large-screens) {
        
    }
}

.Gallery-Details-Header {
    background-color: var(--palette-dark-light);
    padding: 10px 20px;
    display: flex;
    align-items: center;
}

.Gallery-Counter {
    text-transform: uppercase;
    margin-right: auto;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.1ex;
    padding: 10px 0;
}

.Edit {
    background-color: var(--palette-transparent-bg);
    border-radius: 100%;
    overflow: hidden;
    width: 32px;
    height: 32px;
    @include flex-ja_center;
}


.MaximiseImage {
    background-color: var(--palette-transparent-bg);
    @include flex-ja_center;
    @include trans-ease-out;
    position: absolute;
    z-index: 99;
    right: 20px;
    bottom: 20px;
    padding: 10px;
    border-radius: 4px;
    &:hover {
        background-color: rgba(0,0,0,.5);
    }

    @include respond-to(tablets-screens) {
        right: 10px;
        bottom: 10px;
    }
}

.Gallery-Details-Author {
    display: grid;
    grid-template-areas: "ava name" "ava rating";
    grid-template-columns: min-content auto;
    grid-template-rows: auto auto;
    column-gap: 15px;
    padding: 20px;
    position: relative;
    &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(100%);
        content: "";
        display: block;
        height: 1px;
        width: 100%;
        background-color: #fff;
        opacity: .1;
    }
    .authorName {
        grid-area: name;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: .1ex;
        text-decoration: none;
        color: #fff;
    }
    .Author {
        grid-area: ava;
    }
    .userRating_Stars {
        grid-area: rating;
    }
}

.Gallery-Details-Options {
    padding: 20px;
    font-weight: 700;
    letter-spacing: .1ex;
    font-size: 14px;
    text-transform: uppercase;
}

.Gallery-Option {
    &:not(:first-child) {
        margin-top: 15px;
    }
}

.Gallery-Option-Name {
    color: var(--palette-blue);
}

.Gallery-Option-Value {
    display: inline-flex;
    align-items: center;
    &.money {
        color: var(--palette-green);
        text-shadow: 0 0 5px var(--palette-green);
    }
    &.canDoIt {
        color: var(--palette-blue);
        .icon.blue {
            fill: var(--palette-blue);
            margin-right: 10px;
        }
    }
}

.Gallery-Details-location {
    padding: 20px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: var(--palette-yellow);
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    .icon {
        margin-right: 10px;
    }
}

.Gallery-Details-Footer {
    padding: 30px 20px;
    position: relative;
    &:before {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(100%);
        content: "";
        display: block;
        height: 1px;
        width: 100%;
        background-color: #fff;
        opacity: .1;
    }
}

.Gallery-Tag-List {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
}

.tagPlaces {
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    color: var(--palette-blue);
    font-size: 13px;
    letter-spacing: .1ex;
    &:not(:last-child) {
        margin-right: 5px;
    }
    &:before {
        content: '#';
    }
}

.tagStyles {
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    color: var(--palette-pink);
    font-weight: 700;
    font-size: 13px;
    letter-spacing: .1ex;
    padding: 0.2em .65em;
    background-color: var(--palette-dark-regular);
    &:not(:last-child) {
        margin-right: 5px;
    }
}

</style>