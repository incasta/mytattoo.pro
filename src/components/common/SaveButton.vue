<template lang="pug">

    .Save-Button(@click=SaveButton :class='{ active }')
        .Save-Button-Text
            div Сохранить
            div Сохранено
        .Save-Button-Icon
            .Save-Button-Icon-Wrap
                app-icon(name="disk" size="20")
            .Save-Button-Icon-Wrap
                app-icon(name="check-alt" size="20")
    //- .fixed
    //-     .container
    //-         .Save-Button(@click=SaveButton :class='{ active }')
    //-             .Save-Button-Text
    //-                 div Сохранить
    //-                 div Сохранено
    //-             .Save-Button-Icon
    //-                 .Save-Button-Icon-Wrap
    //-                     app-icon(name="disk" size="20")
    //-                 .Save-Button-Icon-Wrap
    //-                     app-icon(name="check-alt" size="20")

</template>

<script>
export default {
    name: "SaveButton",

    data () {
    return {
      active: false
    }
  },

  methods: {
    SaveButton () {
        if (!this.active) {
            this.active = !this.active;
            setTimeout(() => {
                this.active = !this.active;
            }, 5000);
        }
      
    }
  },

  mounted ()  {
    document.querySelector(".Save-Button").addEventListener('click', this.SaveButton);
  },

  beforeDestroy () {
    document.querySelector(".Save-Button").removeEventListener('click', this.SaveButton);
  }, 
}
</script>


<style lang="scss" scoped>

// .fixed {
//     width: 100%;
//     position: fixed;
//     left: 0;
//     bottom: 0;
//     z-index: 999;
//     .container {
//         position: relative;
//     }
// }

.icon {
    fill: var(--palette-dark-regular);
    @include trans-ease-out;
}

.Save-Button {
    transition: opacity .65s ease-out 5s;
    cursor: pointer;
    position: fixed;
    // position: absolute;
    z-index: 9997;
    right: 40px;
    bottom: 40px;
    // right: 0;
    display: flex;
    display: inline-flex;
    align-items: center;
    transition: opacity .3s ease-out 0s;
    @include respond-to (medium-screens) {
        right: 20px;
        bottom: 20px;
    }
    @include respond-to (tablets-screens) {
        .Save-Button-Text {
            display: none;
        }
    }
    &:hover{
        .Save-Button-Icon {
            div {
                &:first-child {
                    box-shadow: 0 0 30px var(--palette-yellow);
                }
            }
        }   
    }
    &.active {
        transition: opacity .3s ease-out .8s;
        opacity: .75;
        cursor: default;
        .Save-Button-Icon {
            div {
                &:first-child {
                    transform: scale(0);
                    transition-delay: .4s;
                    .icon {
                        transform: rotate(180deg) scale(.2);
                        transition-delay: .4s;
                    }
                }
                &:last-child {
                    transform: scale(1);
                    transition-delay: .8s;
                    .icon {
                        transition-delay: .8s;
                        transform: rotate(0deg) scale(1);
                    }
                }
            }
        } 
        .Save-Button-Text {
            div {
                &:first-child {
                    padding: 16px 0;
                    transform: scaleX(0);
                    right: 0;
                    transition-delay: 0s;
                }
                &:last-child {
                    transition-delay: 1.2s;
                    transform: scaleX(1);
                    right: 10px;
                    padding: 16px 20px;
                    padding-right: 60px;
                }
            }
        }    
    }
}

.Save-Button-Text {
    display: flex;
    align-items: center;
    @include trans-ease-out;
    div {
        position: absolute;
        @include trans-ease-out;
        
        right: 10px;
        padding: 16px 20px;
        padding-right: 60px;
        background-color: var(--palette-dark-light);
        border-radius: 100px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 15px;

        &:first-child {
            color: var(--palette-yellow);
            z-index: 2;
            transition-delay: .4s;
        }
        &:last-child {
            color: var(--palette-blue);
            z-index: 1;
            padding: 16px 0;
            right: 0px;
            transform: scaleX(0);
        }
    }
}

.Save-Button-Icon {
    width: 54px;
    height: 54px;
    @include trans-ease-out;
    @include flex-ja_center;
    .Save-Button-Icon-Wrap {
        @include flex-ja_center;
        @include trans-ease-out;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        &:first-child {
            background-color: var(--palette-yellow);
            z-index: 2;
            box-shadow: 0 5px 20px var(--palette-yellow);
            transition-delay: 0;
            .icon {
                transition-delay: 0;
            }
        }
        &:last-child {
            background-color: var(--palette-blue);
            z-index: 1;
            transform: scale(0);
            .icon {
                // transition-delay: 0;
                transform: rotate(-180deg) scale(.2);
            }
        }
    }
}


</style>