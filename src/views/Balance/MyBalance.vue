<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                    template(#panel)
                        .Side-Panel
                            .Side-Panel-Content
                                div Получите дополнительные привилегии с PRO-аккаунтом
                
            .Main
                .content
                    .Page-Block.w-30
                        .Page-Block-Header
                            h2 Текущий баланс
                        .Page-Block-Content
                            .label Номер Вашего счета
                            .account-number(v-clipboard:copy="'Номер счета: №' + accountNumber" v-clipboard:success="onCopy" v-clipboard:error="onError" :content="`<span>Скопировать номер счета</span>`" v-tippy="{ delay: [300, 300], arrow : true, arrowType : 'round', theme: 'custom', interactive : true, }") 
                                span {{ accountNumber }}
                                app-icon(name="copy" size="12")
                            Hr
                            .label Текущий баланс
                            .current-balance 
                                span {{ currentBalance }} 
                                span.currency ₽ 

                    .Page-Block
                        .Page-Block-Header
                            h2 Пополнение баланса
                        .Page-Block-Content
                            .Deposit-Payment
                                label
                                    span.input-label Пополнить баланс на: 
                                    input.PaymentValue(v-model="paymentValue" type="text" placeholder="1000"  value="1000" v-money="money")
                                    .input-range 1000 ₽ — 100.000 ₽
                                    
                                Hr
                                .SumTemplate-List
                                    div(v-for='template in templates' :key="template.id" class="SumTemplate") {{ template.text }}
                                Button(:text="`Пополнить на ${paymentValue}`")
                                

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import Hr from '@/components/common/Hr.vue';
import Button from '@/components/common/Button.vue';
import {mask} from 'vue-the-mask';
import {VMoney} from 'v-money';


export default {
    name: 'FavPhoto',
    components: {
        SideNavigation,
        Hr,
        Button,
    },
    directives: {
        mask,
        money: VMoney,
    },
    data () {
        return {
            paymentValue: "1000",
            money: {
                suffix: ' ₽',
                masked: false,
                precision: 0,
                thousands: "",
            },
            accountNumber: "231234",
            currentBalance: "1200",
            templates: [
                {
                    value: "10000",
                    text: "Макс."
                },
                {
                    value: "500",
                    text: "500 ₽"
                },
                {
                    value: "1000",
                    text: "1000 ₽"
                },
                {
                    value: "2000",
                    text: "2000 ₽"
                },
            ]
        }
    },
    methods: {
        onCopy: function (e) {
            alert('Номер счета скопирован: ' + e.text)
        },

        onError: function (e) {
            alert('Что-то пошло не так, попробуйте снова')
            console.log(e);
        }
    }
}
</script>

<style lang="scss" scoped>

@include blockUI;

.content {
    display: flex;
    @include respond-to(medium-screens) {
        flex-wrap: wrap;
    }
}

.Page-Block {
    &.w-30 {
        background-color: var(--palette-dark-medium);
        width: 100%;
        max-width: 300px;
        @include respond-to(medium-screens) {
            margin-left: auto;
            margin-right: auto;
        }
        .Page-Block-Content {
            text-align: center;
        }
        ~ .Page-Block {
            margin-top: 0;
            margin-left: 20px;
            width: 100%;
            @include respond-to(large-screens) {
                margin-top: 20px;
            }
            @include respond-to(medium-screens) {
                width: 100%;
                margin-left: 0;
            }
            .Page-Block-Content {
                text-align: center;
            }
        }
    }
}

.label {
    color: #fff;
    opacity: .5;
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: .2ex;
}

.account-number {
    display: inline-flex;
    cursor: pointer;
    color: var(--palette-blue);
    font-weight: 700;
    @include trans-ease-out;
    padding: 0.5em 1em;
    border-radius: 4px;
    background-color: var(--palette-dark-light);
    &:hover {
        opacity: .7;
    }
    .icon {
        @include trans-ease-out;
        display: inline-block;
        vertical-align: top;
        fill: #fff;
        opacity: .5;
        margin-left: 5px;
    }
    > span {
        &:before {
            content: '№';
        }
    }
}

.current-balance {
    display: inline-flex;
    color: var(--palette-green);
    text-shadow: 0 0 5px var(--palette-green);
    font-size: 22px;
    font-weight: 700;
    padding: 0.5em 1em;
    border-radius: 4px;
    background-color: var(--palette-dark-light);
    .currency {
        margin-left: 5px;
    }
}

.SumTemplate-List {
    @include flex-ja_center;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.SumTemplate {
    @include trans-ease-out;
    border-radius: 4px;
    background-color: var(--palette-dark-light);
    padding: 0.5em 1em;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    margin: 4px;
    &:hover {
        color: var(--palette-blue);
        background-color: var(--palette-dark-lighter);
    }
}

::v-deep.Button-Default {
    border-radius: 4px;
    overflow: hidden;
    display: inline-flex;
    color: var(--palette-yellow);
    text-shadow: 0 0 0px var(--palette-yellow);
    @include respond-to(handlers) {
        padding: 1.25em 1em;
        width: 100%;
        text-align: center;
        justify-content: center;
    }
    &:hover {
        text-shadow: 0 0 5px var(--palette-yellow);
        .Button-Icon {
            .icon {
                animation: swipe-right .3s ease alternate;
                filter: drop-shadow(0 0 10px var(--palette-yellow));
            }
        }
    }
    .Button-Icon {
        background: var(--palette-yellow);
        @include respond-to(handlers) {
            display: none; 
        }
        .icon {
            fill: var(--palette-dark-regular);
        }
    }
}

.Deposit-Payment {
    label {
        position: relative;
        display: inline-block;
        margin-bottom: 20px;
        @include respond-to(handlers) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    
}

.input-label {
    font-weight: 700;
    color: var(--palette-blue);
    font-size: 14px;
    text-transform: uppercase;
    margin-right: 30px;
    @include respond-to(handlers) {
        margin-right: 0;
        margin-bottom: 20px;
    }
}

.input-range {
    opacity: .3;
    font-size: 12px;
    margin-left: auto;
    position: absolute;
    right: 0;
    margin-top: 5px;
    letter-spacing: 0.2ex;
    @include respond-to(handlers) {
        position: relative;
        margin-left: 0;
    }
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
    &:focus {
        outline: none;
        border-color: var(--palette-dark-light);
    }
    @include respond-to(handlers) {
        text-align: center; 
    }
}


</style>