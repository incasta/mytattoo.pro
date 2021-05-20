<template lang="pug">
    
    .MarkToggler
        label
            input(type="radio" name="MarkToggler")
            span
                app-icon.like(name="like" size="30")
        label
            input(type="radio" name="MarkToggler")
            span
                app-icon.dislike(name="dislike" size="30")

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.MarkToggler {
    display: inline-block;
    background-color: var(--palette-dark-light);
    overflow: hidden;
    border-radius: 4px;
    label {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        span {
            padding: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        input[type="radio"] {
            display: none;
            &:checked {
                ~span {
                    background-color: var(--palette-dark-lighter);
                    .icon {
                        opacity: 1;
                        &.like {
                            filter: drop-shadow(0 0 8px var(--palette-green));
                        }
                        &.dislike {
                            filter: drop-shadow(0 0 8px var(--palette-pink));
                        }
                    }
                }
                
            }
        }
        .icon {
            opacity: .2;
            @include trans-ease-out;
            &.like {
                fill: var(--palette-green);
            }
            &.dislike {
                fill: var(--palette-pink);
            }
        }
    }
}

</style>