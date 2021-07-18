<template lang='pug'>
    
    main
        HeaderSection
        .container
            .Row
                .SideBar
                    SideNavigation

                .Main
                    .content
                        div vue-renderless-wizard
                        button(@click="showModalMasterRequest") SHOW

</template>


<script>
import HeaderSection from '@/components/HeaderSection.vue';
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
// import Multiselect from 'vue-multiselect';
// import "vue-multiselect/dist/vue-multiselect.min.css";

import ModalMasterRequest from '@/components/Modals/ModalMasterRequest.vue'

export default {

    methods: {
        showModalMasterRequest() {
            this.$modal.show(
                ModalMasterRequest, 
                {},
                { height: "auto", shiftY: 0.35, reset: true, scrollable: true, styles: "", classes: "modalMasterRequest" }
            )
        },

        // hide () {
        //   this.$modal.hide('ModalMasterRequest');
        // }
    },

    mount () {
        this.show()
    },

    components: {
        SideNavigation,
        HeaderSection,
        // Multiselect,
        // WizardContainer,
    },
    
}
</script>


<style lang="scss" scoped>
@include blockUI;
// @include vue-multiselect;

</style>
