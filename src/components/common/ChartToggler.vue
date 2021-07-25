<template lang="pug">
    
    .ChartToggler
        button.ChartToggler-Item(@click="ChartToggler" :class="{ current: !toggler }") Мой регион
        span •
        button.ChartToggler-Item(@click="ChartToggler" :class="{ current: toggler }") Мой город

</template>

<script>
export default {
    data() {
        return {
            toggler: false,
        }
    },
    methods: {
        ChartTogglerRegion () {
            if (this.toggler == true) {
                this.toggler = !this.toggler;
            }
        },
        ChartTogglerCity () {
            if (this.toggler == false) {
                this.toggler = !this.toggler;
            }
        },
        ChartToggler () {
            this.toggler = !this.toggler;
        },
    }
}
</script>

<style lang="scss" scoped>

.ChartToggler {
    // margin: 20px 0;
    margin-top: 40px;

    span {
        margin: 0 10px; 
    }
}

.ChartToggler-Item {
    background-color: transparent;
    border: none;
    color: #fff;
    box-shadow: none;
    text-transform: uppercase;
    @include trans-ease-out;
    cursor: pointer;
    font-weight: 700;
    &:hover {
        opacity: .75;
    }

    &.current {
        color: var(--palette-blue);
        user-select: none;
        touch-action: none;
        cursor: default;
        pointer-events: none;
    }
}

</style>