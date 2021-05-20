<template lang="pug">
    
    .MasterProfileSide
        slot(name="TopButton")
        div master avatar
        

</template>

<script>
import Button from "@/components/common/Button.vue";

export default {
    components: {
        Button,
    }
}
</script>

<style lang="scss" scoped>

</style>