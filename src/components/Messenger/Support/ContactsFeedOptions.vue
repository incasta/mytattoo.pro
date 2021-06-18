<template lang="pug">
    
    .ContactsFeedOptions
        DropdownPopup
            template(#trigger)
            template(#content)
                .ContactsFeedSort
                    label Отсортировать по категории
                    multiselect.ContactsFeedSortDropdown(
                    v-model="value", 
                    :close-on-select="true"
                    :show-labels="false" 
                    placeholder="Не выбрано", 
                    :options="options", 
                    :searchable="false", 
                    :preselect-first="true", 
                    :allow-empty="false"
                    )
                
                .ContactsFeed-Filters
                    .ContactsFeed-Filter
                        Toggler(label="Показывать закрытые тикеты" :checked="true" :reverse="true")


</template>

<script>
import DropdownPopup from "@/components/common/DropdownPopup.vue";
import Toggler from "@/components/common/Toggler.vue";
import Multiselect from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.min.css";


export default {
    data () {
        return {
            value: '',
            options: ['Не выбрано', 'Вопросы по работе сервиса', 'Предложения и пожелания', 'Жалобы', 'Финансовые вопросы', 'Другое' ]
        }
    },
    components: {
        Multiselect,
        DropdownPopup,
        Toggler,
    }
}
</script>


<style lang="scss" scoped>

.ContactsFeedOptions {

}

::v-deep.DropdownPopup {
    .DropdownPopup-Content {
        width: 100%;
        padding: 15px 10px;
    }
}

.ContactsFeedSort {
    text-align: left;
    label {
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.1ex;
        color: var(--palette-blue);
        text-transform: uppercase;
        margin-bottom: 10px;
        display: block;
    }
}

::v-deep.ContactsFeedSortDropdown {
    cursor: pointer;
    margin-bottom: 0px;
    @include respond-to(medium-screens) {
        max-width: 320px;
    }

    .multiselect__option {
        background: var(--palette-dark-light);
        padding: 10px 20px;
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

.ContactsFeed-Filters {
    margin-top: 20px;
    &:before {
        content: '';
        width: 100%;
        background-color: var(--palette-white);
    }
}

.ContactsFeed-Filter {
    &:not(:first-child) {
        margin-top: 10px;
    }
}

::v-deep.Toggler-Wrap {
    justify-content: flex-start;
    float: left;
    .Data-Label {
        text-transform: uppercase;
        color: var(--palette-pink);
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.1ex;
    }
}

</style>