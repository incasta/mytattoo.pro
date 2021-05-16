<template lang="pug">
    
    textarea.TextArea(:rows="rows" :cols="cols" :name="name" :placeholder="placeholder")

</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            required: false,
            default: "Введите текст...",
        },
        name: {
            type: String,
            required: false,
            default: "text",
        },
        rows: {
            type: Number,
            required: false,
            default: 7,
        },
        cols: {
            type: Number,
            required: false,
            default: 80,
        }
    }
}
</script>

<style lang="scss" scoped>

.TextArea {
    @include trans-ease-out;
    background: rgba(0, 0, 0, .75);
    color: #fff;
    border: none;
    border: 1px solid rgba(0, 0, 0, .75);
    padding: 1em;
    font-size: 13px;
    max-width: 100%;
    &::placeholder {
        color: rgba(255, 255, 255, .5);
        text-transform: uppercase;
    }
    &:focus {
        outline: none;
        border-color: var(--palette-dark-light);
    }
}

</style>