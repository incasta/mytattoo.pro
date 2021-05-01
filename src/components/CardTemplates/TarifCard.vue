<template lang="pug">
    
    .TarifCard
        div {{ name }}
        div {{ duration }}
        div {{ current }}
        div {{ hit }}
        div {{ price }}
        div {{ points }}

</template>

<script>
export default {
    name: "TarifCard",
    props: {
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        current: {
            type: Boolean,
            required: false,
            default: false
        },
        hit: {
            type: Boolean,
            required: false,
            default: false
        },
        price: {
            type: String,
            required: true,
        },
        points: {
            type: String,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>

</style>

