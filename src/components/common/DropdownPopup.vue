<template lang="pug">
    
    .DropdownPopup(:class="{ active }")
        .DropdownPopup-Trigger(@click="active = !active")
            slot(name="trigger")
                app-icon(name="menu-dots" size="18")
        
        .DropdownPopup-Content
            slot(name="content")
        

</template>


<script>
export default {
    data() {
        return {
            active: false,
        }
    }
}
</script>

<style lang="scss" scoped>

.DropdownPopup {
    &.active {
        .DropdownPopup-Content {
            display: block;
        }

        .DropdownPopup-Trigger {
            background-color: var(--palette-dark-lighter);
        }
    }
}

.DropdownPopup-Content {
    position: absolute;
    z-index: 9;
    display: none;
    // padding: 10px;
    font-size: 13px;
    background: var(--palette-dark-medium);
    right: 0;
    box-shadow: 0px 5px 15px 0px #00000066;
    transform: translateY(3px);
}

.DropdownPopup-Trigger {
    @include flex-ja_center;
    @include trans-ease-out;
    margin-right: -20px;
    cursor: pointer;
    width: 55px;
    height: 55px;
    &:hover {
        background-color: var(--palette-dark-lighter);
    }
    .icon {
        fill: var(--palette-blue);
    }

    @include respond-to(handlers) {
        width: 35px;
        margin-right: -10px;
    }
}

</style>