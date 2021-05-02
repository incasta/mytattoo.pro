<template lang="pug">
    
    .TarifCard(:class="{ hit: hit === true,  current: current === true }")
        .badge
            span.hit(v-if="hit === true") Хит
            span.current(v-if="current === true") Текущий тариф
        div {{ name }}
        div Срок в днях {{ duration }}
        div {{ current }}
        div {{ hit }}
        div {{ price }}
        div {{ points }}
        div Одним платежом {{ totalPrice }}
        

</template>

<script>
export default {
    name: "TarifCard",
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

.TarifCard {
    position: relative;
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 280px;
    height: 300px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
    margin: 10px;
    padding: 20px;
    padding-top: 60px;
    background-color: var(--palette-dark-light);
    border-radius: 4px;
    &:hover {
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
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
            background-color: var(--palette-pink);
            padding: .5em .8em;
            letter-spacing: .4ex;
            border-radius: 100px;
            font-weight: 700;
        }
        .current {
            border-radius: 100px;
            border: 2px solid var(--palette-blue);
            color: var(--palette-blue);
            padding: .5em .8em;
            letter-spacing: .4ex;
        }
    }
}

</style>

