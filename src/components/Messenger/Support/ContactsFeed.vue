<template lang="pug">
    
    .ContactsFeed
        slot(name="NewTicket")
        MessengerContactTemplate(v-for="(contact, index) in contacts" :key="contact.id" :contact="contact" :index="index")

</template>

<script>
import MessengerContactTemplate from "@/components/Messenger/Support/MessengerContactTemplate.vue"

export default {
    components: {
        MessengerContactTemplate,
    },
    data () {
        return {
            contacts: [
                {
                    name: "Название темы тикета",
                    theme: "Вопросы по работе сервиса",
                    date: "27 апр",
                    meta: false,
                },
                {
                    name: "Есть мысли по улучшению сервиса",
                    theme: "Предложения и пожелания",
                    date: "1 мар",
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