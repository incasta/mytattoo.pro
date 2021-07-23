<template lang="pug">
    
    .container
        ModalServiceTerms(@child-method="updateParent")
        .Row
            .SideBar
                SideNavigation
                
            .Main
                .content
                    .Page-Block.w-50
                        .Page-Block-Header
                            h2 Регистрация
                        .Page-Block-Content
                            .Content-Column.wide
                                .Column-Heading
                                    h3 Регистрация через соц сети
                                .Social-Registration-Group
                                    a.Social-Registration-Item(href="#") 
                                        app-icon(name="social_vk" size="46")
                                        span Вконтакте
                                    a.Social-Registration-Item(href="#") 
                                        app-icon(name="social_insta" size="30")
                                        span Instagram

                            .Content-Column.wide
                                .Column-Heading 
                                    h3 Заполните все поля
                                .Data-Row
                                    label.Data-Item
                                        span.Data-Label Имя
                                        input.Data-Input(type="text" placeholder="Имя" value="")
                                .Data-Row
                                    label.Data-Item
                                        span.Data-Label Фамилия
                                        input.Data-Input(type="text" placeholder="Фамилия" value="")
                                .Data-Row
                                    label.Data-Item
                                        span.Data-Label номер телефона
                                        input.Data-Input(type="text" placeholder="номер телефона" value="")

                                .Data-Row.pos-r
                                    .showModalServiceTerms(@click="$modal.show('ModalServiceTerms')" v-if="!hasScrolledToBottom")
                                    a.Terms-Link(href="#" v-if="hasScrolledToBottom" @click="$modal.show('ModalServiceTerms')") 
                                        span(v-if="hasScrolledToBottom")  Пользовательское соглашение
                                    Toggler(label="я прочитал(а) и принимаю пользовательское соглашение" :reverse="true" :class="{ disabled: !hasScrolledToBottom }")
                                    
                                //- .Data-Row
                                //-     a.Terms-Link(href="#" @click="$modal.show('ModalServiceTerms')") 
                                //-         span.Terms-Link-Desc(v-if="!hasScrolledToBottom")  Сперва изучите Пользовательское соглашение
                                //-         span(v-if="hasScrolledToBottom")  Пользовательское соглашение
                                //-     Toggler(label="я прочитал(а) и принимаю пользовательское соглашение" :reverse="true" :class="{ disabled: !hasScrolledToBottom }")
                                    

                        .Page-Block-Content-Footer
                            span.Footer-Extra-Link Уже есть аккаунт? 
                                router-link(:to="'/authorization'") Войти
                            
                            Button(text="Далее" icon="arrow-small-right" iconClass="blue" href="step2" :class="{ disabled: !hasScrolledToBottom } ")
                                                  

                    .Page-Block.w-50.about
                        .Page-Block-Header
                            h2 7 дней подписки бесплатно!
                        .Page-Block-Content
                            .block
                                label 1. Cвязь с клиентами 
                                p Получайте заявки от клиентов в удобном формате
                            .block
                                label 2. Ты талантливый матер?
                                p Так покажи это всем, став первым в рейтинге ТОП-10 татуировщиков своего региона
                            .block
                                label 3. У тебя крутое портфолио?
                                p Твои работы увидят десятки тысяч человек.

                            .block
                                label 4. достали постоянные вопросы по прайсу и условиям?
                                p Скидывай ссылку на профиль в MYTATTOO.PRO

                            .block
                                label 5. здорово рисуешь?
                                p На сервисе ты сможешь, провести акцию/конкурс, продать/приобрести тату оборудование! А мы поможем тебе с распространением информации в твоем регионе/городе
                                
                            .block
                                label 6. хочешь устроиться татуировщиком или провести акцию?
                                p Мы найдем тех, кому ты сможешь продать свои эскизы

                            .block
                                label 7. Отметим тебя на карте региона, в котором ты трудишься
                                p Теперь найти твою "лавочку" не составит труда

                            .block
                                label 8. Заявить о себе стало еще проще!
                                p Удобная система всевозможных индикаторов твоего профессионализма поможет заявить об уровне собственного скилла. 


                                
</template>


<script>
import SideNavigation from '@/components/Navigation/SideNavigation/RegistrationSideNavigation.vue';
import Hr from '@/components/common/Hr.vue';
import Toggler from '@/components/common/Toggler.vue';
import Button from '@/components/common/Button.vue';

import ModalServiceTerms from '@/components/Modals/ModalServiceTerms.vue';

export default {
    data () {
        return {
            hasScrolledToBottom: false,
            // msg: "I am the blue parent!!!!!!!!!!!!!!!!!!",
        }
    },
    components: {
        SideNavigation,
        Hr,
        Toggler,
        Button,
        ModalServiceTerms,
    },
    methods: {

        updateParent(child_hasScrolledToBottom) {
            this.hasScrolledToBottom = child_hasScrolledToBottom;
            console.log("hasScrolledToBottom: " + child_hasScrolledToBottom);
        },
        show () {
            this.$modal.show('ModalServiceTerms');
        },
        hide () {
            this.$modal.hide('ModalServiceTerms');
        },
        mount () {
            this.show();
            this.updateParent();

        },
    }

}
</script>


<style lang="scss" scoped>
@include blockUI;
@include data-inputs;

.pos-r {
    position: relative;
}

.showModalServiceTerms {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.Terms-Link {
    text-transform: uppercase;
    color: #fff;
    display: block;
    margin-bottom: 10px;
    font-size: 13px;
    font-weight: 700;
    
    span {
        @include trans-ease-out;
    }
    span {
        &:not(.Terms-Link-Desc) {
            opacity: .75;
            &:hover {
                opacity: .5;
            }
        }
    }
    
    .Terms-Link-Desc {
        font-size: 13px;
        font-weight: 700;
        color: var(--palette-yellow);
        text-transform: uppercase;
        &:hover {
            opacity: .75;
        }
    }
}

.Data-Item {
    .Data-Input {
        @include respond-to (medium-screens) {
            max-width: 220px;
        }
        @include respond-to (handlers) {
            margin-top: 10px;
            max-width: 100%;
        }
    }
}

.Page-Block.w-50 {
    @include respond-to (medium-screens) {
        width: 100%;
        max-width: 100%;
    }
    &.about {
        background-color: var(--palette-dark-regular);
        .Page-Block-Header {
            text-align: center;
            justify-content: center;
            padding: 20px 0;
            color: var(--palette-yellow);
            text-shadow: 0px 0px 4px var(--palette-yellow);
            &:before {
                height: 2px;
                width: 100%;
                top: 0;
                left: 0;
                background: linear-gradient(269.09deg, rgba(255, 255, 112, 0) 0.79%, #FFFF70 53.09%, rgba(255, 255, 112, 0) 99.23%);
                background-color: transparent;
            }
            &:after {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: transparent;
                background: linear-gradient(269.09deg, rgba(255, 255, 112, 0) 0.79%, #FFFF70 53.09%, rgba(255, 255, 112, 0) 99.23%);
            }
        }

        .Page-Block-Content {
            display: flex;
            flex-wrap: wrap;

            @include respond-to (handlers) {
                margin-top: 20px;
            }
        }

        .block {
            max-width: calc(50% - 20px);
            margin-right: 10px;
            margin-bottom: 20px;
            label {
                color: var(--palette-yellow);
                text-shadow: 0px 0px 4px var(--palette-yellow);
                margin-bottom: 15px;
                display: block;
                font-size: 14px;
                text-transform: uppercase;
                font-weight: 700;
            }
            p {
                font-size: 13px;
            }

            @include respond-to (handlers) {
                max-width: 100%;
                margin-right: 0;
            }
        }

        @include respond-to (medium-screens) {
            margin-top: 30px;
        }
    }
}

::v-deep.Button-Default {
    &:hover {
        .Button-Icon {
            .icon {
                @include anim-swipe-right;
            }
        }
    }
    
}

.Footer-Extra-Link {
    font-size: 13px;
    text-transform: uppercase;
    a {
        color: var(--palette-blue);
        font-weight: 700;
        @include trans-ease-out;
        &:hover {
            opacity: .75;
        }
    }

    @include respond-to (handlers) {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
    }
    
}

.Page-Block-Content-Footer {
    background: var(--palette-dark-medium);
    padding: 20px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &:before {
        content: '';
        background-color: var(--palette-dark-lighter);
        height: 1px;
        width: 100%;
        position: relative;
        display: block;
        margin-bottom: 20px;
        margin-top: -40px;
    }

    @include respond-to (handlers) {
        justify-content: center;
    }
}

.content {
    display: flex;
    align-items: flex-start;
    @include respond-to (medium-screens) {
        display: block;
    }
}

.Social-Registration-Group,
.Social-Registration-Item {
    @include flex-ja_center;
}

.Social-Registration-Group {
    // justify-content: space-evenly;
    margin: 30px 0;
    @include respond-to (handlers) {
        display: block;
    }
}

.Social-Registration-Item {
    text-decoration: none;
    color: #fff;
    padding: 0 30px;
    @include trans-ease-out;
    span, .icon {
        @include trans-ease-out;
    }
    .icon {
        margin-right: 10px;
        fill: var(--palette-light-icon);
    }

    &:first-child {
        border-right: 1px solid var(--palette-dark-lighter);
    }
    &:hover {
        span {
            color: var(--palette-blue);
        }
        .icon {
            fill: var(--palette-blue); 
        }
    }

    @include respond-to (handlers) {
        &:first-child {
            border-right: none;
            margin-bottom: 20px;
        }
    }
}

.Column-Heading {
    h3 {
        color: var(--palette-blue);
        opacity: 1;
    }
    
}

.Content-Column {
    margin-left: 0 !important;
}

.Content-Column.wide .Data-Label {
    margin-bottom: 0;
}



::v-deep.Toggler-Wrap {
    .Toggler {
        margin-left: 0;
    }
}



</style>
