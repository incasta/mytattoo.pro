
<template lang="pug">
    
    main
        .container
            .Row
                .SideBar
                    img.Master-Avatar(src="@/assets/img/masters/1.jpg")
                .Main
                    .content
                        .Page-Block
                            .Page-Block-Header.left-border-none
                                h2 
                                    span.name Вергунов Алексей 
                                    span.nickname "WARHAMMER"
                            .Page-Block-Content
                                .desc-inner «Запись на сеанс открыта! Торопитесь, друзья. Мест осталось совсем немного. Первых клиентов ждет приятная скидочка.»

                        .Page-Block
                            .Page-Block-Content.Account-Message.Banned
                                .Account-Message-Icon
                                    app-icon(name="warning" size="25")
                                .Account-Message-Desc Мастер в настоящий момент не пользуется услугами сервиса, поэтому не может обслуживать клиентов. просмотрите профили других мастеров 
                                    a(href="#") здесь

</template>

<script>
import MasterProfileSide from '@/components/MasterPublicProfile/MasterProfileSide.vue';
import Button from '@/components/common/Button.vue';

export default {
    components: {
        MasterProfileSide,
        Button,
    }
}
</script>

<style lang="scss" scoped>
@include blockUI;

.nickname {
    color: var(--palette-blue);
}


.desc-inner {
    font-size: 13px;
    opacity: .75;
}

.Account-Message {
    display: flex;
    align-items: center;
    border-left: 4px solid var(--palette-yellow);
    border-radius: 4px;
    &.Banned {

    }
}

.Account-Message-Icon {
    margin-right: 20px;
    border-right: 1px solid var(--palette-dark-lighter);
    padding: 10px 0;
    padding-right: 20px;
    .icon {
        fill: var(--palette-yellow);
    }
}

.Account-Message-Desc {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 13px;
    a {
        color: var(--palette-blue);
    }
}

.Master-Avatar {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>