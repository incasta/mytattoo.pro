<template lang="pug">
    
    StepBase(@active="activeHandler" @finished="finished") Welcome to the first step

</template>

<script>
import StepBase from "@/components/RenderlessWizard/StepBase.vue";


export default {
    components: {
        StepBase,
    },
    methods: {
      finished() {
        console.log('step 1 has finished');
      },
      activeHandler(active) {
        if (active) {
          console.log('step 1 has activated');
        }
      },
    },
}
</script>

<style lang="scss" scoped>

</style>