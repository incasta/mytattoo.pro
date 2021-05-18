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
            span {{ option.name }} - 
            span {{ option.status }}
            span {{ option.date }}
        template(slot="noOptions")
            span Нет доступных работ


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
    .multiselect__option {
        background: #0D1723;
    }
    .multiselect__option--selected {
        font-weight: normal;
    }
    .multiselect__tags {
        background: #0D1723;
    }
    .multiselect__input, 
    .multiselect__single {
        background: #0D1723;
        color: #fff;
        text-transform: uppercase;
    }
}

</style>