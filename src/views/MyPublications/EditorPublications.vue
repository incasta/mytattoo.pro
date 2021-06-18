<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
                    template(#ActionButtons)
                        ActionButton(name="Редактор" link="editor")
                
            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Редактор
                        .Page-Block-Content
                            WorkEditor(:imageEditable="true")

</template>


<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import WorkEditor from "@/components/MyPublications/WorkEditor.vue";
import ActionButton from '@/components/Navigation/SideNavigation/ActionButton.vue';

export default {
    
    components: {
        WorkEditor,
        SideNavigation,
        ActionButton,
    }

}
</script>


<style lang="scss" scoped>

</style>
