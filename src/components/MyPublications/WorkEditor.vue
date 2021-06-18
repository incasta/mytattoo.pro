<template lang="pug">
    
    .WorkEditor
        .Content-Column.full-width.wide
            .Content-Column-Header
                .Data-Row
                    .Data-Label Рубрика
                    Dropdown(:options="dropdownOptions[0].options")
                .Data-Author
                    Author
                    .Data-Author-Name Вергунов Алексей
                    a.Data-Author-Preview(href="#") Предпросмотр новости 
            Hr
        .Content-Column.wide
            .Data-Row
                .Data-Label Заголовок
                input.Data-Input(type="text" placeholder="Заголовок" value="")
            .Data-Row
                .Data-Label Текст объявления
                TextArea
            .Data-Row
                Toggler(:reverse="true" label="Смогу набить тату по этому эскизу" tooltipContent="Сообщите потенциальным клиентам сможете ли Вы набить тату изображенное на фото")
            

</template>

<script>
import Button from "@/components/common/Button.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import Toggler from "@/components/common/Toggler.vue";
import Author from "@/components/common/Author.vue";
import Hr from "@/components/common/Hr.vue";
import TextArea from "@/components/common/TextArea.vue";

export default {
    data() {
        return {
            money: {
                suffix: ' ₽',
                masked: false,
                precision: 0,
                thousands: "",
            },
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
        Author,
        Hr,
        TextArea,
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
    display: flex;
    flex-wrap: wrap;
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
    @include respond-to (tablets-screens) {
        width: 100%;
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

</style>