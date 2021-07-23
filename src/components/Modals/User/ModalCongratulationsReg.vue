<template lang="pug">
    
    .ModalContent
        //- "vue-js-modal": "^2.0.0-rc.3",
        .Modal-Header
            h2 Поздравляем, 
                span.name %username%
                | !
            button.Close-Modal(@click="$emit('close')")
                app-icon(name="cross" size="12")
        .Modal-Body
            .Modal-Text
                h2 вы успешно зарегистрировались в качестве клиента!

                p Пришло время узнать, как найти нужного вам татуировщика на сайте MyTattoo.pro
            
            .Modal-Video
                iframe(width="560" height="315" src="https://www.youtube-nocookie.com/embed/Q9yn1DpZkHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

            .Modal-Text
                p Можете ознакомиться с информацией о работе с сервисом позже в 
                    a(href="#") разделе FAQ
            
            .Modal-Footer
                Button(href="/" text="Понятно" icon="arrow-small-right")


</template>


<script>

import Button from "@/components/common/Button.vue";

export default {
    name: "ModalCongratulationsReg",
    components: {
        Button,
    },

}
</script>


<style lang="scss" scoped>

.Modal-Text {
    margin-bottom: 20px;
    font-weight: 600;
    h2 {
        margin-bottom: 30px;
        text-transform: uppercase;
        color: var(--palette-blue);
    }

    .money {
        color: var(--palette-green);
        font-weight: 700;
        text-shadow: 0 0 px var(--palette-green);
    }

    p {
        margin-bottom: 20px;
        a {
            color: var(--palette-blue);
            font-weight: 700;
        }
    }
}

.Modal-Video {
    margin: 30px 0;
    display: flex;
    max-width: 100%;
    > iframe {
        max-width: 100%;
    }
}

.ModalContent {
    background-color: #060b0f;
    height: 100%;
    color: #fff;
    font-family: 'Jura', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    letter-spacing: .1ex;
    @include respond-to(large-screens) {
        font-size: 13px;
    }
    .vm--overlay {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.5);
    }
        
    .vm--modal {
        background-color: var(--palette-dark-regular);
        box-shadow: 0 20px 60px -2px rgba(0, 0, 0, 0.5)
    }
}

.Close-Modal {
    position: absolute;
    right: 0;
    width: 54px;
    height: 54px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .icon {
        @include trans-ease-out;
    }
    &:hover {
        background-color: rgba(0,0,0,.1);
        .icon {
            fill: var(--palette-pink);
        }
    }
}

.Modal-Header {
    background-color: var(--palette-dark-light);
    padding: 15px 24px;
    position: relative;
    font-size: 16px;
    overflow: hidden;
    // border-radius: 2px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
        text-align: center;
        letter-spacing: .1ex;
    }
}

.Modal-Body {
    padding: 30px;
}

.Modal-Footer {
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--palette-dark-light);
}


::v-deep.Button-Default {
    
    .icon {
        fill: var(--palette-blue);
    }
    &:hover {
        .Button-Icon {
            .icon {
                @include anim-swipe-right;
            }
        }   
    }
    
}

</style>