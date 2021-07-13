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
                        //- WizardManager(v-slot="scope" lazy @finished="handleFinished")
                        //-     WizardContainer(:scope="scope")
                        //-         WizardStep
                        //-             multiselect.Dropdown(
                        //-             v-model="value", 
                        //-             :close-on-select="true"
                        //-             :show-labels="false" 
                        //-             :placeholder="`Не выбрано`", 
                        //-             :options="options", 
                        //-             :searchable="false", 
                        //-             :preselect-first="true", 
                        //-             :allow-empty="false"
                        //-             )
                        //-                 template(slot="noOptions")
                        //-                     span Нет доступных услуг

                        //-         WizardStep
                        //-             div step content
                        //-         WizardStep
                        //-             div step content
                        //-         WizardStep
                        //-             div step content

</template>


<script>
import HeaderSection from '@/components/HeaderSection.vue';
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import Multiselect from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.min.css";


// import WizardContainer from '@/components/RenderlessWizard/wizard-container.vue';
// import '@/components/RenderlessWizard/global.css';
// import '@/components/RenderlessWizard/transitions.css';

import ModalMasterRequest from '@/components/Modals/ModalMasterRequest.vue'

export default {
    // data () {
    //     return {
    //         value: null,
    //         options: ['1', '2', 'asd']
    //     }
    // },

    methods: {
        // handleFinished(data) {
        //     typeof alert === 'function' && alert(JSON.stringify(data));
        // },

        showModalMasterRequest() {
            this.$modal.show(
                ModalMasterRequest, 
                {},
                { height: "auto", shiftY: 0.35,  }
            )
        },

        // hide () {
        //   this.$modal.hide('ModalMasterRequest');
        // }
    },

    // mount () {
    //     this.show()
    // },

    components: {
        SideNavigation,
        HeaderSection,
        Multiselect,
        // WizardContainer,
    },
    
}
</script>


<style lang="scss" scoped>
@include blockUI;

</style>
