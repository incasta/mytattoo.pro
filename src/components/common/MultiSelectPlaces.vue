<template lang="pug">
    

    .Data-Multiselect-Tags
        .Data-Label 
            span(v-if="name = 'places'") Укажите расположение
            Tooltip(content="Вы можете выбрать до 5 тегов. Чтобы удалить лишние выбранные теги, кликните на крестик")
        .MultiSelect
            multiselect(
            v-if="name == 'places' "
            v-model="value",
            placeholder="Начните писать или выберите из списка",
            label="name",
            track-by="name",
            :show-labels="false",
            :options="options",
            :multiple="true",
            :taggable="false",
            :max="5",
            :hide-selected="true"
            )

</template>


<script>
import Multiselect from 'vue-multiselect';
import Tooltip from '@/components/common/Tooltip.vue';

export default {
    components: {
        Multiselect,
        Tooltip,
    },
    data() {
        return {
            value: [],
            options: [
                { name: 'Рука', },
                { name: 'Нога', },
                { name: 'Шея', },
                { name: 'Лицо', },
                { name: 'Плечо', },
                { name: 'Палец', },
                { name: 'Голова', },
                { name: 'Спина', },
            ],
        }
    },
}
</script>


<style lang="scss" scoped>

// @include vue-multiselect;

.Data-Label {
    margin-right: auto;
    color: var(--palette-blue);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .2ex;
    margin-bottom: 10px;
    display: block;
    @include respond-to(handlers) {
      font-size: 10px;
    }
}

.MultiSelect {
    max-width: 600px;
    margin-bottom: 20px;
    @include respond-to(medium) {
        max-width: 400px;
    }
    @include respond-to(tablets-screens) {
        max-width: 100%;
        width: 100%;
    }
}

</style>