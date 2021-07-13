<template lang="pug">
    
    .ModalContent
        //- "vue-js-modal": "^2.0.0-rc.3",
        .Modal-Header
            h2 Оставить заявку
            button.Close-Modal(@click="$modal.hide('ModalMasterRequest')")
                app-icon(name="cross" size="12")
        .Modal-Body
            WizardManager(v-slot="scope" lazy @finished="handleFinished")
                    WizardContainer(:scope="scope")
                        WizardStep
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
                                    
                        WizardStep(v-if="value == '1'")
                            div step content (v-if="value == '1'")
                        WizardStep(v-if="value == '1'")
                            div step content a
                        WizardStep(v-if="value == '1'")
                            div step content



</template>


<script>
import Multiselect from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.min.css";
import WizardContainer from '@/components/RenderlessWizard/wizard-container.vue';
import '@/components/RenderlessWizard/global.css';

export default {
    name: "ModalMasterRequest",
    data () {
        return {
            value: null,
            options: ['1', '2', 'asd']
        }
    },
    components: {
        Multiselect,
        WizardContainer,
    },
    methods: {
        handleFinished(data) {
            typeof alert === 'function' && alert(JSON.stringify(data));
        },
    },
}
</script>


<style lang="scss" scoped>


.ModalContent {
    background-color: #060b0f;
    height: 100%;
    color: #fff;
    font-family: Jura, sans-serif;
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
    padding: 2em;
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
        background: var(--palette-dark-regular);
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