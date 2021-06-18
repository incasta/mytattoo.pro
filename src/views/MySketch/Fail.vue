<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                    template(#ActionButtons)
                        ActionButton(name="Добавить татуировку" link="new-tattoo")
                
            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Добавление новой татуировки
                        .Page-Block-Content
                            Fail

</template>


<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import Fail from "@/components/MyTattoo/Fail.vue";
import ActionButton from '@/components/Navigation/SideNavigation/ActionButton.vue';

export default {
    
    components: {
        Fail,
        SideNavigation,
        ActionButton,
    }

}
</script>


<style lang="scss" scoped>

</style>
