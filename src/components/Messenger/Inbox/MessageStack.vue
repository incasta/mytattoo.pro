<template lang="pug">
    
    .MessageStack(v-if="data !== undefined")
        .MessageStack-Period {{ data.date }}

        .Message(v-for="msg in data.msg" :key="msg.id" :class="{ MyMsg: msg.me }") 
            .Message-Content
                span.Message-Content-Text {{ msg.text }} 
            span.Message-Timestamp {{ msg.time }} 

</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        data: {
            type: Object,
            required: false,
        },
    }
}
</script>


<style lang="scss" scoped>

.MessageStack {
    margin-bottom: 20px;
}

.MessageStack-Period {
    @include trans-ease-out;
    position: sticky;
    top: 1em;
    left: 50%;
    margin: 1em 0;
    z-index: 50;
    opacity: .5;
    background-color: #101b29;
    border-radius: 100px;
    padding: .25em 1em;
    transition: all .33s ease;
    user-select: none;
    font-size: 12px;
    display: inline-flex;
    &:hover {
        opacity: 1;
    }
}

.Message {
    position: relative;
    width: fit-content;
    max-width: calc(80% - 45px);
    padding: 10px 15px;
    border-radius: 4px;
    margin: 5px 0;
    font-size: 15px;
    letter-spacing: .1ex;
    line-height: 1.4;
    font-weight: 300;
    background-color: #101b29;
    &.MyMsg {
        margin-left: auto;
        background-color: #0d1620;
        &:before {
            border-width: 8px 0 8px 8px;
            right: -8px;
            left: unset;
            border-left-color: #0d1620;
        }
        .Message-Timestamp {
            left: -40px;
            right: unset;
        }
    }
    &:before {
        content: "";
        position: absolute;
        top: calc(50% - 8px);
        display: block;
        border: solid;
        border-color: transparent;
        border-width: 8px 8px 8px 0;
        left: -8px;
        border-right-color: #101b29;
    }

    @include respond-to(handlers) {
        max-width: calc(100% - 45px);
    }
}

.Message-Timestamp {
    position: absolute;
    z-index: 1;
    font-size: 80%;
    opacity: .25;
    letter-spacing: .1ex;
    line-height: 16px;
    top: 50%;
    right: -40px;
    transform: translateY(-50%);
    font-weight: 400;
    transition: all .33s ease;
}

.Message-Content-Text {
    white-space: pre-wrap;
    font-size: 13px;
}

</style>