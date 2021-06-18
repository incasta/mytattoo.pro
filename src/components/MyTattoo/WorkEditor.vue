<template lang="pug">
    
    .WorkEditor
        .Column.Small
            .WorkEditor-Image
                ImageUploader
                img(:src="require('@/assets/img/photo/1.jpg')")
            Button(text="Опубликовать" icon="check-filled" iconClass="blue" href="success")
            a.rules-link(href="#") Правила размещения фотографий

        .Column
            .Column-Heading 
                h3 Описание работы
            .Data-Row
                label.Data-Item 
                    .Data-Label Количество часов
                    Dropdown(:options="dropdownOptions[0].options")
            .Data-Row
                label.Data-Item 
                    .Data-Label Количество сеансов
                    Dropdown(:options="dropdownOptions[1].options")
            .Data-Row
                label.Data-Item 
                    .Data-Label Палитра татуировки
                    Dropdown(:options="dropdownOptions[2].options")
            .Data-Row
                label.Data-Item 
                    .Data-Label Для кого
                    Dropdown(:options="dropdownOptions[3].options")
            .Data-Row
                label.Data-Item 
                    .Data-Label Цена
                    input.Data-Input.small(v-money="money" placeholder="Стоимость" value="2000")
            .Data-Row
                Toggler(:reverse="true" label="Смогу набить тату по этому эскизу" tooltipContent="Сообщите потенциальным клиентам сможете ли Вы набить тату изображенное на фото")
            
            MultiSelectStyles
            MultiSelectPlaces
                    

            

</template>

<script>
import Button from "@/components/common/Button.vue";
import ImageUploader from "@/components/common/ImageUploader.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import Toggler from "@/components/common/Toggler.vue";
import MultiSelectStyles from "@/components/common/MultiSelectStyles.vue";
import MultiSelectPlaces from "@/components/common/MultiSelectPlaces.vue";

import {mask} from 'vue-the-mask';
import {VMoney} from 'v-money';


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
                    options: ["Менее 1 часа", "2-4 часа", "5 и более часов"],
                },
                {
                    options: ["1 сеанс", "2 сеанса", "3 сеанса", "4 сеанса", "5 сеансов", "6 и более сеансов"],
                },
                {
                    options: ["Цветная", "Черно-белая"],
                },
                {
                    options: ["Мужская", "Женская", "Унисекс"],
                },
            ],
        }
    },
    directives: {
        mask,
        money: VMoney,
    },
    components: {
        Button,
        ImageUploader,
        Dropdown,
        Toggler,
        MultiSelectStyles,
        MultiSelectPlaces,
    },
    props: {
        imageEditable: {
            type: Boolean,
        }
    }

}
</script>


<style lang="scss" scoped>

@include data-inputs;


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

</style>