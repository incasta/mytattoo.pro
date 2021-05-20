<template lang="pug">
    
    multiselect.DropdownLarge(
    v-model="value", 
    track-by="name", 
    :show-labels="false" 
    placeholder="Нет доступных работ", 
    :options="options", 
    :searchable="false", 
    :allow-empty="false", 
    :custom-label="customItemName", 
    :preselectFirst="true", 
    :showLabels="false"
    )
        template(slot="singleLabel", slot-scope="{ option }")
            span.name {{ option.name }} - 
            span.status {{ option.status }}
            sup.date {{ option.date }}
        template(slot="noOptions")
            span Нет доступных работ
        template(slot="option", slot-scope="{ option }")
            span.name {{ option.name }} - 
            span.status {{ option.status }}
            sup.date {{ option.date }}



</template>

<script>
import Multiselect from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
    data () {
        return {
            value: null,
        }
    },
    props: {
        options: {
            type: Array,
            required: false,
        }
    },
    components: {
        Multiselect,
    },
    methods: {
        customItemName ({ name, status, date }) {
            return `${name} — ${status} ${date}`
        }
    },

}
</script>

<style lang="scss" scoped>

::v-deep.DropdownLarge {
    cursor: pointer;
    .multiselect__option {
        background: var(--palette-dark-light);
        padding: 20px;
        font-size: 14px;
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
        padding-top: 20px;
        padding-right: 64px;
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
        margin-bottom: 20px;
        font-size: 14px;
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
        width: 64px;
        background: var(--palette-dark-lighter);
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
    }

    .multiselect__content {
        margin-top: 5px;
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
            font-size: 12px;
        }

        .multiselect__option {
            padding: 10px;
        }
    }
}

</style>