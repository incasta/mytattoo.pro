<template lang="pug">
    
    .Dialog-Feed
        MessageStack(v-for="item in items" :key="item.id" :data="item")
        MessageRequest(v-for="request in requests" :key="request.id" :data="request")
        MessageStack(v-for="item in items" :key="item.id" :data="item")    

</template>

<script>
import MessageStack from "@/components/Messenger/Inbox/MessageStack.vue"
import MessageRequest from "@/components/Messenger/Inbox/MessageRequest.vue"

export default {
    components: {
        MessageStack,
        MessageRequest,
    },
    data () {
        return {
            requests: [
                {
                    serviceName: "Перекрытие татуировки",
                    style: "Хэндпоук",
                    place: "На руке",
                    budget: "222",
                    sketch: true,
                    adult: true,
                    description: "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
                    photo: true
                },
            ],
            items: [
                {
                    date: "12 февраля",
                    msg: [
                        {
                            time: "11:58",
                            text: "Текст первого сообщения!",
                            me: true,
                        },
                        {
                            time: "12:19",
                            text: "текст сообщения, допустим......"
                        },
                        {
                            time: "13:58",
                            text: "Текст третьего сообщения!"
                        },
                    ]
                },
                {
                    date: "14 февраля",
                    msg: [
                        {
                            time: "11:58",
                            text: "Текст первого сообщения!"
                        },
                        {
                            time: "12:19",
                            text: "текст сообщения, допустим......"
                        },
                        {
                            time: "13:58",
                            text: "Текст третьего сообщения!",
                            me: true,
                        },
                        {
                            time: "14:58",
                            text: "Текст 4 сообщения!"
                        },
                        {
                            time: "15:58",
                            text: "Текст 5 сообщения!",
                            me: true,
                        },
                    ]
                },
                {
                    date: "28 марта",
                    msg: [
                        {
                            time: "11:58",
                            text: "Текст первого сообщения!"
                        },
                        {
                            time: "12:19",
                            text: "текст сообщения, допустим......",
                            me: true,
                        },
                        {
                            time: "13:58",
                            text: "Текст третьего сообщения!",
                            me: true,
                        },
                        {
                            time: "14:58",
                            text: "Текст 4 сообщения!"
                        },
                        {
                            time: "15:58",
                            text: "Текст 5 сообщения!"
                        },
                    ]
                },
                {
                    date: "28 апреля",
                    msg: [
                        {
                            time: "11:58",
                            text: "Текст первого сообщения!"
                        },
                        {
                            time: "12:19",
                            text: "текст сообщения, допустим......"
                        },
                        {
                            time: "13:58",
                            text: "Текст третьего сообщения!",
                            me: true,
                        },
                        {
                            time: "14:58",
                            text: "Текст 4 сообщения!"
                        },
                        {
                            time: "15:58",
                            text: "Текст 5 сообщения!"
                        },
                    ]
                },
                {
                    date: "29 апреля",
                    msg: [
                        {
                            time: "11:58",
                            text: "Текст первого сообщения!"
                        },
                        {
                            time: "12:19",
                            text: "текст сообщения, допустим......",
                            me: true,
                        },
                        {
                            time: "13:58",
                            text: "Текст третьего сообщения!",
                            me: true,
                        },
                        {
                            time: "14:58",
                            text: "Текст 4 сообщения!"
                        },
                        {
                            time: "15:58",
                            text: "Текст 5 сообщения!",
                            me: true,
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.Dialog-Feed {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 5px 15px 10px;
    list-style: none;
    background-color: #091016;
    z-index: 2;
}



</style>