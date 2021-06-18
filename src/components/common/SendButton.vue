<template lang="pug">
    
    label.SendButton
        button(type="submit")
        app-icon(name="send-alt" size="18")

</template>


<script>
export default {
    
}
</script>

<style lang="scss">

.SendButton {
    @include trans-ease-out;
    cursor: pointer;
    width: 42px;
    height: 42px;
    @include flex-ja_center;
    background-color: rgba(0,0,0,.25);
    border-radius: 100%;
    button[type="submit"] {
        opacity: 0;
        display: none;
    }
    .icon {
        fill: var(--palette-light-icon);
        @include trans-ease-out;    
    }
    &:hover {
        .icon {
            fill: var(--palette-blue);
        }
    }
}

</style>