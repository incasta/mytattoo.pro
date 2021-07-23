<template lang="pug">
    
    .container
        .Row
            .Page-Block
                .Page-Block-Header
                    h2 Подтверждение телефона
                .Page-Block-Content
                    .Content-Row
                        .Data-Row
                            label.Data-Item
                                span.Data-Label Код был отправлен на 
                                    span.phone +7 987 234 32 88
                                CodeInput(:loading="false" class="Verification-Input" v-on:change="onChange" v-on:complete="onComplete" :fieldWidth="30" :fieldHeight="40")
                            a.Verification-Resend(href="#")
                                app-icon(name="refresh" size="16") 
                                span Выслать код повторно

                    .Page-Block-Footer
                        span.Footer-Extra-Link Уже есть аккаунт? 
                            router-link(:to="'/authorization'") Войти

                        .Button-Wrap(@click="showModalCongratulationsReg")
                            Button(text="Подтвердить" icon="arrow-small-right")
                
</template>

<script>
import CodeInput from "vue-verification-code-input";
import Button from '@/components/common/Button.vue';
import ModalCongratulationsReg from '@/components/Modals/Master/ModalCongratulationsReg.vue';

export default {
    components: {
        CodeInput,
        Button
    },
    methods: {
        onChange(v) {
          console.log("onChange ", v);
        },
        onComplete(v) {
          console.log("onComplete ", v);
        },

        showModalCongratulationsReg() {
            console.log('ModalCongratulationsReg');
            this.$modal.show(
                ModalCongratulationsReg,
                { },
                { height: 'auto', shiftY: 0.35, reset: true, scrollable: true, styles: "", classes: "ModalCongratulationsReg"  }
            )
        },
    }
}
</script>

<style lang="scss" scoped>
@include Verification-Input;
@include blockUI;
@include data-inputs;

.Row {
    justify-content: center;
}

.Page-Block {
    width: 470px;
    max-width: 100%;
}

.Data-Item {
    display: block;
}

.Data-Row {
    height: unset;
    display: block;
}

.Data-Label {
    display: block;
    margin-bottom: 10px;
}

.Content-Row {
    display: block;
}

.Verification-Resend {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--palette-blue);
    margin: 20px 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 13px;
    .icon {
        margin-right: 10px;
        fill: var(--palette-blue);
        @include trans-ease-out;
    }
    &:hover {
        .icon {
            transform: rotate(90deg);
        }        
    }
}


.Page-Block-Footer {
    display: flex;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid var(--palette-dark-lighter);
    .Button-Default {
        margin-left: auto;
    }
    @include respond-to(handlers) {
        display: block;
    }
}

.Button-Wrap {
    margin-left: auto;
    @include respond-to(handlers) {
        margin-top: 20px;
    }
}

::v-deep.Button-Default {
    
    .icon {
        fill: var(--palette-blue);
    }
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
    margin-right: 20px;
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

</style>