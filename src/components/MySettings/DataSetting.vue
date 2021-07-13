<template lang="pug">
    
    .DataSetting
        label.Data-Item
            span.Data-Label Пароль 
        .DataSetting-Content
            .DataSetting-Content-Data {{ data }}

            slot(name="CollapseButton")
                .CollapseButton(@click="show = !show" :class="{ blue: !show, pink: show }")
                    span(v-if="!show") {{ CollapseButtonText }}
                    span(v-if="show") Отмена

        .Collapse-Area(v-if="show")
            slot(name="collapse")
                


</template>

<script>

export default {
    data () {
        return {
            show: false,
        }
    },
    components: {

    },
    props: {
        data: {
            type: String,
        },
        CollapseButtonText: {
            type: String,
            default: "Изменить",
            required: false,
        }
    }
}
</script>


<style lang="scss" scoped>
@include data-inputs;

.DataSetting {
    &:not(:last-child) {
        margin-bottom: 40px;
    }
}

.DataSetting-Content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.DataSetting-Content-Data {
    font-size: 13px;
    opacity: .5;    
}

.Collapse-Area {
    margin-top: 20px;
}

.CollapseButton {
    cursor: pointer;
    padding: 1em 1.75em;
    font-size: 13px;
    border-radius: 4px;
    @include trans-ease-out;
    background-color: var(--palette-dark-light);
    &.blue {
        color: var(--palette-blue);
        &:hover {
            text-shadow: 0 0 6px var(--palette-blue);
            background-color: var(--palette-dark-lighter);
        }
    }
    &.pink {
        color: var(--palette-pink);
        &:hover {
            text-shadow: 0 0 6px var(--palette-pink);
            background-color: var(--palette-dark-lighter);
        }
    }
}

</style>