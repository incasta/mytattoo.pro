<template lang="pug">
    
    .MessengerContactTemplate(:class="{ Closed: contact.meta }") 
        .Contact-Action(v-if="!contact.meta" v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}" content="Закрыть тикет")
            app-icon(name="lock" size="14")
        .Contact-Object
            .Contact-Avatar
                app-icon(name="support-ava" size="46")
            .Contact-Name {{ contact.name }}
            .Contact-LastMsg 
                span.plain-text {{ contact.theme }}
            .Contact-Time {{ contact.date }}
            .Contact-Meta(v-if="contact.meta")
                app-icon(name="lock" size="13" :v-if="contact.meta" v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}" content="Тикет закрыт, поэтому Вы не можете вести переписку в этом диалоге. Если у Вас остались вопросы, создайте новый тикет.")


</template>

<script>


export default {
    data () {
        return {

        }
    },
    props: {
        contact: {
            type: Object,
            required: false,
        },
        index: {
            type: Number,
            required: true
        }
    },
    components: {

    },



}
</script>


<style lang="scss" scoped>

.MessengerContactTemplate {
    width: 100%;
    position: relative;
    cursor: pointer;
    transition: all .33s ease;
    &:not(:first-child) {
        &:before {
            content: "";
            display: block;
            position: absolute;
            z-index: 1;
            top: 0;
            left: -5px;
            background: linear-gradient(90deg,#696969,hsla(0,0%,41.2%,0));
            width: 100%;
            height: 1px;
            opacity: .25;
        }
    }

    &.Closed {
        .Contact-Name {
            color: var(--palette-pink);
            opacity: .75;
        }
    }
    
    &:not(.Closed):hover {
        background-color: var(--palette-transparent-bg);
        .Contact-Action {
            transform: translateX(0) translateY(-50%);
            @include trans-ease-out;
            .icon {
                transform: translateX(0px);
                opacity: .75;
            }
            &:hover {
                background-color: var(--palette-dark-light);
                 .icon {
                     opacity: 1;
                 }
            }
        }

        .Contact-Time,
        .Contact-Meta {
            opacity: 0;
            transform: translateX(-100%)
        }

    }

    &.selected {
        background: linear-gradient(90deg,#04070a,rgba(4,7,10,0));
    }
}

.Contact-Action {
    @include flex-ja_center;
    @include trans-ease-out;
    padding: 0 14px;
    height: 100%;
    position: absolute;
    z-index: 4;
    // background-color: #000;
    background-color: #101B2980;
    
    top: 50%;
    transform: translateX(100%) translateY(-50%);
    right: 0;
    cursor: pointer;
    transition: transform .33s ease, opacity .4s;
    .icon {
        transition: all .2s ease .1s;
        fill: var(--palette-pink);
        transform: translateX(100px);
        opacity: 0;
    }
}

.Contact-Object {
    padding: 9px 5px;
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 3px;
    grid-template-areas: "ava name time" "ava msg meta";
    text-align: left;
}

.Contact-Avatar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    margin-right: 5px;
    border-radius: 50px;
    background: #101b29;
    grid-area: ava;
    border: 2px solid hsla(0,0%,98%,.15);
    overflow: hidden;
    border-radius: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.Contact-Name {
    grid-area: name;
    font-weight: 700;
    margin: auto 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 13px;
}

.Contact-LastMsg {
    grid-area: msg;
    font-size: .85em;
    letter-spacing: .1ex;
    font-weight: 100;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    // margin: auto 0;
    font-size: 13px;
    align-self: flex-start;
}


.plain-text {
    opacity: .5;
}

.Contact-Time {
    grid-area: time;
    font-size: 14px;
    opacity: .5;
    margin: auto 0;
    font-weight: 200;
    letter-spacing: .1ex;
    transition: all .33s ease;
    transform: translateX(0);
    font-size: 12px;
}

.Contact-Meta {
    grid-area: meta;
    margin: auto 4px auto auto;
    @include trans-ease-out;
    .icon {
        opacity: .5;
        // filter: grayscale(1) drop-shadow(5px 0 0 rgba(255,255,255,.27059));
        fill: var(--palette-pink);
    }
    
}

</style>