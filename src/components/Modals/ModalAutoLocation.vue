<template lang="pug">
    
    .ModalContent
        //- "vue-js-modal": "^2.0.0-rc.3",
        .Modal-Header
            h2 Мы угадали?
            button.Close-Modal(@click="$emit('close')")
                app-icon(name="cross" size="12")
        .Modal-Body
            .Modal-Text
                p Ваш город - 
                    a(href="#" @click="showModalSelectLocation") Старый крым
                    | ?
            .Modal-Footer
                .Button-Wrap(@click="$emit('close')")
                    Button(href="#" text="Да")
                .Button-Wrap(@click="showModalSelectLocation")
                    Button(href="#" text="Нет")


</template>


<script>

import Button from "@/components/common/Button.vue";
import ModalSelectLocation from "@/components/Modals/ModalSelectLocation.vue";

export default {
    name: "ModalAutoLocation",
    components: {
        Button,
        ModalSelectLocation,
    },
    
    methods: {
        showModalSelectLocation() {
            // console.log('ModalAutoLocation');
            this.$emit('close');
            this.$modal.show(
                ModalSelectLocation,
                { },
                { height: 'auto', shiftY: 0.35, reset: true, scrollable: true, styles: "", classes: "ModalSelectLocation"  }
            )
        },
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
    text-transform: uppercase;
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
            text-decoration: none;
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

    padding: 0;
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-top: 1px solid var(--palette-dark-light);
}


::v-deep.Button-Default {
    color: var(--palette-blue);
    text-shadow: 0 0 10px var(--palette-blue);
    padding: 10px 0;
    .icon {
        fill: var(--palette-blue);
    }
    &:hover {
        text-shadow: 0 0 15px var(--palette-blue);
        .Button-Icon {
            .icon {
                @include anim-swipe-right;
                filter: drop-shadow(0 0 7px var(--palette-blue));
            }
        }   
    }
    
}

</style>