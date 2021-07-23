<template lang="pug">
    
    StepBase(@active="activeHandler" @finished="finished")
        .Wizard-Content
            .Data-Row
                span.Data-Label Сколько вам лет? *
                    .Data-Label-Desc Если вам нет 18 лет, мастер может попросить разрешение родителя или опекуна
                .Radio-Group
                    label.Radio-Item
                        input(type="radio" name="Radio-Item-1")
                        span.Radio
                        span Младше 16
                    label.Radio-Item
                        input(type="radio" name="Radio-Item-1")
                        span.Radio
                        span 16-17 лет
                    label.Radio-Item
                        input(type="radio" name="Radio-Item-1")
                        span.Radio
                        span Старше 18 лет

</template>

<script>
import StepBase from "@/components/RenderlessWizard/StepBase.vue";

export default {
    components: {
        StepBase,
    },
    methods: {
      finished() {
        console.log('step 2 has finished');
        
      },
      activeHandler(active) {
        if (active) {
          console.log('step 2 has activated');
        }
      },
    },
}
</script>

<style lang="scss" scoped>
@include radio;
</style>