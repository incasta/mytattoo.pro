<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation

            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Настройки
                        .Page-Block-Content
                            .Content-Row
                                .Content-Column
                                    .Column-Heading
                                        h3 Изменить пароль
                                    .Data-Row
                                        label.Data-Item
                                            span.Data-Label Пароль
                                            input.Data-Input(type="text" placeholder="Имя" value="Алексей")



</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';

export default {
    components: {
        SideNavigation,
    }
}
</script>

<style lang="scss" scoped>
@include data-inputs;

.Data-Row {
    height: unset;
    margin-bottom: 20px;
    .Data-Item {
        flex-direction: column;
        align-items: flex-start;
        .Data-Input {
            margin-left: 0;
            margin-top: 10px;
        }
    }
}



</style>