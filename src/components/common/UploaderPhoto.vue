<template lang="pug">
    
    .UploaderPhoto
        .UploadedPhoto-Area
            .UploadedPhoto(v-for="file in files" :key="file.id" )
                LightBoxTrigger
                a.RemoveUploadedFile(href="javascript:void(0);")
                    app-icon(name="cross-small" size="16")
                img(:src="require('@/assets/img/uploaded/user-01/' + file.img + '.jpg')")

        label.Upload-Area
            input(type="file" accept=".jpg, .jpeg, .png" multiple)
            span.AttachIcon
                app-icon(name="attach" size="20")
            span.AttachDesc
                span Нажмите на кнопку и выберите файлы
                span До 5 изображений в формате PNG, JPG


</template>

<script>
import LightBoxTrigger from "@/components/common/LightBoxTrigger.vue";

export default {
    data() {
        return {
            files: [
                {
                    img: "1",
                },
                {
                    img: "2",
                },
                {
                    img: "3",
                },
            ]
        }
    },
    components: {
        LightBoxTrigger,
    }
}
</script>


<style lang="scss" scoped>

.UploadedPhoto-Area {
    display: flex;
}

.UploadedPhoto {
    height: 80px;
    width: 80px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:not(:first-child) {
        margin-left: 5px;
    }

    &:hover {
        img {
            opacity: .4;
        }
    }
}

.RemoveUploadedFile {
    position: absolute;
    z-index: 2;
    right: 5px;
    top: 5px;
    @include flex-ja_center;
    cursor: pointer;
    background-color:rgba(0,0,0, .5);
    width: 26px;
    height: 26px;
    overflow: hidden;
    border-radius: 100%;
    @include trans-ease-out;
    .icon {
        fill: var(--palette-pink);
    }
    &:hover {
        background-color:rgba(0,0,0, .85);
    }
}

.Upload-Area {
    display: flex;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    input[type="file"] {
        opacity: 0;
        display: none;
    }

    .AttachIcon {
        border-radius: 100%;
        position: relative;
        background-color: rgba(0,0,0,.25);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 52px;
        height: 52px;
        cursor: pointer;
        .icon {
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            fill: var(--palette-light-icon);
            @include trans-ease-out;
        }
    }
    
    .AttachDesc {
        margin-left: 10px;
        span {
            display: block;
            &:nth-child(1) {
                text-transform: uppercase;
                font-weight: 700;
                color: var(--palette-blue);
                font-size: 14px;
            }
            &:nth-child(2) {
                font-size: 12px;
                opacity: 0.75;
            }
        }
    }
}

</style>