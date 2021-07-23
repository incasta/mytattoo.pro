<template lang="pug">
    
    .container
        .Row
            .Page-Block
                .Page-Block-Header
                    h2 Восстановление доступа
                .Page-Block-Content
                    .Content-Row
                        .Content-Column.full-width
                            .Column-Heading
                                h3 Заполните все поля
                            .Data-Row
                                label.Data-Item
                                    input.Data-Input(type="text" placeholder="Ваша фамилия" value="")
                            .Data-Row
                                label.Data-Item
                                    input.Data-Input(type="text" placeholder="Номер телефона" value="")
                           

                    .Page-Block-Footer
                        span.Footer-Extra-Link Вспомнили пароль? 
                            router-link(:to="'/authorization'") Войти 

                        .Button-Wrap
                            Button(text="Далее" icon="arrow-small-right" href="recovery-pass-step2")
                
</template>

<script>
import Button from '@/components/common/Button.vue';

export default {
    components: {
        Button
    },

}
</script>

<style lang="scss" scoped>
@include blockUI;
@include data-inputs;

.Column-Heading {
    color: var(--palette-blue);
    h3 {
        opacity: 1;
    }
}

.Content-Column { 
    margin-bottom: 20px;
}

.Data-Input {
    margin-left: 0;
    max-width: 100%;
}

.Row {
    justify-content: center;
}

.Page-Block {
    width: 470px;
    max-width: 100%;
}

.Data-Item {
    display: block;
}

.Data-Row {
    height: unset;
    display: block;
}

.Data-Label {
    display: block;
    margin-bottom: 10px;
}

.Content-Row {
    display: block;
}

.Verification-Resend {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--palette-blue);
    margin: 20px 0;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 13px;
    .icon {
        margin-right: 10px;
        fill: var(--palette-blue);
        @include trans-ease-out;
    }
    &:hover {
        .icon {
            transform: rotate(90deg);
        }        
    }
}


.Page-Block-Footer {
    display: flex;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid var(--palette-dark-lighter);
    .Button-Default {
        margin-left: auto;
    }
    @include respond-to(handlers) {
        display: block;
    }
}

.Button-Wrap {
    margin-left: auto;
    @include respond-to(handlers) {
        margin-top: 20px;
    }
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

.Footer-Extra-Link {
    font-size: 13px;
    text-transform: uppercase;
    margin-right: 20px;
    a {
        color: var(--palette-blue);
        font-weight: 700;
        @include trans-ease-out;
        &:hover {
            opacity: .75;
        }
    }

    @include respond-to (handlers) {
        width: 100%;
        margin-bottom: 20px;
        text-align: center;
    }
    
}

</style>