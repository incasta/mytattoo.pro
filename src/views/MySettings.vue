<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation

            .Main
                
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Настройки
                        .Page-Block-Content
                            .Content-Row
                                .Content-Column
                                    .Column-Heading
                                        h3 Изменить пароль
                                    DataSetting(data="Последнее изменение:  13 / 12 / 2034")
                                        template(#collapse)
                                            .Data-Row
                                                label.Data-Item
                                                    span.Data-Label Текущий пароль
                                                    input.Data-Input(type="password" placeholder="Старый пароль" value="Алексей")
                                            .Data-Row
                                                label.Data-Item
                                                    span.Data-Label Новый пароль
                                                    input.Data-Input(type="password" placeholder="Новый пароль" value="")
                                            .Data-Row
                                                label.Data-Item
                                                    span.Data-Label Повторите новый пароль
                                                    input.Data-Input(type="password" placeholder="Новый пароль" value="")
                                            .Data-Row
                                                .Button-Wrap
                                                    Button(text="Изменить пароль")
                                    
                                    .Column-Heading
                                        h3 Изменить e-mail
                                    DataSetting(data="gov***@mail.ru")
                                        template(#collapse)
                                            .Data-Row
                                                label.Data-Item
                                                    span.Data-Label Новый адрес
                                                    input.Data-Input(type="text" placeholder="Адрес эл почты" value="")
                                            .Data-Row
                                                .Button-Wrap
                                                    Button(text="Сохранить")

                                    .Column-Heading
                                        h3 Изменить номер телефона
                                    DataSetting(data="+7 *** *** ** 45")
                                        template(#collapse)
                                            .Data-Row
                                                label.Data-Item
                                                    span.Data-Label Новый номер телефона
                                                    input.Data-Input(type="text" placeholder="Номер телефона" value="")
                                            .Data-Row
                                                label.Data-Item
                                                    span.Data-Label Введите код из смс
                                                    CodeInput(:loading="false" class="Verification-Input" v-on:change="onChange" v-on:complete="onComplete" :fieldWidth="30" :fieldHeight="40")
                                            .Data-Row
                                                .Button-Wrap
                                                    Button(text="Выслать код")
                                

                                .Content-Column
                                    .Column-Heading
                                        h3 Пользовательские настройки
                                    .Data-Row
                                        Toggler(label="Показывать таймер подписки" :checked="true")
                                    .Data-Row
                                        Toggler(label="Показывать подсказки в левом сайдбаре" :checked="true")
                                        
                                    




</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import DataSetting from '@/components/MySettings/DataSetting.vue';
import Toggler from '@/components/common/Toggler.vue';
import Button from '@/components/common/Button.vue';
import CodeInput from "vue-verification-code-input";


export default {
    
    components: {
        SideNavigation,
        DataSetting,
        Toggler,
        Button,
        CodeInput,
        
    },
    methods: {
        onChange(v) {
          console.log("onChange ", v);
        },
        onComplete(v) {
          console.log("onComplete ", v);
        }
    }
} 
</script>

<style lang="scss" scoped>
@include data-inputs;
@include Verification-Input;


.Data-Row {
    height: unset;
    margin-bottom: 20px;
    .Data-Item {
        flex-direction: column;
        align-items: flex-start;
        .Data-Input {
            margin-left: 0;
            margin-top: 10px;
        }
    }
}

.Toggler-Wrap {
    color: var(--palette-blue);
}

.Data-Row {
    .Data-Item {
        display: flex;
        flex-direction: row;
        align-items: center;
        .Data-Input {
            margin-top: 0;
        }
    }
    .Button-Wrap {
        width: 220px;
        margin-left: auto;
        .Button-Default {
            margin-right: auto;
            margin-left: 0;
            width: max-content;
        }
    }
}

::v-deep.Button-Default {
    margin-left: auto;
    padding: 1em 2em;
    font-size: 11px;
    letter-spacing: .2ex;
    span {
        padding: 0 !important;
    }
}

</style>