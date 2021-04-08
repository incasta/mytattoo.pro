<template lang="pug">
   
    footer
        .Footer-Image
        .container
            .Footer-Content
                .Footer-Content-Column
                    .Footer-Content-Row.Footer-Link-List
                        .Footer-Label навигация по сервису
                        router-link(v-for='link in links' :key='link.id' :to='link.link') {{ link.name }}
                .Footer-Content-Column
                    .Footer-Content-Row
                        .Footer-Label Мы в соцсетях
                        .Footer-Social
                            a(href="#")
                                app-icon(name="social_vk" size="32")
                                span ВКонтакте
                            a(href="#")
                                app-icon(name="social_insta" size="32")
                                span Instagram
                            a(href="#")
                                app-icon(name="social_mail" size="32")
                                span support@intattoo.pro
                            a(href="#")
                                app-icon(name="social_telegram" size="32")
                                span @intattoo.pro
            .Footer-Copyright
                | ©mytattoo.pro, 2020 — все права защищены

</template>

<script>
export default {
    name: "Footer",
    data () {
        return {
            links: [
                {
                    link: "/about",
                    name: "О компании"
                },
                {
                    link: "/FAQ",
                    name: "FAQ"
                },
                {
                    link: "/adv",
                    name: "Реклама на сайте"
                },
                {
                    link: "/policy",
                    name: "Политика обработки персональных данных"
                }
            ]
        }
    },

}
</script>

<style lang="scss" scoped>

footer {
    margin-top: 80px;
}

.Footer-Image {
    width: 100%;
    height: 400px;
    background-image: url('../assets/img/footer2.svg');
    background-size: contain;
    background-position: center;
    position: relative;
    background-repeat: repeat no-repeat;
    @include respond-to (medium-screens) {
        background-size: cover;
        height: 200px;
    }
}

.Footer-Content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @include respond-to (medium-screens) {
        flex-wrap: wrap;
    }
}

.Footer-Content-Column {
    @include respond-to (medium-screens) {
        min-width: calc(50% - 10px);
        padding-right: 20px;
        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }
    @include respond-to (handlers) {
        width: 100%;
        min-width: unset;
        padding-right: 0;
    }
}

.Footer-Link-List {
    a {
        display: flex;
        color: #fff;
        text-decoration: none;
        margin-bottom: 10px;
        text-align: left;
        
        &:hover {
            text-decoration: underline;
        }
        @include respond-to (handlers) {
            text-align: center;
            justify-content: center;
        }

    }
}

.Footer-Label {
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    color: var(--palette-blue);
    text-align: left;
    margin-bottom: 25px;
    @include respond-to (handlers) {
        text-align: center;
        justify-content: center;
    }
}

.Footer-Social {
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #fff;
        text-align: left;
        &:not(:last-child) {
            margin-bottom: 10px;
        }
        span {
            margin-left: 10px;
        }
        .icon {
            fill: var(--palette-blue);
        }
        &:hover {
            color: var(--palette-blue);
        }
        @include respond-to (handlers) {
            text-align: center; 
            justify-content: center;  
        }

    }
}

.Footer-Copyright {
    text-transform: uppercase;
    text-align: left;
    font-weight: 700;
    letter-spacing: .2ex;
    font-size: 12px;
    opacity: .5;
    margin-bottom: 30px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, .2);
    @include respond-to (handlers) {
        text-align: center; 
    }
}

</style>