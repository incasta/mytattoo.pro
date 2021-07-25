<template lang="pug">
    
    .HeaderSection.animation-flickering
        .HeaderSectionWrap.container
            SelectLocation
        
            .HeaderSection-Content
                h1 
                    span Сервис поиска 
                    br
                    span(data-text='тату мастеров' class="infinite" :class="{ 'hover-effect-glitch': classChanged }") тату-мастеров 
                    span в россии 
                .Button-Wrap
                    Button.pink.outline(text="Поиск мастера")
                
                p Нужна работа? 
                    a(href="#") зарегистрируйся мастером!
                
                .Mouse-Scroll
                    a.scroll-downs(href="#chart")
                        .mouse
                            .scroller
                        .scroll-msg Вниз

                    //- a(href="#")
                        app-icon(name="mouse-scroll" size="96")

</template>


<script>
import SelectLocation from "@/components/Sliders/HeaderSectionSlider/SelectLocation.vue";
import Button from "@/components/common/Button.vue";

export default {
    data () {
        return {
            classChanged: false,
        }
    },
    components: {
        SelectLocation,
        Button,
    },
    methods: {
        getRandomNumberBetween(min,max) {
            return Math.floor(Math.random()*(max-min+1)+max);
        },

        classChange() {
            // let randomTime;
            // now 'this' is referencing the Vue object and not the 'setTimeout' scope
            let randomTime = this.getRandomNumberBetween(3000, 4000);

            setInterval(() => 
                this.classChanged = !this.classChanged,
                randomTime,
                randomTime = this.getRandomNumberBetween(3000, 4000),
            );
        }
    },
    mounted() {
        this.classChange()
    },

}
</script>

<style lang="scss" scoped>

.Mouse-Scroll {
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    .scroll-downs {
        text-decoration: none;
        color: var(--palette-yellow);
        .scroll-msg {
            text-align: center;
            font-size: 14px;
            margin-top: 10px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            opacity: .5;
            @include trans-ease-out;
        }

        &:hover {
            .mouse {
                box-shadow: 0 0 15px var(--palette-yellow);
            }
            .scroll-msg {
                opacity: 1;
            }
        }
    }   
}

.mouse {
    width: 3px;
    padding: 10px 15px;
    height: 35px;
    margin: 0 auto;
    border: 2px solid #fff;
    box-shadow: 0 0 1px var(--palette-yellow);
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
    @include trans-ease-out;
    background: rgba(0,0,0,.25);
}

.scroller {
    width: 3px;
    height: 10px;
    border-radius: 25%;
    animation-name: scroll;
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(.15,.41,.69,.94);
    animation-iteration-count: infinite;
    background-color: var(--palette-yellow);
}



.Button-Wrap {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .Button-Default.pink {
        font-size: 18px;
        font-weight: 700;
        border-width: 3px;
        color: var(--palette-blue);
        text-shadow: 0 0 5px var(--palette-blue), 0 0 20px var(--palette-blue);
        &:hover {
            text-shadow: 0 5px 15px var(--palette-blue), 0 0 10px var(--palette-blue);
        }
    }
}

.HeaderSection {
    background: repeating-linear-gradient(0, transparent, transparent 2px, rgba(0, 0, 0, .1) 4px, rgba(0, 0, 0, .1) 3px), url('../../assets/img/main-min.jpg');
    background-size: cover;
    background-position: center 80%;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    height: var(--HeaderSectionHeightHome);
    min-height: 700px;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        z-index: inherit;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(9, 10, 5, 1) 0%, transparent 20%);
    }
}

.HeaderSectionWrap {
    // @include flex-ja_center;
    padding-top: 15vh;
    position: relative;
    z-index: 99;
    height: 100%;
}

.HeaderSection-Content {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 25px;
    h1 {
        margin-top: 80px;
        letter-spacing: .1em;
        animation: home_h1 6s infinite ease alternate-reverse;
        span {
            display: inline-block;
            position: relative;
        }

        @include respond-to(handlers) {
            font-size: 30px;
        } 
    }

    p {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 17px;
        margin-top: 30px;
        a {
            color: var(--palette-blue);
            @include trans-ease-out;
            &:hover {
                opacity: .75;
            }

            @include respond-to(handlers) {
                white-space: nowrap;
            }
        }

        @include respond-to(handlers) {
            font-size: 14px;
        }
    }
}

.infinite {
    margin-right: .5em;
    @include respond-to(handlers) {
        width: 100%;
    } 
}


</style>