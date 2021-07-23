<template lang="pug">
    
    .Account-Progress-Bar
        .Account-Progress-Bar-Desc Заполненность профиля

        radial-progress-bar(
        :diameter="160" 
        :completed-steps="completedSteps" 
        :total-steps="totalSteps" 
        startColor="#00F0FF" 
        stopColor="#00F0FF20" 
        timingFunc="ease" 
        :fps="177" 
        :animateSpeed="500" 
        :innerStrokeWidth="10" 
        :strokeWidth="10" 
        )
            .completedSteps {{ completedSteps }}

        hr.separator
        
        .Account-Progress-Bar-Tip
            .Account-Progress-Bar-Tip-Title загрузите свое фото 
            .Account-Progress-Bar-Tip-Desc Загрузите фотографию своего профиля, так Вы повысите лояльность клиентов. По статистике профили с настоящим фото в профиле получают отклики от клиентов на 42% чаще.
            .Account-Progress-Bar-Tip-Button 
                Button(text="Добавить" )

</template>

<script>
import RadialProgressBar from 'vue-radial-progress';
import Button from '@/components/common/Button.vue';

export default {
    data () {
        return {
            completedSteps: 38,
            totalSteps: 100
        }
    },

    components: {
        RadialProgressBar,
        Button,
    }
}
</script>

<style lang="scss" scoped>

.Account-Progress-Bar {
    position: relative;
    z-index: 0;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--palette-dark-regular);
    padding: 20px;
}

.completedSteps {
    font-weight: 700;
    font-size: 36px;
    color: var(--palette-blue);
    &:after {
        content: '%';
        font-size: 18px;
        display: inline-block;
        vertical-align: top;
        margin-top: 7px;
    }
}

.Account-Progress-Bar-Desc {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    color: var(--palette-blue);
}

.separator {
    width: 100%;
    background: var(--palette-dark-lighter);
    height: 1px;
    border: none;
    margin: 20px 0;
}

.Account-Progress-Bar-Tip {
    text-align: center;
}

.Account-Progress-Bar-Tip-Title {
    color: var(--palette-blue);
    text-transform: uppercase;
    margin-bottom: 10px;

}

.Account-Progress-Bar-Tip-Desc {
    font-size: 13px;
}

.Account-Progress-Bar-Tip-Button {
    margin-top: 20px;
}

.Button-Default {
    color: var(--palette-yellow);
    padding: 1rem 0;
    &:hover {
        text-shadow: 0 0 5px var(--palette-yellow);
    }
}

</style>