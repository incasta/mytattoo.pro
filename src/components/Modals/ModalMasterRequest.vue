<template lang="pug">
    
    .ModalContent
        .Modal-Header
            h2 Оставить заявку
            button.Close-Modal(@click="$modal.hide('ModalMasterRequest')")
                app-icon(name="cross" size="12")
        .Modal-Body
            div modal content asd



</template>


<script>


export default {
    name: "ModalMasterRequest",
}
</script>


<style lang="scss" scoped>


::v-deep.ModalContent {
    background: #000;
    height: 100%;
    .vm--overlay {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.5);
    }

    .vm--modal {
        background-color: var(--palette-dark-regular);
        box-shadow: 0 20px 60px -2px rgba(0, 0, 0, 0.5)
    }
}

.Close-Modal {
    position: absolute;
    right: 0;
    width: 54px;
    height: 54px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .icon {
        @include trans-ease-out;
    }
    &:hover {
        background-color: rgba(0,0,0,.1);
        .icon {
            fill: var(--palette-pink);
        }
    }
}

.Modal-Header {
    background-color: var(--palette-dark-light);
    padding: 15px 24px;
    position: relative;
    font-size: 16px;
    overflow: hidden;
    border-radius: 2px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
        text-align: center;
        letter-spacing: .1ex;
    }
}

.Modal-Body {
    padding: 2em;
}

.Modal-Footer {
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--palette-dark-light);
}

.Modal-Cancel {
    text-transform: uppercase;
    color: var(--palette-blue);
    font-weight: 700;
    letter-spacing: .1ex;
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: .75;
    }
}

</style>