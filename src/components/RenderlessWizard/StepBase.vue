<template lang="pug">
    
    WizardStep(v-slot="scope" :transition="getTransition" v-bind="$attrs" v-on="$listeners")
        div(v-bind="$attrs.class" class="fill Wizard-Content")
            slot(v-bind="scope")

</template>

<script>
// import { WizardStep } from './entry/entry';
import { translateFade, translateFadeBackwarding } from '@/components/RenderlessWizard/transitions';

export default {
  components: {
    // WizardStep,
  },
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      forwarding: true,
    };
  },
  methods: {
    getTransition(backwarding) {
      if (backwarding) {
        return translateFadeBackwarding;
      } else {
        return translateFade;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>