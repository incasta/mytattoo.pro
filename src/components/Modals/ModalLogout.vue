<template lang="pug">
    
    .ModalContent
        //- "vue-js-modal": "^2.0.0-rc.3",
        .Modal-Header
            h2 Выйти из профиля?
            button.Close-Modal(@click="$emit('close')")
                app-icon(name="cross" size="12")
        .Modal-Body
            .Modal-Text
                p Вы уверены, что хотите выйти из учетной записи?     
            .Modal-Footer
                a.Cancel(href="#" @click="$emit('close')") Отмена
                Button(href="/" text="Выйти" icon="sign-out" :iconSize='14')


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

.Cancel {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    color: var(--palette-blue);
    text-decoration: none;
}

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
    // padding: 1em 2em;
    // padding-top: 20px;
    padding: 0;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--palette-dark-light);
}


::v-deep.Button-Default {
    color: var(--palette-pink);
    text-shadow: 0 0 10px var(--palette-pink);
    .icon {
        fill: var(--palette-pink);
    }
    &:hover {
        text-shadow: 0 0 15px var(--palette-pink);
        .Button-Icon {
            .icon {
                @include anim-swipe-right;
                filter: drop-shadow(0 0 7px var(--palette-pink));
            }
        }   
    }
    
}

</style>