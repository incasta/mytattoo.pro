<template lang="pug">
    
    .ModalBlockFrame
        span.label {{ label }}
        span.currentBalance {{ currentBalance }} 
            span.currency ₽ 
        span.invoicedAmount -{{ invoicedAmount }} 
            span.currency ₽ 


</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: {
        label: {
            type: String,
            required: true
        },
        currentBalance: {
            type: String,
            required: false
        },
        invoicedAmount: {
            type: String,
            required: false
        },
        
    },
}
</script>

<style lang="scss" scoped>

.ModalBlockFrame {
    background-color: var(--palette-black-bg);
    padding: 1em 2em;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    margin-bottom: 20px;
    .label {
        color: var(--palette-blue);
        margin-right: 20px;
    }
    
    .currentBalance,
    .invoicedAmount {
        font-weight: 700;
        color: var(--palette-green);
        text-shadow: 0 0 5px var(--palette-green);
    }
    .invoicedAmount {
        opacity: .5;
        font-size: 12px;
        margin-left: 10px;
    }
    @include respond-to (handlers) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        .label {
            margin-right: 0;
        }
        .invoicedAmount {
            margin-left: 0;
        }
        .currentBalance {
            font-size: 18px;
        }
    }    
}


</style>