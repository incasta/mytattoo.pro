<template lang="pug">
    
    main
        CurrentLocation
        .container
            .Row
                .SideBar
                    SideNavigation
                .Main
                    .content
                        .Page-Block
                            .Page-Block-Header
                                h2 Оставить отзыв о мастере
                            .Page-Block-Content
                                .Page-Block-Navigation
                                    ButtonBack(text="Отзывы мастера" icon="arrow-small-left")
                                    DropdownLarge(:options="options")
                                Hr
                                Advices
                                Hr
                                .Page-Block-Section
                                    .Section-subTitle Оцените работу мастера *
                                    MarkToggler
                                .Page-Block-Section
                                    .Section-subTitle Поделитесь впечатлениями о мастере *
                                    TextArea(placeholder="Расскажите, как все прошло?")
                                .Page-Block-Section
                                    .Section-subTitle Добавьте фотографии
                                    UploaderPhoto
                                Hr
                                .Page-Block-Section
                                    .Data-Row
                                        Toggler(:reverse="true" :checked="false" label="Скрыть мои данные в отзыве" tooltipContent="Если поле активно, то Вы оставите отзыв анонимно.")
                                .Page-Block-Section.Page-Block-Footer
                                    .Feedback-Author
                                        div Вы оставляете отзыв как: 
                                        div.Author-Name Алекс Лютый 
                                    Button(text="Опубликовать" icon="check-alt" href="/create-feedback/success")
                                .Description Перед отправкой отзыва, пожалуйста, ознакомьтесь с 
                                    a(href="#") правилами публикации.






</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import CurrentLocation from '@/components/common/CurrentLocation.vue';
import ButtonBack from '@/components/common/ButtonBack.vue';
import DropdownLarge from '@/components/common/DropdownLarge.vue';
import Hr from '@/components/common/Hr.vue';
import Advices from '@/components/common/Advices.vue';
import MarkToggler from '@/components/common/MarkToggler.vue';
import TextArea from '@/components/common/TextArea.vue';
import UploaderPhoto from '@/components/common/UploaderPhoto.vue';
import Toggler from "@/components/common/Toggler.vue";
import Button from "@/components/common/Button.vue";

export default {
    data () {
        return {
            options: [
                {
                    name: "Интимная татуировка",
                    status: "В процесее",
                    date: "20 / 01 / 2021",
                },
                {
                    name: "Удаление татуировки",
                    status: "Завершено",
                    date: "20 / 01 / 2019",
                },
                {
                    name: "Набить татуировку",
                    status: "В процессе",
                    date: "18 / 12 / 2020",
                },
            ]
        }
    },
    components: {
        SideNavigation,
        CurrentLocation,
        ButtonBack,
        DropdownLarge,
        Hr,
        Advices,
        MarkToggler,
        TextArea,
        UploaderPhoto,
        Toggler,
        Button,
    }
    
}
</script>

<style lang="scss" scoped>
@include blockUI;

.Page-Block-Navigation {
    display: flex;
    align-items: center;
    @include respond-to(medium-screens) {
        flex-wrap: wrap;
        justify-content: space-between;
        .Button-Back {
            margin-right: 20px;
            margin-bottom: 20px;
        }
        .DropdownLarge {
            margin-left: 0;
            margin-bottom: 20px;
        }
    }
}

.DropdownLarge {
    margin-left: auto;
    max-width: max-content;
}

.Main {
    max-width: calc(100% - 260px);
    @include respond-to (large-screens) {
        max-width: 100%;
    }
}

.Section-subTitle {
    font-size: 14px;
    font-weight: 700;
    color: var(--palette-blue);
    text-transform: uppercase;
    letter-spacing: 0.1ex;
    margin-bottom: 20px;
}

.Page-Block-Section {
    &:not(:first-child) {
        margin-top: 40px;
        @include respond-to(handlers) {
            margin-top: 20px;
        }
    }
}

::v-deep.Toggler-Wrap {
    background-color: var(--palette-transparent-bg);
    padding: 20px;
    border-radius: 4px;
    text-transform: uppercase;
    .Data-Label {
        color: var(--palette-blue);
    }
    @include respond-to(handlers) {
        padding: 10px;
        // margin: 0 auto;
    }
}

.Page-Block-Footer {
    display: flex;
    align-items: center;
    .Button-Default {
        margin-left: auto;
    }
    @include respond-to(handlers) {
        display: block;
    }
}

::v-deep.Button-Default {
    .icon {
        fill: var(--palette-blue);
    }
    @include respond-to(handlers) {
        width: 100%;
        margin-right: auto;
        margin-left: 0;
        max-width: 320px;
        > span:not(.Button-Icon) {
            margin: 0 auto;
        }
    }
}

.Feedback-Author {
    div {
       &:first-child {
           font-size: 13px;
           opacity: .5;
           margin-bottom: 3px;
       } 
       &:last-child {
           font-weight: 700;
       } 
    }

    @include respond-to(handlers) {
        margin-bottom: 20px;
    }
}

.Description {
    text-align: right;
    opacity: .75;
    color: var(--palette-pink);
    font-size: 13px;
    margin-top: 5px;
    a {
        font-weight: 700;
        color: var(--palette-pink);
        white-space: nowrap;
    }
    @include respond-to(medium-screens) {
        text-align: center;
    }
}

</style>