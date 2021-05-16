<template lang="pug">
    
    .container
        .Row
            .SideBar
                SideNavigation
            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Отзывы
                        .Page-Block-Content
                            FeedbackTemplate(
                            v-for="feedback in feedbacks" 
                            :key="feedback.id" 
                            :userName="feedback.name" 
                            :userAvatar="feedback.avatar" 
                            :date="feedback.date" 
                            :text="feedback.text" 
                            :mark="feedback.mark" 
                            :images="feedback.images" 
                            :answered="feedback.answered" 
                            :answerText="feedback.answerText"
                            :masterName="feedback.masterName"
                            )
                                //- template(#feedbackAnswer)
                                //- template(#feedbackFormAnswer)
                            Hr
                            Paginator

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import FeedbackTemplate from '@/components/FeedbackTemplate.vue';
import Paginator from '@/components/common/Paginator.vue';
import Hr from '@/components/common/Hr.vue';

export default {
    components: {
        SideNavigation,
        FeedbackTemplate,
        Paginator,
        Hr,
    },

    data () {
        return {
            feedbacks: [
                {
                    name: "Иван Иванов",
                    avatar: "id01",
                    date: "22 января 2021 в 23:05",
                    text: "Купила первый раз этот кофе. Беру всегда среднюю прожарку, так как не люблю очень Горький кофе. При вскрытии упаковки заметила разную форму зёрен. Но , как оказалось, что и на вкус не очень. В кофемашине при стандартной загрузке, в чашке прямо прозрачная мутная жижа... Не понравился абсолютно вкус. Ну, может на любителя...... ",
                    mark: "positive",
                    answerText: "Раньше были музыканты, не то что сейчас",
                    answered: true,
                    masterName: 'Вергунов Алексей "WARHAMMER"',
                    images: [
                        {
                            img: "id01_fb01_img01",
                        },
                        {
                            img: "id01_fb01_img02",
                        },
                        {
                            img: "id01_fb01_img03",
                        },
                    ]
                },
                {
                    name: "Иван Иванов",
                    avatar: "id01",
                    date: "22 января 2021 в 23:05",
                    text: "Купила первый раз этот кофе. Беру всегда среднюю прожарку, так как не люблю очень Горький кофе. При вскрытии упаковки заметила разную форму зёрен. Но , как оказалось, что и на вкус не очень. В кофемашине при стандартной загрузке, в чашке прямо прозрачная мутная жижа... Не понравился абсолютно вкус. Ну, может на любителя...... ",
                    mark: "negative",
                    masterName: 'Вергунов Алексей "WARHAMMER"',
                    answered: false,
                    images: [
                        {
                            img: "id01_fb01_img01",
                        },
                        {
                            img: "id01_fb01_img02",
                        },
                        {
                            img: "id01_fb01_img03",
                        },
                    ]
                },
                {
                    name: "Иван Иванов",
                    avatar: "id01",
                    date: "22 января 2021 в 23:05",
                    text: "Купила первый раз этот кофе. Беру всегда среднюю прожарку, так как не люблю очень Горький кофе. При вскрытии упаковки заметила разную форму зёрен. Но , как оказалось, что и на вкус не очень. В кофемашине при стандартной загрузке, в чашке прямо прозрачная мутная жижа... Не понравился абсолютно вкус. Ну, может на любителя...... ",
                    mark: "positive",
                    masterName: 'Вергунов Алексей "WARHAMMER"',
                    answered: false,
                    images: [
                        {
                            img: "id01_fb01_img01",
                        },
                        {
                            img: "id01_fb01_img02",
                        },
                        {
                            img: "id01_fb01_img03",
                        },
                    ]
                },
            ]
        }
    },

}
</script>


<style lang="scss" scoped>
@include blockUI;


</style>