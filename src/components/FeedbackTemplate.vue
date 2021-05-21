<template lang="pug">
    
    .FeedbackTemplate
        .Feedback-Content
            .Feedback-Header
                UserAvatar(:avatar="userAvatar" online=false)
                    
                    //- a(href="#")
                    //-     img(:src="require('@/assets/img/users/' + userAvatar + '.jpg')")
                .Feedback-Name
                    a.UserName(href="#") {{ userName }}
                    .Date {{ date }}
                .Feedback-Mark
                    app-icon.positive(name="like" size="28" v-if="mark == 'positive'")
                    app-icon.negative(name="dislike" size="28" v-if="mark == 'negative'")
            .Feedback-Body
                .Feedback-Text {{ text }}
                .Feedback-Images 
                    img(v-for="(img, index) in images" :key="index" :src="require('@/assets/img/feedbackImages/' + img.img + '.jpg')")
                
                .Feedback-Footer
                    .Feedback-Vote
                        label Это полезный отзыв?
                        .Feedback-Vote-Options
                            a.yes(href="javascript:void(0);") 
                                span Да
                                span.count 4
                            a.no(href="javascript:void(0);")
                                span Нет
                                span.count 12
                    //- .Feedback-AnswerBtn
                    //-     a.feedbackAnswerBtn(href="javascript:void(0);" @click="answered = !answered" v-if="!answered") Ответить

            //- Slot(name="FeedbackAnswer")
            //-     FeedbackAnswer
            //- Slot(name="FeedbackReplyForm")
            //-     FeedbackReplyForm

            .Feedback-Answer-Content
                .Feedback-Answer-Header
                    MasterAvatar(avatar="1" online=true pro=true)
                    .Master-Name
                        a.MasterName(href="#") {{ masterName }}
                        .Date
                            span(v-if="answered")  {{ date }}
                            span(v-if="!answered") {{ localeDate }}

                .Feedback-Answer-Body
                    .FeedbackAnswer(v-if="answered")
                        .Feedback-Text {{ answerText }}
                        .Feedback-Images 
                            img(v-for="(img, index) in images" :key="index" :src="require('@/assets/img/feedbackImages/' + img.img + '.jpg')")

                    form.feedbackFormAnswer(v-if="!answered")
                        AttachButton
                        TextArea(name="feedbackAnswer" placeholder="Напишите ответ..." :rows="2")
                        SendButton

                

                        

                    
</template>

<script>
import UserAvatar from "@/components/common/UserAvatar.vue";
import MasterAvatar from "@/components/common/MasterAvatar.vue";
import TextArea from "@/components/common/TextArea.vue";
import AttachButton from "@/components/common/AttachButton.vue";
import SendButton from "@/components/common/SendButton.vue";

export default {
    data () {
        return {
            currentDate: 1580558031264,
        }
    },
    computed: {
        localeDate() {
            // Конвертируем число в строку. Для этого существуют специальные методы
            // toLocaleDateString() или toLocaleString() или toLocaleTimeString()
            // Итоговая строка будет зависеть от локализации системы пользователя. 
            // Для русской локали это будет "01.02.2020", 
            // для американской "2/1/2020", 
            // для немецкой — "1.2.2020"
            // Вы НЕ должны устанавливать формат даты самостоятельно
            return (new Date(this.currentDate)).toLocaleString({ hour12: false }) 
        },
    },
    components: {
        UserAvatar,
        MasterAvatar,
        TextArea,
        AttachButton,
        SendButton,
    },
    props: {
      userName: {
          type: String,
          required: true,
      },
      userAvatar: {
          type: String,
          required: true,
      },
      mark: {
          type: String,
          required: true,
      },
      date: {
          type: String,
          required: true,
      },
      images: {
          type: Array,
          required: false,
      },
      text: {
          type: String,
          required: true,
      },
      answered: {
          type: Boolean,
          required: false,
          default: false,
      },
      answerText: {
          type: String,
          required: false,
      },
      masterName: {
          type: String,
          required: false,
      },
    }, 

}
</script>


<style lang="scss" scoped>

.Feedback-Mark {
    margin-left: auto;
    .icon {
        &.positive {
            fill: var(--palette-green);
        }
        &.negative {
            fill: var(--palette-pink);
        }
    }
}

.FeedbackTemplate {
    display: flex;
    position: relative;
    &:not(:first-child) {
        margin-top: 60px;
        &:before {
            content: '';
            position: absolute;
            z-index: 1;
            top: -30px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--palette-dark-lighter);
            display: block;
            
        }
    }

    @include respond-to (medium-screens) {
        // flex-wrap: wrap;
        display: block;
    }
}

.User-Avatar {
    margin-right: 20px;
    flex-shrink: 0;
    img {
        overflow: hidden;
        border-radius: 100%;
    }
    @include respond-to(handlers) {
        margin-right: 10px;
        margin-bottom: 15px;
    }
}

.Master-Name {
    // 
}

.Feedback-Header {
    height: 72px;
    display: flex;
    align-items: center;
}

.Feedback-Body {
    max-width: calc(100% - 84px);
    margin-left: auto;
    @include respond-to(medium-screens) {
        max-width: 100%;
        margin-left: 0;
        margin-top: 10px;
    }
}

.UserName {
    text-transform: uppercase;
    font-weight: 700;
    color: var(--palette-blue);
    text-decoration: none;
}

.Date {
    font-size: 13px;
    color: #fff;
    opacity: .5;
    font-weight: 300;
}

.Feedback-Text {
    background-color: var(--palette-dark-light);
    padding: 20px;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 20px;
}

.Feedback-Images {
    display: flex;
    img {
        width: 68px;
        height: 68px;
        border-radius: 4px;
        margin-bottom: 30px;
        &:not(:first-child) {
            margin-left: 10px;
        }
    }
}

.Feedback-Vote {
    label {
        opacity: .5;
        font-size: 13px;
    }
}

.Feedback-Vote-Options {
    margin-top: 10px;
    a {
        font-size: 12px;
        background-color: var(--palette-dark-lighter);
        color: #fff;
        text-decoration: none;
        display: inline-flex;
        font-weight: 700;
        border-radius: 4px;
        overflow: hidden;
        span {
            padding: 1em 1.5em;
        }
        .count {
            background-color: var(--palette-dark-light);
            font-weight: 300;
        }
        &.yes {
            margin-right: 10px;
        }
        &.selected {
            &.yes {
                margin-right: 10px;
                span {
                    &:first-child {
                        background-color: var(--palette-blue);
                        color: var(--palette-dark-regular);
                    }
                }
                .count {
                    color: var(--palette-blue);
                }
            }
            &.no {
                span {
                    &:first-child {
                        background-color: var(--palette-pink);
                    }
                }
                .count {
                    color: var(--palette-pink);
                }
            }
        }
        
    }   
}

.Feedback-Footer {
    display: flex;
    align-items: flex-end;
}

.Feedback-AnswerBtn {
    margin-left: auto;
}

.FeedbackAnswer {
    .Feedback-Images {
        img {
            margin-bottom: 0;
        }
    }
}

.feedbackAnswerBtn {
    color: var(--palette-blue);
    font-weight: 700;
    font-size: 13px;
    text-decoration: none;
    padding: 1em 1.5em;
    border-radius: 4px;
    background-color: var(--palette-dark-lighter);
    display: block;
    &:hover {
        background-color: var(--palette-dark-light);
    }
}

.Feedback-Answer-Content {
    margin-top: 30px;
    // display: flex;
    align-items: flex-start;
    max-width: calc(100% - 84px);
    margin-left: auto;
    @include respond-to (medium-screens) {
        // flex-wrap: wrap;
        max-width: calc(100%);
    }
}



.Feedback-Answer-Body {
    // max-width: calc(100% - 64px - 20px);
    max-width: 100%;
    max-width: calc(100% - 84px);
    margin-left: auto;
    @include respond-to (handlers) {
        max-width: 100%;
        margin-top: 20px;
    }
}

.Feedback-Answer-Header {
    height: 64px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    @include respond-to (handlers) {
        height: unset;
    }
}

.MasterName {
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
}


.feedbackFormAnswer {
    display: flex;
    align-items: center;
    background-color: var(--palette-dark-light);
    padding: 20px;
    border-radius: 4px;
    .AttachButton,
    .SendButton {
        flex-shrink: 0;
    }

    .TextArea {
        margin: 0 20px;
    }

    @include respond-to(handlers) {
        // display: block;
        flex-wrap: wrap;
        padding: 10px;
        .TextArea {
            margin: 0;
            margin-bottom: 10px;
            order: -1;
        }
        .SendButton {
            margin-left: auto;
        }
    }
}



</style>