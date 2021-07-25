<template lang="pug">
    
    .SectionHeader
        .SectionHeader-Title
            h2 {{ title }}
        a.SectionHeader-Link(href="#") 
            span Перейти в раздел
            app-icon(name="arrow-small-right" size="16")


</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            
        }
    }

}
</script>

<style lang="scss" scoped>

.SectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255,255,255,.1);
    padding-bottom: 10px;
    @include respond-to (handlers) {
        flex-direction: column;
        align-items: flex-start;
    }
}

.SectionHeader-Title {
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    text-shadow: -2px 2px 5px var(--palette-purple), 1px 0 2px var(--palette-purple);
    filter: drop-shadow(0 0 10px var(--palette-purple));
    font-size: 24px;
    @include respond-to (medium-screens) {
        font-size: 18px;
    }
    @include respond-to (handlers) {
        font-size: 16px;
    }
}


.SectionHeader-Link {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: var(--palette-pink);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    .icon {
        margin-left: 10px;
        fill: var(--palette-pink);
        @include trans-ease-out;
    }
    &:hover {
        text-shadow: 0 0 10px var(--palette-pink);
        .icon {
            transform: translateX(10px);
            filter: drop-shadow(0 0 10px var(--palette-pink));
        }
    }

    @include respond-to (handlers) {
        margin-top: 10px;
    }
}

</style>