<template lang="pug">
    
    a.PreviewButton(href="#" content="Предпросмотр публикации" v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}") Предпросмотр

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.PreviewButton {
    background-color: var(--palette-dark-light);
    display: block;
    padding: 12px 20px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    color: var(--palette-blue);
    // text-shadow: 0 0 5px var(--palette-blue);
    border-radius: 4px;
    @include trans-ease-out;
    &:hover {
        // opacity: 0.85;
        background-color: var(--palette-dark-lighter);
        text-shadow: 0 0 5px var(--palette-blue);
    }
}

</style>