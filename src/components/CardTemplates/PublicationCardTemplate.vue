<template lang="pug">
    
    .CardTemplate(:class="{ Publish : data.status == 'Опубликовано', Moderation : data.status == 'На модерации', Deleted : data.status == 'Удалено', Canceled : data.status == 'Отклонено', Editable : data.editable }")
    
        .CardTemplate-Overlay
            .CardOptions
                CardOptionRequest(:value="data.request" v-if="data.request !== undefined")
                CardOptionUnpublish(v-if="data.optionUnpublish !== undefined")
                CardOptionPublish(v-if="data.optionPublish !== undefined")
                CardOptionReason(v-if="data.optionReason !== undefined")
                CardOptionDelete(v-if="data.optionDelete !== undefined")
                CardOptionTimeout(v-if="data.optionTimeout !== undefined")

            
        a.CardTemplate-Name(href="#") 
            app-icon(v-if="data.editable !== undefined" name="edit-alt" size="18")
            span {{ data.title }}

        .CardTemplate-Image
            img(:src="require('@/assets/img/photo/' + (index + 1) + '.jpg')")

        .CardTemplate-Meta
            .CardInfoViews(v-if="data.views !== undefined")
                app-icon(name="eye" size="12")
                span {{ data.views }}
            .CardInfoDate(v-if="data.date !== undefined")
                span {{ data.date }}
                
            .CardTemplate-Tag(v-if="data.tag !== undefined") {{ data.tag }}            

</template>

<script>
import CardOptionDelete from "@/components/CardTemplates/Options/CardOptionDelete.vue";
import CardOptionRequest from "@/components/CardTemplates/Options/CardOptionRequest.vue";
import CardOptionUnpublish from "@/components/CardTemplates/Options/CardOptionUnpublish.vue";
import CardOptionPublish from "@/components/CardTemplates/Options/CardOptionPublish.vue";
import CardOptionReason from "@/components/CardTemplates/Options/CardOptionReason.vue";
import CardOptionTimeout from "@/components/CardTemplates/Options/CardOptionTimeout.vue";


export default {
    components: {
        CardOptionDelete,
        CardOptionRequest,
        CardOptionUnpublish,
        CardOptionPublish,
        CardOptionReason,
        CardOptionTimeout,
    },
    props: {
        data: {
            type: Object
        },
        index: {
            type: Number
        }
    }
}
</script>

<style lang="scss" scoped>

.CardTemplate {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    height: 330px;
    &:hover {
        .CardInfoDate {
            bottom: 15px;
            opacity: 1;
            ~ .CardTemplate-Tag {
                opacity: 0;
            }
        }

        .CardOptions {
            top: 15px;
            opacity: 1;
        }

        .LightBox-Trigger {
            opacity: 1;
        }

        .CardTemplate-Overlay {
            &:after {
                opacity: 1;
                transform: translateY(0%);
            }
        }    
        
        .CardTemplate-Name {
            color: var(--palette-blue);
        }

        .CardTemplate-Tag {
            opacity: 1;
        }

        .CardInfoViews {
            top: 0px;
            opacity: 0;
        }

        &.Editable {
            .CardTemplate-Name {
                span {
                    transform: scale(0);
                    opacity: 0;
                }
                .icon {
                    opacity: 1;
                    transform: translateX(-50%) scale(1);
                }
            }
        }
    }

    &.Canceled,
    &.Deleted {
        .CardTemplate-Image {
            opacity: .25;
        }
    }

    

}



.CardTemplate-Overlay {
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
}

.CardTemplate-Image {
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}


.CardTemplate-Tag {
    position: absolute;
    z-index: 3;
    @include trans-ease-out;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    text-align: center;
}

.CardTemplate-Tag {
    bottom: 15px;
    text-transform: uppercase;
    border-radius: 4px;
    white-space: pre;
    font-size: 12px;
    font-weight: 700;
    background-color: var(--palette-pink);
    opacity: .5;
    padding: 0.25em .5em;
}

.CardInfoViews {
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0,0,0, .5);
    border-radius: 2px;
    padding: .25em .75em;
    color: var(--palette-white);
    display: flex;
    align-items: center;
    font-size: 12px;
    @include trans-ease-out;
    .icon {
        fill: var(--palette-white);
        margin-right: 5px;
    }
}

.CardInfoDate {
    position: absolute;
    bottom: -20px;
    background-color: rgba(0,0,0,.5);
    padding: .25em .5em;
    border-radius: 4px;
    color: var(--palette-white);
    font-size: 11px;
    display: flex;
    text-align: center;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
    @include trans-ease-out;
}

.CardOptions {
    @include trans-ease-out;
    position: absolute;
    z-index: 4;
    top: -100%;
    left: 15px;
    display: flex;
    opacity: 0;
    width: calc(100% - 30px);
    .CardOption { 
        &:not(:last-child) {
            margin-right: 5px;
            &.CardOptionRequest {
                margin-right: auto;
            }
        }
    }
}

.CardTemplate-Name {
    @include flex-ja_center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--palette-white);
    font-size: 13px;
    padding: 20px;
    span {
        transform: scale(1);
        opacity: 1;
        @include trans-ease-out;
    }

    .icon {
        fill: var(--palette-blue);
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scale(.1);
        @include trans-ease-out;
        opacity: 0;
    }
}

</style>