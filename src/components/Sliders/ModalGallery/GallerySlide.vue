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
                        app-icon(name="edit-alt" size="14")
            .Gallery-Details-Author
                div Вергунов
                div *****
            
        div.hidden {{ data }}

</template>

<script>
export default {
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
}

.Edit {
    background-color: var(--palette-transparent-bg);
    border-radius: 100%;
    overflow: hidden;
    width: 40px;
    height: 40px;
    @include flex-ja_center;
}

.Gallery-Details-Author {
    padding: 20px;
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
}

</style>