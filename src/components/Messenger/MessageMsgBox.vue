<template lang="pug">
    
    .Message-MsgBox
        //- Область с прикрепленными пикчами
        //- AttachArea
        //- 
        AttachButton(v-if="!disabled")
        TextArea(rows="" cols="" v-if="!disabled")
        .MsgBox-disabled(v-if="disabled")
            app-icon(name="warning" size="38")
            .Msg 
                span Вы не можете оставлять сообщения, поскольку этот тикет уже закрыт. 
                br 
                span Если у Вас остались вопросы, пожалуйста, 
                    a(href="#") создайте новое обращение.

        SendButton(v-if="!disabled")


</template>

<script>
import AttachButton from "@/components/common/AttachButton.vue";
import TextArea from "@/components/common/TextArea.vue";
import SendButton from "@/components/common/SendButton.vue";
import AttachArea from "@/components/Messenger/AttachArea.vue";


export default {
    components: {
        AttachButton,
        TextArea,
        SendButton,
        AttachArea
    },
    props: {
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        }
    }
}
</script>

<style lang="scss" scoped>

.Message-MsgBox {
    display: flex;
    flex-shrink: 0;
    background-color: #0c141c;
    border-top: 1px solid #232d38;
    padding: 20px 15px;
    align-items: center;
    flex-wrap: wrap;
}

.TextArea {
    resize: none;
    overflow-y: scroll;
    height: 61px;
    appearance: none;
    flex: 1;
    border: 1px solid #232d38;
    padding: 10px;
    font-size: 14px;
    margin: 0 10px;
    &:active,
    &:focus {
        border-color: hsla(0,0%,100%,.16);
    }
    &::placeholder {
        text-transform: inherit;
    }
}

.MsgBox-disabled {
    display: flex;
    align-items: center;
    // padding: 20px;
    margin: 0 auto;
    .icon {
        fill: var(--palette-yellow);
    }

    .Msg {
        margin-left: 15px;
        text-align: left;
        line-height: 1.2;
        span {
            color: var(--palette-white);
            opacity: .5;
            font-size: 13px;
        }
        a {
            color: var(--palette-blue);
        }
    }
}

</style>