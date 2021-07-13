<template lang="pug">
    
    .TarifCard(:class="{ hit: hit === true,  current: current === true }")
        .badge
            span.hit(v-if="hit") Хит
            span.current(v-if="current") Текущий тариф
            span.casual(v-if="!hit && !current") Тариф
        .Tarif-Name {{ name }}
        .Tarif-Duration {{ duration }} дней 
        .Tarif-Price 
            span {{ price }}₽ / мес.
        .Tarif-TotalPrice Одним платежом {{ totalPrice }}₽
        .Tarif-Button
            Button.yellow.outline(text="Оплатить" )
        .Tarif-Points 
            span {{ points }} 
            app-icon.token(name="token" size="14") 
        
        

</template>

<script>
import Button from "@/components/common/Button.vue";
// import ModalWarning from '@/components/Modals/ModalWarning.vue';

export default {
    name: "TarifCard",
    components: {
        Button,

    },
    methods: {
        // ModalWarning () {
        //   this.$modal.show(ModalWarning, {
        //     text: 'Мой текст'
        //   },{
        //     draggable: true
        //   })
        // },
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        current: {
            type: Boolean,
            required: false,
            default: false
        },
        hit: {
            type: Boolean,
            required: false,
            default: false
        },
        price: {
            type: Number,
            required: true,
        },
        points: {
            type: String,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>
@include token;

.TarifCard {
    // @include trans-ease-out;
    transition: all .4s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 280px;
    // height: 330px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
    margin: 10px;
    padding: 20px;
    padding-top: 60px;
    background-color: var(--palette-dark-light);
    border-radius: 4px;
    &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, .4);
        .Tarif-Points {
            bottom: 15px;
            opacity: 1;
        }
    }
    &.hit {
        box-shadow: 0 10px 20px var(--palette-pink);
        border: 2px solid var(--palette-pink);
        .Tarif-Name {
            color: var(--palette-pink);
        }
        .Tarif-Price {
            span {
                color: var(--palette-pink);
                // text-shadow: 0 0 10px var(--palette-pink);
                text-shadow: none;
                &:after {
                    box-shadow: 0 -5px 15px var(--palette-pink);
                }
            }
            &:before {
                background-color: var(--palette-pink);
                box-shadow: 0 3px 5px var(--palette-pink);
            }
        }
    }
    &.current {
        &:hover {
            box-shadow: 0 10px 20px var(--palette-blue);
        }
        .Tarif-Name {
            color: var(--palette-blue);
        }
    }
    .badge {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        text-transform: uppercase;
        font-size: 10px;
        font-weight: 700;
        color: var(--palette-black-bg);
        .hit {
            position: relative;
            padding: .5em .8em;
            letter-spacing: .4ex;
            border-radius: 100px;
            font-weight: 700;
            &:after {
                content: '';
                position: absolute;
                background-color: var(--palette-pink);
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                z-index: -1;
                border-radius: 2px;
                transform: skew(-10deg);
                box-shadow: 0 5px 6px rgba(0,0,0, .4);
            }
        }
        .current {
            border-radius: 100px;
            border: 2px solid var(--palette-blue);
            color: var(--palette-blue);
            padding: .5em .8em;
            letter-spacing: .4ex;
        }
        .casual {
            color: #fff;
            background-color: rgba(0,0,0, .2);
            padding: .8em 1.2em;
            border-radius: 2px;
            opacity: .5;
            border-radius: 100px;
            letter-spacing: .3ex;
        }
    }
}

.Tarif-Name {
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.1ex;
    font-size: 18px;
    text-align: center;
}

.Tarif-Duration {
    text-transform: uppercase;
    opacity: .3;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.1ex;
}

.Tarif-Price {
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    position: relative;
    // margin: 3em 0;
    margin-top: 3em;
    margin-bottom: 1.5em;
    &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        height: 2px;
        width: calc(100% + 40px);
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--palette-dark-medium);
        
    }
    span {
        position: relative;
        z-index: 1;
        padding: 1.25em 2em;
        color: var(--palette-green);
        text-shadow: 0 0 10px var(--palette-green);
        &:after {
            content: '';
            display: block;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: skewX(-10deg);
            background-color: var(--palette-dark-medium);
            border-radius: 3px;
        }
    }
}

.Tarif-TotalPrice {
    font-size: 13px;
    text-align: center;
    margin-bottom: 3em;
}

.Tarif-Button {
    @include flex-ja_center;
    margin-bottom: 20px;
}

.Tarif-Points {
    @include trans-ease-out;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    color: var(--palette-blue);
    font-size: 14px;
    font-weight: 700;
    opacity: 0;
    @include respond-to (medium-screens) {
        opacity: 1;
        bottom: 15px;
    }
}

</style>

