<template lang="pug">
    
    .ModalContent
        //- "vue-js-modal": "^2.0.0-rc.3",
        .Modal-Header
            h2 Оставить заявку
            button.Close-Modal(@click="$emit('close')")
                app-icon(name="cross" size="12")
        .Modal-Body
            WizardManager(v-slot="scope" lazy @finished="handleFinished")
                WizardContainer(:scope="scope")
                    StepBase
                        .Data-Row
                            label.Data-Item
                                span.Data-Label какая услуга вас интересует? *
                                .Data-Singleselect
                                    multiselect.Dropdown(
                                    v-model="value", 
                                    :close-on-select="true"
                                    :show-labels="false" 
                                    :placeholder="`Не выбрано`", 
                                    :options="options", 
                                    :searchable="false", 
                                    :preselect-first="true", 
                                    :allow-empty="false"
                                    )
                                        template(slot="noOptions")
                                            span Нет доступных услуг
                    
                    //- 
                    StepBase
                        .Data-Row
                            span.Data-Label Сколько вам лет? *
                                .Data-Label-Desc Если вам нет 18 лет, мастер может попросить разрешение родителя или опекуна
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-1")
                                    span.Radio
                                    span Младше 16
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-1")
                                    span.Radio
                                    span 16-17 лет
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-1")
                                    span.Radio
                                    span Старше 18 лет
                        Hr

                        .Data-Row(v-if="value !== 'Обучение татуировке'")
                            span.Data-Label Укажите при наличии
                                Tooltip(content="Вы можете выбрать до 5 тегов. Чтобы удалить лишние выбранные теги, кликните на крестик рядом с названием") 
                            .Data-Multiselect-Tags
                                multiselect(
                                    v-model="diseaseValue",
                                    placeholder="Начните писать или выберите из списка",
                                    label="name",
                                    track-by="name",
                                    :show-labels="false",
                                    :options="diseaseOptions",
                                    :multiple="true",
                                    :taggable="false",
                                    :hide-selected="true",
                                )

                        .Data-Row(v-if="value == 'Обучение татуировке'")
                            span.Data-Label Мастер преподает в следующих стилях. Выберите наиболее подходящий
                            .Data-Multiselect-Tags
                                multiselect(
                                    v-model="styleValue",
                                    placeholder="Начните писать или выберите из списка",
                                    label="name",
                                    track-by="name",
                                    :show-labels="false",
                                    :options="styleOptions",
                                    :multiple="true",
                                    :taggable="false",
                                    :hide-selected="true",
                                )
                    //- 
                    StepBase(v-if="value == 'Обучение татуировке'")
                        .Data-Row
                            span.Data-Label Укажите уровень обучения
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-10")
                                    span.Radio
                                    span Обучаюсь с нуля
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-10")
                                    span.Radio
                                    span Необходимо повысить квалификацию
                        Hr

                        .Data-Row
                           span.Data-Label Формат обучения
                           .Radio-Group
                               label.Radio-Item
                                   input(type="radio" name="Radio-Item-11")
                                   span.Radio
                                   span Индивидуально
                               label.Radio-Item
                                   input(type="radio" name="Radio-Item-11")
                                   span.Radio
                                   span В группе
                               label.Radio-Item
                                   input(type="radio" name="Radio-Item-11")
                                   span.Radio
                                   span Подойдет любой формат
                        Hr

                        .Data-Row
                           span.Data-Label Материалы и инструменты
                           .Radio-Group
                               label.Radio-Item
                                   input(type="radio" name="Radio-Item-12")
                                   span.Radio
                                   span Есть свои
                               label.Radio-Item
                                   input(type="radio" name="Radio-Item-12")
                                   span.Radio
                                   span Нужны от специалиста

                    //- 
                    StepBase(v-if="value == 'Обучение татуировке'")
                        .Data-Row
                            span.Data-Label Нужен сертификат об обучении?
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-12")
                                    span.Radio
                                    span да
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-12")
                                    span.Radio
                                    span Нет
                        Hr

                        .Data-Row
                            span.Data-Label Можете оставить комментарий
                            .Text-Group
                                TextArea(placeholder="Напишите любую мастеру любую полезную информацию..." cols="" rows="")
                        
                        Hr

                        .Data-Row
                            span.Data-Label Длительность обучения составит 
                            .Duration-Value 2 недели
                    
                    //- 
                    StepBase(v-if="value == 'Набить татуировку' || value == 'Интимная татуировка' || value == 'Удаление татуировки' || value =='Коррекция татуировки' || value == 'Перекрытие татуировки' || value == 'Шрамирование татуировкой'")
                        .Data-Row
                            span.Data-Label Размер
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-2")
                                    span.Radio
                                    span маленькая (до 5см)
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-2")
                                    span.Radio
                                    span Средняя (до 15 см)
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-2")
                                    span.Radio
                                    span Крупная (более 15 см)
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-2")
                                    span.Radio
                                    span Масштабная работа (от 30 см)
                        Hr

                        .Data-Row
                            label.Data-Item
                                span.Data-Label Сколько вы готовы заплатить за работу *
                                .Data-Input-Range-Group
                                    .Data-Input-Range
                                        span.Data-Input-Range-Prefix от: 
                                        input.PaymentValue(v-model="paymentValueFrom" type="text" placeholder="1000"  value="1000" v-money="money")
                                        //- input.Data-Input(type="text" placeholder="ссылка на ваш сайт" value="")
                                    .Data-Input-Range
                                        span.Data-Input-Range-Prefix до: 
                                        input.PaymentValue(v-model="paymentValueTo" type="text" placeholder="1000"  value="1000" v-money="money")
                        Hr

                        .Data-Row(v-if="value !== 'Удаление татуировки' && value !=='Коррекция татуировки' && value !== 'Перекрытие татуировки' && value !== 'Шрамирование татуировкой'")
                            span.Data-Label Выберите Стиль 
                                Tooltip(content="Вы можете выбрать до 5 тегов. Чтобы удалить лишние выбранные теги, кликните на крестик рядом с названием")
                            .Data-Multiselect-Tags
                                multiselect(
                                    v-model="styleValue",
                                    placeholder="Начните писать или выберите из списка",
                                    label="name",
                                    track-by="name",
                                    :show-labels="false",
                                    :options="styleOptions",
                                    :multiple="true",
                                    :taggable="false",
                                    :max="5",
                                    :hide-selected="true"
                                )

                        .Data-Row(v-if="value == 'Удаление татуировки' || value == 'Коррекция татуировки' || value == 'Перекрытие татуировки'")
                            span.Data-Label Когда была нанесена татуировка? *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-4")
                                    span.Radio
                                    span Меньше 1 года назад
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-4")
                                    span.Radio
                                    span 1-3 года назад
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-4")
                                    span.Radio
                                    span 3-5 лет назад
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-4")
                                    span.Radio
                                    span Более 5 лет назад

                        .Data-Row(v-if="value == 'Шрамирование татуировкой'")
                            span.Data-Label Когда была получена травма? *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-9")
                                    span.Radio
                                    span Меньше 1 года назад
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-9")
                                    span.Radio
                                    span 1-3 года назад
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-9")
                                    span.Radio
                                    span 3-5 лет назад
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-9")
                                    span.Radio
                                    span Более 5 лет назад
                            
                        Hr

                        .Data-Row(v-if="value == 'Удаление татуировки' ||  value == 'Коррекция татуировки' || value == 'Перекрытие татуировки' || value == 'Шрамирование татуировкой'")
                            span.Data-Label Цвет татуировки
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-5")
                                    span.Radio
                                    span Чёрно-белая
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-5")
                                    span.Radio
                                    span Цветная

                        .Data-Row(v-if="value !== 'Удаление татуировки' &&  value !== 'Коррекция татуировки' && value !== 'Перекрытие татуировки' && value !== 'Шрамирование татуировкой'")
                            span.Data-Label Расположение 
                                Tooltip(content="Вы можете выбрать до 5 тегов. Чтобы удалить лишние выбранные теги, кликните на крестик рядом с названием")
                            .Data-Multiselect-Tags
                                multiselect(
                                    v-model="placeValue",
                                    placeholder="Начните писать или выберите из списка",
                                    label="name",
                                    track-by="name",
                                    :show-labels="false",
                                    :options="placeOptions",
                                    :multiple="true",
                                    :taggable="false",
                                    :max="5",
                                    :hide-selected="true"
                                )
                    //- 
                    StepBase(v-if="value == 'Набить татуировку' || value == 'Интимная татуировка' || value == 'Удаление татуировки'")
                        .Data-Row(v-if="value !== 'Удаление татуировки'")
                            span.Data-Label Наличие эскиза
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-3")
                                    span.Radio
                                    span у меня нет эскиза
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-3")
                                    span.Radio
                                    span у меня есть эскиз
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-3")
                                    span.Radio
                                    span пускай мастер предложит свой

                        .Data-Row(v-if="value == 'Удаление татуировки'")
                            span.Data-Label Способ удаления
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-6")
                                    span.Radio
                                    span Лазером
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-6")
                                    span.Radio
                                    span Ремувером
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-6")
                                    span.Radio
                                    span По рекомендации мастера
                        
                        Hr

                        .Data-Row
                            span.Data-Label Оставьте комментарий
                            .Text-Group
                                TextArea(placeholder="Напишите любую мастеру любую полезную информацию..." cols="" rows="")

                        Hr

                        .Data-Row
                            span.Data-Label Загрузите фотографию тату, которое нужно удалить *
                            UploaderPhoto
                    
                    //- 
                    StepBase(v-if="value == 'Коррекция татуировки' || value == 'Перекрытие татуировки' || value == 'Шрамирование татуировкой'")
                        .Data-Row(v-if="value !== 'Перекрытие татуировки' && value !== 'Шрамирование татуировкой'")
                            span.Data-Label Причина реставрации
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-7")
                                    span.Radio
                                    span Контуры потеряли прежнюю чёткость
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-7")
                                    span.Radio
                                    span Потеря цвета и яркости
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-7")
                                    span.Radio
                                    span Татуировка стала неоднородной
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-7")
                                    span.Radio
                                    span Дорисовать новые элементы
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-7")
                                    span.Radio
                                    span Изменить цветовую гамму

                        .Data-Row(v-if="value == 'Перекрытие татуировки'")
                            span.Data-Label Что хотите изобразить поверх прежней татуировки? *
                            .Radio-Group
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-8")
                                    span.Radio
                                    span Рисунок
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-8")
                                    span.Radio
                                    span Текст, иероглиф
                                label.Radio-Item
                                    input(type="radio" name="Radio-Item-8")
                                    span.Radio
                                    span Пускай мастер порекомендует

                        Hr(v-if="value !== 'Шрамирование татуировкой'")

                        .Data-Row
                            span.Data-Label Оставьте комментарий
                            .Text-Group
                                TextArea(placeholder="Напишите любую мастеру любую полезную информацию..." cols="" rows="")

                        Hr

                        .Data-Row
                            span.Data-Label загрузите фотографию тату, которое нуждается в коррекции *
                            UploaderPhoto
                            

</template>


<script>
import Multiselect from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.min.css";
import Hr from "@/components/common/Hr.vue";
import Tooltip from "@/components/common/Tooltip.vue";
import TextArea from "@/components/common/TextArea.vue";
import UploaderPhoto from "@/components/common/UploaderPhoto.vue";
import {mask} from 'vue-the-mask';
import {VMoney} from 'v-money';


import WizardContainer from '@/components/RenderlessWizard/wizard-container.vue';
import StepBase from "@/components/RenderlessWizard/StepBase.vue";

// import Step1 from '@/components/RenderlessWizard/StepTest1.vue';
// import Step2 from '@/components/RenderlessWizard/StepTest2.vue';



import '@/components/RenderlessWizard/global.css';
import { translateFade, translateFadeBackwarding } from '@/components/RenderlessWizard/transitions';
import '@/components/RenderlessWizard/transitions.css';

export default {
    name: "ModalMasterRequest",
    data () {
        return {
            forwarding: true,
            value: null,
            paymentValueFrom: '1000',
            paymentValueTo: '100000',
            money: {
                suffix: ' ₽',
                masked: false,
                precision: 0,
                thousands: "",
            },
            options: ['Набить татуировку', 'Интимная татуировка', 'Удаление татуировки', 'Коррекция татуировки', 'Перекрытие татуировки', 'Шрамирование татуировкой', 'Обучение татуировке'],
            diseaseValue: [],
            diseaseOptions: [
                { name: 'Беременность или лактация' },
                { name: 'Аллергия' },
                { name: 'Дерматит' },
                { name: 'Инфекционные заболевания' },
                { name: 'Воспаления на коже' },
                { name: 'Повышенная кровоточивость' },
                { name: 'Диабет' },
                { name: 'Экзема' },
                { name: 'Онкологическое заболевание' },

            ],
            styleValue: [],
            styleOptions: [
                { name: 'Хэндпоук', },
                { name: 'Этника', },
                { name: 'Гравюра', },
                { name: 'Чикано', },
                { name: 'Полинезия', },
                { name: 'Хайда', },
                { name: 'Леттеринг', },
                { name: 'Гравюра', },
                { name: 'Полинезия', },
                { name: 'Хэндпоук', },
                { name: 'Этника', },
                { name: 'Гравюра', },
                { name: 'Чикано', },
                { name: 'Полинезия', },
                { name: 'Хайда', },
                { name: 'Леттеринг', },
                { name: 'Гравюра', },
                { name: 'Полинезия', },
            ],
            placeValue: [],
            placeOptions: [
                { name: '#рука', },
                { name: '#нога', },
                { name: '#плечо', },
                { name: '#лицо', },
                { name: '#глаза', },
                { name: '#спина', },
                { name: '#палец', },
                { name: '#ладонь', },
                { name: '#колено', },
                { name: '#локти', },
            ],
        }
    },
    directives: {
        mask,
        money: VMoney,
    },
    inheritAttrs: false,
    components: {
        Multiselect,
        WizardContainer,
        Hr,
        Tooltip,
        TextArea,
        UploaderPhoto,
        // Step1,
        // Step2,
        StepBase
    },
    methods: {
        handleFinished(data) {
            typeof alert === 'function' && alert(JSON.stringify(data));
        },
        getTransition(backwarding) {
          if (backwarding) {
            return translateFadeBackwarding;
          } else {
            return translateFade;
          }
        },
    },
}
</script>


<style lang="scss" scoped>
@include data-inputs;
@include radio;

.Data-Item, .Data-Row {
    display: block;
}

.Data-Row {
    height: unset;
}

.Data-Singleselect {
    max-width: 100%;
}

.Duration-Value {
    background: var(--palette-dark-regular);
    text-transform: uppercase;
    color: var(--palette-blue);
    display: inline-block;
    font-size: 13px;
    padding: 1em 2em;
    border-radius: 4px;
    font-weight: 700;
    user-select: none;
}

.TextArea {
    width: 100%;
    height: 100px;
}

.PaymentValue {
    max-width: 110px;
    height: 42px;
    text-align: right;
    background-color: rgba(0, 0, 0, .75);
    border-radius: 2px;
    border: none;
    color: var(--palette-green);
    font-weight: 700;
    text-shadow: 0 0 5px var(--palette-green);
    font-size: 12px;
    letter-spacing: .1ex;
    padding: 10px 15px;
    border: 2px solid rgba(0, 0, 0, .75);
    margin-left: 10px;
    &:focus {
        outline: none;
        border-color: var(--palette-dark-light);
    }
    @include respond-to(handlers) {
        text-align: center; 
    }
}

::v-deep.Data-Multiselect-Tags {
    // margin-bottom: 120px;
    @include vue-multiselect;
    .multiselect {
        @include trans-ease-out;
    }
    
    .multiselect--active {
        margin-bottom: 120px;
    }
    .multiselect__content-wrapper {
        max-height: 120px !important;
    }
}
    
.tooltip {
    vertical-align: bottom;
}

.Wizard-Content {
    width: 100%;
    padding: 30px;
    text-align: left;
    font-family: 'Jura', sans-serif;
    @include trans-ease-out;
    .Data-Label {
        display: block;
        margin-bottom: 20px;
    }

}
    
    
.ModalContent {
    background-color: #060b0f;
    height: 100%;
    color: #fff;
    font-family: 'Jura', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    letter-spacing: .1ex;
    @include respond-to(large-screens) {
        font-size: 13px;
    }
    .vm--overlay {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.5);
    }
        
    .vm--modal {
        background-color: var(--palette-dark-regular);
        box-shadow: 0 20px 60px -2px rgba(0, 0, 0, 0.5)
    }
}

.Close-Modal {
    position: absolute;
    right: 0;
    width: 54px;
    height: 54px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .icon {
        @include trans-ease-out;
    }
    &:hover {
        background-color: rgba(0,0,0,.1);
        .icon {
            fill: var(--palette-pink);
        }
    }
}

.Modal-Header {
    background-color: var(--palette-dark-light);
    padding: 15px 24px;
    position: relative;
    font-size: 16px;
    overflow: hidden;
    // border-radius: 2px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
        text-align: center;
        letter-spacing: .1ex;
    }
}

.Modal-Body {
    // padding: 2em;
}

.Modal-Footer {
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--palette-dark-light);
}

.Modal-Cancel {
    text-transform: uppercase;
    color: var(--palette-blue);
    font-weight: 700;
    letter-spacing: .1ex;
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: .75;
    }
}


::v-deep.Dropdown {
    // width: max-content;
    // max-width: 220px;
    cursor: pointer;
    margin-bottom: 0px;
    .multiselect__option {
        background: var(--palette-dark-light);
        padding: 10px 20px;
        font-size: 12px;
        &.multiselect__option--highlight,
        &.multiselect__option--selected {
            background: var(--palette-dark-lighter);
        }
        &.multiselect__option--selected {
            opacity: 1;
            color: var(--palette-blue);
        }
        span {
            text-transform: uppercase;
        }
        .date {
            color: var(--palette-blue);
            font-size: 10px;
            font-weight: 700;
            margin-left: 10px;
            letter-spacing: .1ex;
            opacity: .5;
        }
    }
    .multiselect__option--selected {
        font-weight: normal;
    }

    .multiselect__tags {
        background: var(--palette-dark-light);
        border: none;
        padding-left: 0;
        padding-top: 15px;
        padding-right: 54px;
    }
    .multiselect__input, 
    .multiselect__single {
        background: var(--palette-dark-light);
        color: #fff;
        text-transform: uppercase;
    }
    .multiselect__single {
        padding-right: 20px;
        padding-left: 20px;
        margin-bottom: 15px;
        font-size: 11px;
        label {
            opacity: .5;
            font-size: 11px;
        }
        .date {
            color: var(--palette-blue);
            font-size: 10px;
            font-weight: 700;
            margin-left: 10px;
            letter-spacing: .1ex;
        }
    }
    .multiselect__select {
        @include flex-ja_center;
        // height: 64px;
        height: 100%;
        width: 50px;
        // background: var(--palette-dark-medium);
        background: #1e2938;

        &:before {
            @include trans-ease-out;
            display: inline-block;
            top: unset;
            right: unset;
        }
    }
    
    .multiselect__content-wrapper {
        border: none;
        background: none;
        background: transparent;
        max-height: 120px !important;
        scrollbar-color: #474C50 #091016;
        scrollbar-width: thin;
        border-color: transparent;
        &::-webkit-scrollbar-track {
          background: transparent;
          transition: border-color .33s ease, opacity .5s ease-out;
        }
        &::-webkit-scrollbar {
          width: 4px;
          height: 0;
          transition: border-color .33s ease, opacity .5s ease-out;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 30px;
          border-right-style: inset;
          border-right-width: 100vh;
          border-color: inherit;
          transition: border-color .45s ease;
        }
        &:hover {
          border-color: rgba(255,255,255,.16);
        }
    }

    .multiselect__content {
        margin-top: 0px;
    }

    // 
    &.multiselect--active {
        .multiselect__select {
            transform: none;
            &:before {
                transform: rotate(180deg);
            }
        }
    }

    @include respond-to(handlers) {
        .multiselect__tags {
            padding-top: 10px;
        }
        .multiselect__single {
            margin-bottom: 10px;
            padding-left: 10px;
            margin-right: 10px;
        }

        sup.date,
        span.status {
            white-space: nowrap;
        }

        .multiselect__single,
        .multiselect__option {
            font-size: 10px;
        }

        .multiselect__option {
            padding: 10px;
        }
    }
}

</style>