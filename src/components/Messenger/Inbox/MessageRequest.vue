<template lang="pug">
    
    .MessageRequest(v-if="data !== undefined")
        .MessageRequest-Header
            Tooltip(content="Заявка на выполнение заказа" :size="14")
            .MessageRequest-Label Наименование услуги
            .MessageRequest-Name {{ data.serviceName }}
        .MessageRequest-Body
            .MessageRequest-Status 
                MessageRequestDropdown(:options="options")
                div {{ data.status }}
            .MessageRequest-Content
                .MessageRequest-Info(v-if="data.style !== undefined")
                    label Стиль: 
                    span {{ data.style }}
                .MessageRequest-Info(v-if="data.place !== undefined")
                    label Место: 
                    span {{ data.place }}
                .MessageRequest-Info(v-if="data.budget !== undefined")
                    label Бюджет: 
                    span {{ data.budget }}
                .MessageRequest-Info
                    label Есть эскиз: 
                    span(v-if="data.sketch") Да 
                    span(v-if="!data.sketch") Нет
                .MessageRequest-Info
                    label Есть 18: 
                    span(v-if="data.adult") Да 
                    span(v-if="!data.adult") Нет
                .MessageRequest-Info(v-if="data.description !== undefined")
                    label Примечания: 
                    span {{ data.description }}
                .MessageRequest-Info(v-if="data.photo")
                    label Прикрепленные фото: 
                    .MessageRequest-Images
                        .MessageRequest-Attach
                            LightBoxTrigger
                            img(:src="require('@/assets/img/sketches/1.jpg')")
                        .MessageRequest-Attach
                            LightBoxTrigger
                            img(:src="require('@/assets/img/sketches/2.jpg')")
                        .MessageRequest-Attach
                            LightBoxTrigger
                            img(:src="require('@/assets/img/sketches/3.jpg')")

        .MessageRequest-Footer
            Button(text="Написать отзыв" icon="edit" content="Можно оставить отзыв только после того, как статус заявки станет “В работе” или “Выполнена”" v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}")


</template>

<script>
import Tooltip from "@/components/common/Tooltip.vue";
import Button from "@/components/common/Button.vue";
import LightBoxTrigger from "@/components/common/LightBoxTrigger.vue";
import MessageRequestDropdown from "@/components/Messenger/Inbox/MessageRequestDropdown.vue";

export default {
    data () {
        return {
            options: [
                {
                    name: "Отклонено",
                },
                {
                    name: "В работе",
                },
                {
                    name: "Завершено",
                },
            ]
        }
    },
    components: {
        Tooltip,
        MessageRequestDropdown,
        LightBoxTrigger,
        Button,
    },
    props: {
        data: {
            type: Object,
            required: false,
        }
    }
    
}
</script>


<style lang="scss" scoped>


.MessageRequest {
    position: relative;
    width: fit-content;
    max-width: calc(80% - 45px);
    // padding: 10px 15px;
    border-radius: 4px;
    // margin: 5px 0;
    font-size: 15px;
    letter-spacing: .1ex;
    line-height: 1.4;
    font-weight: 300;
    background-color: var(--palette-dark-lighter);
    @include respond-to(handlers) {
        max-width: 100%;
    }
}

.MessageRequest-Header {
    background-color: var(--palette-dark-lighter);
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    padding: 10px 20px;
    text-align: left;
    &:before {
        content: '';
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background-color: var(--palette-blue);
    }

    .tooltip {
        position: absolute;
        z-index: 1;
        right: 10px;
        top: 10px;
    }

}

.MessageRequest-Label {
    font-size: 11px;
    text-transform: uppercase;
    color: var(--palette-blue);
    font-weight: 700;
    opacity: .5;
}

.MessageRequest-Name {
    font-weight: 700;
    color: var(--palette-yellow);
    text-transform: uppercase;
    font-size: 14px;
}

.MessageRequest-Content {
    text-align: left;
    padding: 10px 20px;
}

.MessageRequest-Info {
    &:not(:last-child) {
        margin-bottom: 5px;
    }
    label {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 12px;
        color: var(--palette-blue);
    }

    > span {
        font-size: 13px;
    }
}

.MessageRequest-Images {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
    
}

.MessageRequest-Attach {
    position: relative;
    width: 80px;
    height: 90px;
    border-radius: 4px;
    overflow: hidden;
    &:not(:last-child) {
        margin-right: 10px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.MessageRequest-Footer {
    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--palette-white);
        opacity: .1;
        margin: 10px 0 20px 0;
    }
}

::v-deep.Button-Default {
    background: var(--palette-dark-light);
    .Button-Icon {
        background-color: #1E2938;
        .icon {
            fill: var(--palette-blue);
        }
    }
}

</style>