<template lang="pug">
    
    multiselect.Dropdown(
    v-model="value", 
    :close-on-select="true"
    :show-labels="false" 
    :placeholder="`{{ placeholder }}`", 
    :options="options", 
    :searchable="false", 
    :preselect-first="true", 
    :allow-empty="false"
    )
        template(slot="noOptions")
            span {{ noOptions }}



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
        },
        placeholder: {
            type: String,
            required: false,
            default: "Выберите...",
        },
        noOptions: {
            type: String,
            required: false,
            default: "Не выбрано",
        },
    },
    components: {
        Multiselect,
    },

}
</script>

<style lang="scss" scoped>

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