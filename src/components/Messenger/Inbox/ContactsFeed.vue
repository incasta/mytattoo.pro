<template lang="pug">
    
    .ContactsFeed
        MessengerContactTemplate(v-for="(contact, index) in contacts" :key="contact.id" :contact="contact" :index="index")

</template>

<script>
import MessengerContactTemplate from "@/components/Messenger/Inbox/MessengerContactTemplate.vue"

export default {
    components: {
        MessengerContactTemplate,
    },
    data () {
        return {
            contacts: [
                {
                    name: "Иван Иванов",
                    lastMsg: "Привет",
                    time: "27 апр",
                    meta: false,
                },
                {
                    name: "Андрей Андреев",
                    lastMsg: "Приветствую. Мне нужна консультация татуировщика",
                    time: "4 мар 2020",
                    meta: true,
                },
                {
                    name: "Федор Федоров",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Александрова Диана ",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Алексеев Михаил ",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Денис Антипов",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Леонид Волков",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Кирилл Егоров",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Матвей Смирнов",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Илья Смирнов",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Константин Третьяков",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Мария Белова",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Матвей Смирнов",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Фёдор Смирнов",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
                {
                    name: "Тихон Борисов",
                    lastMsg: "еще одно сообщение на кириллице",
                    time: "31 янв 2020",
                    meta: true,
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.ContactsFeed {
    position: relative;
    z-index: 1;
    background-color: var(--palette-dark-regular);
}

</style>