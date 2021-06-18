<template lang="pug">
    
    label.SearchInput
        input(type="text" placeholder="Поиск...")
        app-icon(name="search" size="14")

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.SearchInput {
    position: relative;

    input {
        @include trans-ease-out;
        border-radius: 100px;
        background-color: var(--palette-dark-regular);
        border: 1px solid transparent;
        outline: none;
        color: #fff;
        font-size: 12px;
        padding: 8px 15px 8px 35px;
        &:active, &:focus {
            border: 1px solid var(--palette-dark-lighter);
            ~ .icon {
                opacity: 1;
            }
        }
    }

    .icon {
        @include trans-ease-out;
        position: absolute;
        z-index: 2;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        opacity: .5;
    }

}

</style>