<template lang="pug">
    
    main
        .container
            .Row
                .SideBar
                    MasterProfileSide
                        template(#TopButton)
                            Button(text="Написать отзыв" icon="edit-alt" href="/master/master-feedbacks/create-feedback" :iconSize="15")
                .Main
                    .content
                        .Page-Block
                            .Page-Block-Header
                                h2 Вергунов Алексей "WARHAMMER"

</template>

<script>
import MasterProfileSide from '@/components/MasterPublicProfile/MasterProfileSide.vue';
import Button from '@/components/common/Button.vue';

export default {
    components: {
        MasterProfileSide,
        Button

    }
}
</script>

<style lang="scss" scoped>
@include blockUI;


</style>