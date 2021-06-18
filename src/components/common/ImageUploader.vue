<template lang="pug">
    
    label.ImageUploader
        input(type="file" accept=".jpg, .jpeg, .png")
        span.AttachIcon
            app-icon.blue(name="arrow-small-up" size="20")
            
            

</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>

.ImageUploader {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .5);
    top: 0;
    left: 0;
    opacity: 0;
    @include flex-ja_center;
    cursor: pointer;
    @include trans-ease-out;
    input[type="file"] {
        opacity: 0;
        display: none;
    }

    &:hover {
        opacity: 1;
        .AttachIcon {
            transform: translateY(0);
        }
    }

    @include respond-to (tablets-screens) {
        opacity: 1;
        .AttachIcon {
            transform: translateY(0);
        }
    }
}

.AttachIcon {
    border-radius: 100%;
    position: relative;
    background-color: rgba(0,0,0,.5);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    cursor: pointer;
    overflow: hidden;
    transform: translateY(20%);
    @include trans-ease-out;
    .icon {
        position: absolute;
        z-index: 2;
        @include trans-ease-out;
    }

    &:hover {
        background-color: rgba(0,0,0,.75);
        .icon {
            animation: swipe-v .3s ease reverse;
        }
    }
}

</style>