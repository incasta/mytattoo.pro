<template lang="pug">
    
    .ModalContent
        //- "vue-js-modal": "^2.0.0-rc.3",
        .Modal-Header
            h2 Уточните ваш город
            button.Close-Modal(@click="$emit('close')")
                app-icon(name="cross" size="12")
        .Modal-Body
            .Modal-Search
                SearchInput
                .Search-Results
                    a.Search-Result-Item(:class="{ selected: city.selected }" href="#" v-for="city in cities" :key="city.name") {{ city.name }}

            .Modal-Footer
                .Button-Wrap(@click="$emit('close')")
                    Button(href="#" text="Сохранить")
                


</template>


<script>

import Button from "@/components/common/Button.vue";
import ModalSelectLocation from "@/components/Modals/ModalSelectLocation.vue";
import SearchInput from "@/components/common/SearchInput.vue";

export default {
    name: "ModalAutoLocation",

    data() {
        return {
            cities: [
                {
                    name: "Москва",
                    selected: false,
                },
                {
                    name: "Санкт-Петербург",
                    selected: true,
                },
                {
                    name: "Архангельск",
                    selected: false,
                },
                {
                    name: "Астрахань",
                    selected: false,
                },
                {
                    name: "Белгород",
                    selected: false,
                },
                {
                    name: "Брянск",
                    selected: false,
                },
                {
                    name: "Владимир",
                    selected: false,
                },
                {
                    name: "Болото",
                    selected: false,
                },
                {
                    name: "Углич",
                    selected: false,
                },
                {
                    name: "Киров",
                    selected: false,
                },
                {
                    name: "Кострома",
                    selected: false,
                },
                {
                    name: "Краснодар",
                    selected: false,
                },
                {
                    name: "Красноярск",
                    selected: false,
                },
                {
                    name: "Курск",
                    selected: false,
                },
                {
                    name: "Липецк",
                    selected: false,
                },
                {
                    name: "Магадан",
                    selected: false,
                },
                {
                    name: "Самара",
                    selected: false,
                },
                {
                    name: "Дмитров",
                    selected: false,
                },
                {
                    name: "Саратов",
                    selected: false,
                },
                {
                    name: "Сахалин",
                    selected: false,
                },
                {
                    name: "Свердловск",
                    selected: false,
                },
                {
                    name: "Смоленск",
                    selected: false,
                },
                {
                    name: "Ставрополь",
                    selected: false,
                },
                {
                    name: "Тамбов",
                    selected: false,
                },
                {
                    name: "Тверь",
                    selected: false,
                },
                {
                    name: "Томск",
                    selected: false,
                },
                {
                    name: "Тула",
                    selected: false,
                },
            ],
        }
    },

    components: {
        Button,
        ModalSelectLocation,
        SearchInput,
    },
    
    methods: {
        showModalSelectLocation() {
            // console.log('ModalAutoLocation');
            this.$modal.show(
                ModalSelectLocation,
                { },
                { height: 'auto', width: 400, shiftY: 0.35, reset: true, scrollable: true, styles: "", classes: "ModalSelectLocation"  }
            )
        },
    },

}
</script>


<style lang="scss" scoped>

.Search-Results {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
}

.Search-Result-Item {
    width: calc(100% / 3 - 20px);
    font-size: 13px;
    font-weight: 700;
    padding: 7px 12px;
    border-radius: 4px;
    margin-right: 20px;
    text-align: left;
    color: #fff;
    @include trans-ease-out;
    text-decoration: none;
    margin-bottom: 10px;
    &.selected {
        color: var(--palette-blue);
        background-color: var(--palette-dark-light);
    }
    &:hover {
        color: var(--palette-blue);
    }

    @include respond-to (medium-screens) {
        width: calc(100% / 2 - 20px);
    }

    @include respond-to (handlers) {
        width: 100%;
    }

    
}

.Modal-Search {
    margin-bottom: 30px;
}

::v-deep.SearchInput {
    input {
        width: 100%;
    }
}

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