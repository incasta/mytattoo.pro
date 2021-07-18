<template lang="pug">
    
    router-view
        template(#modal)
            ModalWarning(title="Подтвердите действие")
                template(#modalContent)
                    ModalBlockFrame(label="Списание средств:" :currentBalance="2950" :invoicedAmount="2840")
                template(#modalText)
                    p Вы уверены, что хотите оплатить тариф  
                        span.blue
                            strong ‘4 месяца’ 
                        | ? 
                template(#modalButtonAccept)
                    Button(text="Оплатить" icon="arrow-small-right")

</template>

<script>
import ModalWarning from "@/components/Modals/ModalWarning.vue";
import ModalBlockFrame from "@/components/Modals/ModalBlockFrame.vue"
import Button from "@/components/common/Button.vue";

export default {
    components: {
        ModalWarning,
        ModalBlockFrame,
        Button,
    }
}
</script>

<style lang="scss" scoped>

p {
    span {
        &.blue {
            color: var(--palette-blue);
        }
        &.pink {
            color: var(--palette-pink);
        }
    }
    &:not(:first-child) {
        margin-top: 20px;
    }
}

::v-deep.Modal-Warning {
    .Button-Default {
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
}
    

</style>