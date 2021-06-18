<template lang="pug">
    
    .NewTicket.Page-Block
        .NewTicket-Header.Page-Block-Header
            HeaderBackButton
            h2 Новое обращение в тех поддержку
        .NewTicket-Content
            .Content-Column
                .Data-Row
                    label.Data-Item
                        span.Data-Label Email 
                        input.Data-Input(type="text" placeholder="Email" value="") 
                .Data-Row
                    label.Data-Item
                        span.Data-Label Тема обращения 
                        Dropdown(:options="options") 
                        //- input.Data-Input(type="text" placeholder="Email" value="")
            Hr
            .Content-Column.wide
                .Data-Row.Double-Row
                    label.Data-Item
                        span.Data-Label Заголовок
                        input.Data-Input(type="text" placeholder="Заголовок" value="")
                .Data-Row.Double-Row
                    label.Data-Item
                        span.Data-Label Расскажите о проблеме, с которой вы столкнулись
                        TextArea(rows="6" cols="")
                .Data-Row.Double-Row
                    label.Data-Item
                        span.Data-Label Добавьте фотографии
                        UploaderPhoto
            Hr
            .NewTicket-Footer
                Toggler(:reverse="true" label="Получать уведомления по эл. почте" tooltipContent="Вы будете получать уведомления на электронную почту, указанную в тикете.")
                Button(text="Отправить" icon="check-filled" iconClass="blue")


</template>

<script>
import HeaderBackButton from "@/components/common/HeaderBackButton.vue";
import Dropdown from "@/components/common/Dropdown.vue";
import Hr from "@/components/common/Hr.vue";
import TextArea from "@/components/common/TextArea.vue";
import UploaderPhoto from "@/components/common/UploaderPhoto.vue";
import Toggler from "@/components/common/Toggler.vue";
import Button from "@/components/common/Button.vue";


export default {
    components: {
        HeaderBackButton,
        Dropdown,
        Hr,
        TextArea,
        UploaderPhoto,
        Toggler,
        Button,
    },

    data () {
        return {
            options: ["Не выбрано", "Вопросы по работе сервиса", "Предложения и пожелания", "Жалобы", "Финансовые вопросы", "Другое" ]
        }
    },
    
}
</script>


<style lang="scss" scoped>

@include blockUI;
@include data-inputs;

.HeaderBackButton {
    margin-top: -15px;
    margin-bottom: -15px;
    margin-left: -24px;
    margin-right: 20px;
}

.NewTicket-Content {
    background: var(--palette-dark-medium);
    padding: 20px;
    text-align: left;
}

.Data-Label {
    flex-shrink: 0;
    margin-right: 30px;
}

.Data-Input,
.Dropdown {
    margin-left: auto;
}


.Content-Column {
    &.wide {
        .Data-Input {
            max-width: 100%;
        }
    }

    &:last-child {
        margin-left: 0;
    }
}

.TextArea {
    // border: 2px solid rgba(0, 0, 0, 0.75);
    border: 2px solid transparent; 
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    font-size: 12px;
    letter-spacing: .1ex;
    &:focus {
        outline: none;
        border-color: var(--palette-dark-light);
    }
}

.NewTicket-Footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // flex-wrap: wrap;
    .Toggler-Wrap {
        margin-right: 30px;
    }
    @include respond-to(handlers) {
        display: block;
        .Button-Default {
            margin-top: 20px;
        }
    }
}

.Page-Block-Header {
    h2 {
        @include respond-to(handlers) {
            max-height: 26px;
            align-items: center;
            display: flex;
        }
    }
}

</style>