<template lang="pug">
    
    label.AttachButton
        input(type="file" accept=".jpg, .jpeg, .png" multiple)
        app-icon(name="attach" size="20")

</template>

<script>
export default {
    

}
</script>

<style lang="scss" scoped>

.AttachButton {
    border-radius: 100%;
    position: relative;
    // background-color: var(--palette-dark-lighter);
    background-color: rgba(0,0,0,.25);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    cursor: pointer;
    &:hover {
        // background-color: var(--palette-dark-light);
        background-color: rgba(0,0,0,.5);
        .icon {
            fill: var(--palette-blue);
        }
    }
    .icon {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        fill: var(--palette-light-icon);
        @include trans-ease-out;
    }
    input[type="file"] {
        opacity: 0;
        display: none;
    }
}


</style>