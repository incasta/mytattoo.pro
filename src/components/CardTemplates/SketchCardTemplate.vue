<template lang="pug">
    
    .TattooCardTemplate(:class="{ Publish : data.status == 'Опубликовано', Moderation : data.status == 'На модерации', Deleted : data.status == 'Удалено', Canceled : data.status == 'Отклонено',  }")
    
        .TattooCard-Overlay
            .CardOptions
                CardOptionInfo(v-if="data.status == 'На модерации'")
                CardOptionEdit(v-if="data.status == 'Опубликовано' || data.status == 'Отклонено'")
                CardOptionRepeat(v-if="data.status == 'Отклонено'")
                CardOptionDelete(v-if="data.status == 'Опубликовано'")
                

            LightBoxTrigger
        //- .TattooCard-Name

        .TattooCard-Image
            img(:src="require('@/assets/img/sketches/' + (index + 1) + '.jpg')")

        .TattooCard-Meta
            .CardInfoDate {{ data.date }}
            .TattooCard-Status(:class="{ Publish : data.status == 'Опубликовано', Moderation : data.status == 'На модерации', Deleted : data.status == 'Удалено', Canceled : data.status == 'Отклонено',  }") {{ data.status }}
                

</template>

<script>
import LightBoxTrigger from "@/components/common/LightBoxTrigger.vue";
import CardOptionInfo from "@/components/CardTemplates/Options/CardOptionInfo.vue";
import CardOptionEdit from "@/components/CardTemplates/Options/CardOptionEdit.vue";
import CardOptionRepeat from "@/components/CardTemplates/Options/CardOptionRepeat.vue";
import CardOptionDelete from "@/components/CardTemplates/Options/CardOptionDelete.vue";


export default {
    components: {
        LightBoxTrigger,
        CardOptionInfo,
        CardOptionEdit,
        CardOptionRepeat,
        CardOptionDelete,
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

.TattooCardTemplate {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    height: 330px;
    &:hover {
        .CardInfoDate {
            top: -20%;
            opacity: 0;
        }

        .CardOptions {
            top: 15px;
            opacity: 1;
        }

        .LightBox-Trigger {
            opacity: 1;
        }
    }

    &.Canceled,
    &.Deleted {
        .TattooCard-Image {
            opacity: .25;
        }
    }
}

.TattooCard-Status {
    position: absolute;
    z-index: 1;
    bottom: 0;
}

.TattooCard-Image {
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}


// .CardOptions {
//     position: absolute;
//     z-index: 3;
// }

.CardInfoDate,
.TattooCard-Status {
    position: absolute;
    z-index: 3;
    @include trans-ease-out;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    text-align: center;
}

.TattooCard-Status {
    bottom: 15px;
    text-transform: uppercase;
    border-radius: 4px;
    white-space: pre;
    font-size: 12px;
    font-weight: 700;
    background-color: rgba(0,0,0,.5);
    padding: 0.25em .5em;
    &.Publish {
        color: var(--palette-dark-regular);
        background-color: var(--palette-blue);
    }
    &.Moderation {
        color: var(--palette-blue);
    }
    &.Deleted {
        color: var(--palette-pink);
    }
    &.Canceled {
        color: var(--palette-pink);
    }
}

.CardInfoDate {
    top: 20px;
    background-color: rgba(0,0,0,.5);
    padding: .25em .5em;
    border-radius: 4px;
    color: var(--palette-white);
    font-size: 11px;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
}

.CardOptions {
    @include trans-ease-out;
    position: absolute;
    z-index: 4;
    top: -100%;
    right: 15px;
    display: flex;
    opacity: 0;
    .CardOption { 
        &:not(:last-child) {
            margin-right: 5px;
        }
    }
}

</style>