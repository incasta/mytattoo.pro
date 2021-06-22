<template lang="pug">
    
    .WorkEditor
        
        //- .Content-Column.full-width.wide
        .Content-Column.wide
            .Content-Column-Header
                .Data-Row
                    .Data-Label Рубрика
                    Dropdown(:options="dropdownOptions[0].options")
            Hr
            .Data-Row
                .Data-Label Заголовок
                input.Data-Input(type="text" placeholder="Заголовок" value="")
            .Data-Row
                .Data-Label Текст объявления
                TextArea
            UploaderPhoto
            Hr
            .Content-Column-Footer
                .Data-Row
                    Toggler(:reverse="true" label="Запретить заявки для этой публикации" :checked="true")
                    Toggler(:reverse="true" label="Автоматически опубликовать после проверки" :checked="true")
                Button(text="Опубликовать" icon="arrow-small-right" iconClass="blue")

        .ActionButtons-Area
            .ActionButtons-Wrap
                PreviewButton(href="#") 
                AddButton
                DeleteButton  
          

</template>

<script>
import Button from "@/components/common/Button.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import Toggler from "@/components/common/Toggler.vue";
import Hr from "@/components/common/Hr.vue";
import TextArea from "@/components/common/TextArea.vue";
import PreviewButton from "@/components/common/PreviewButton.vue";
import AddButton from "@/components/MyPublications/AddButton.vue";
import DeleteButton from "@/components/MyPublications/DeleteButton.vue";
import UploaderPhoto from "@/components/common/UploaderPhoto.vue";


export default {
    data() {
        return {
            dropdownOptions: [
                {
                    options: ["Без рубрики", "Реклама", "Аренда", "Другое", "Третье", "Десятое"],
                },
            ],
        }
    },
    components: {
        Button,
        Dropdown,
        Toggler,
        Hr,
        TextArea,
        PreviewButton,
        DeleteButton,
        AddButton,
        UploaderPhoto,
    },

}
</script>


<style lang="scss" scoped>

@include data-inputs;

.Content-Column:last-child {
    margin-left: 0;
}

hr {
    margin-top: 10px;
}

::v-deep.Toggler-Wrap .Data-Label {
    margin-bottom: 0;
}

.Content-Column-Header {
    display: flex;
    align-items: flex-start;

    .Data-Row {
        flex: 1;
        // flex-shrink: 0;
        max-width: 400px;
        @include respond-to(handlers) {
            max-width: 100%;
        }
    }
}

.Data-Row {
    @include respond-to(handlers) {
        max-width: 100%;
    }
}

.Data-Author {
    margin-left: auto;
    display: grid;
    grid-template-areas: "ava name" "ava link";
    flex-shrink: 0;
    column-gap: 10px;
}

.Author {
    grid-area: ava;
    width: 72px;
    height: 72px;
}

.Data-Author-Name {
    grid-area: name;
    align-self: flex-end;
    font-weight: 700;
    font-size: 14px;
}

.Data-Author-Preview {
    grid-area: link;
    align-self: flex-start;
    font-weight: 700;
    font-size: 11px;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--palette-blue);
    @include trans-ease-out;
    &:hover {
        opacity: .5;
    }
}


.WorkEditor {
    // display: flex;
    // flex-wrap: wrap;

    display: grid;
    grid-template-areas: "content action-btns";
    @include respond-to (tablets-screens) {
        display: flex;
        flex-direction: column-reverse;
        
    }
}

.Column {
    // width: 100%;
    flex-grow: 1;
    &.Small {
        max-width: 300px;
        flex-shrink: 0;
        @include respond-to (tablets-screens) {
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
        }
    }
    &:first-child {
        margin-right: 20px;
    }

}

.WorkEditor-Image {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    // width: 300px;
    
    img {
        width: 100%;
        // height: 100%;
        height: 440px;
        object-fit: cover;
    }
}

.rules-link {
    text-transform: uppercase;
    color: var(--palette-white);
    opacity: .25;
    text-align: center;
    margin: 15px 0;
    display: block;
    font-size: 13px;
    &:hover {
        opacity: 1;
    }
}

.Data-Item {
    .Data-Label {
        text-transform: uppercase;
        font-weight: 700;
        color: var(--palette-blue);
        font-size: 13px;
        margin-right: 0px;
    }
    .Dropdown {
        max-width: 260px;
        margin-left: auto;
    }

    .Data-Label,
    .Dropdown {
        // max-width: unset;
        max-width: 50%;
        width: unset;
        flex: 1;
    }

    .Dropdown {
        flex-shrink: 0;
        min-width: max-content;
    }
    @include respond-to (medium-screens) {
        .Data-Label,
        .Dropdown {
            max-width: unset;
        }
    }

    .Data-Input {
        margin-left: 0;
    }
}

.Data-Input {
    margin-left: 0;
    max-width: 100%;
}

.TextArea {
    background-color: rgba(0, 0, 0, 0.75);
    border: 2px solid rgba(0, 0, 0, 0.75);
    width: 100%;
}

.WorkEditor {

    .Content-Column {
        max-width: 670px;
        grid-area: content;
        @include respond-to (tablets-screens) {
            max-width: 100%;
        }
    }
}

.ActionButtons-Area {
    padding-left: 10px;
    padding-top: 30px;

    @include respond-to (tablets-screens) {
        padding-left: 0;
        padding-top: 0; 
    }
}

.ActionButtons-Wrap {
    display: flex;
    // align-items: flex-start;
    align-items: center;
    grid-area: action-btns;
    position: sticky;
    z-index: 1;
    top: 20px;
    .AddButton {
        margin-left: 10px;
        margin-right: 5px;
    }

    @include respond-to (tablets-screens) {
        margin: 10px 0 20px 0;
    }
    @include respond-to (handlers) {
        // margin-left: auto;
        .PreviewButton {
            margin-right: auto;
        }
    }
}

.Content-Column-Footer {
    display: flex;
    align-items: flex-start;


    .Button-Default {
        flex-shrink: 0;
        margin-left: auto;
        // margin-left: 10px;
    }

    .Data-Row {
        max-width: 60%;
        margin-right: 10px;
    }
    @include respond-to (medium-screens) {
        flex-wrap: wrap;
        .Data-Row {
            max-width: 100%;
        }
        .Button-Default {
            margin-left: 0;
            width: 100%;
        }
    }

    .Toggler-Wrap {
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }
}


::v-deep.Button-Default {
    &:hover {
        .Button-Icon {
            .icon {
                animation: swipe-right .3s ease alternate;
            }
        }   
    }
}
</style>