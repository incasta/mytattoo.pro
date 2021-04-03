<template lang="pug">
    .content
        .Page-Block
            .Page-Block-Header#main-info 
                h2 ФАКТОРЫ, ВЛИЯЮЩИЕ НА РЕЙТИНГ
            .Page-Block-Content
                .Table-DoubleCol
                    .Table-Columm
                        .Table-Row
                            .Table-RowTitle 
                                span Основные
                                .status-factor-group
                                    app-icon(name="check-filled" size="20")
                            .Table-Cell-List
                                .Table-Cell
                                    .Table-Cell-Name Имя
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name Фамилия
                                    .Table-Cell-Value 
                                        span 10
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name Отчество
                                    .Table-Cell-Value 
                                        span 6
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name Псевдоним
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name Загрузить фото на аватар
                                    .Table-Cell-Value 
                                        span 23
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name Пол 
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                            //- END Table-Cell-Lis
                        //- END Table-Row
                        .Table-Row
                            .Table-RowTitle 
                                span Услуги
                                .status-factor-group
                                    app-icon(name="check-filled" size="20")
                            .Table-Cell-List
                                .Table-Cell
                                    .Table-Cell-Name Имя
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name Фамилия
                                    .Table-Cell-Value 
                                        span 11
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name Отчество
                                    .Table-Cell-Value 
                                        span 123
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                            //- END Table-Cell-List
                        //- END Table-Row
                        .Table-Row
                            .Table-RowTitle.completed 
                                span ежедневные
                                .status-factor-group
                                    app-icon(name="check-filled" size="20")
                            .Table-Cell-List
                                .Table-Cell.completed
                                    .Table-Cell-Name Ежедневное посещение сайта
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                            //- END Table-Cell-List
                        //- END Table-Row
                    //- 
                    .Table-Columm
                        .Table-Row
                            .Table-RowTitle 
                                span Подписка на pro-аккаунт
                                .status-factor-group
                                    app-icon(name="check-filled" size="20")
                            .Table-Cell-List
                                .Table-Cell
                                    .Table-Cell-Name 1 месяц (30 дней)
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name 2 МЕСЯЦА (60 ДНЕЙ)
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name 3 МЕСЯЦА (90 ДНЕЙ)
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name Псевдоним
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name 4 МЕСЯЦА (90 ДНЕЙ)
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell.completed
                                    .Table-Cell-Name 5 МЕСЯЦА (90 ДНЕЙ) 
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell.completed
                                    .Table-Cell-Name приобрести каждый вид подписки хотя бы 1 раз
                                    .Table-Cell-Value 
                                        span 125
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                            //- END Table-Cell-Lis
                        //- END Table-Row
                        .Table-Row
                            .Table-RowTitle 
                                span ПОРТФОЛИО
                                .status-factor-group
                                    app-icon(name="check-filled" size="20")
                            .Table-Cell-List
                                .Table-Cell.completed
                                    .Table-Cell-Name Имя
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell
                                    .Table-Cell-Name Фамилия
                                    .Table-Cell-Value 2
                                    .status-factor
                                        app-icon(name="check-filled" size="20")
                                //- 
                                .Table-Cell.completed
                                    .Table-Cell-Name Отчество
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                            //- END Table-Cell-List
                        //- END Table-Row
                        .Table-Row
                            .Table-RowTitle 
                                span ежедневные
                                .status-factor-group
                                    app-icon(name="check-filled" size="20")
                            .Table-Cell-List
                                .Table-Cell
                                    .Table-Cell-Name Ежедневное посещение сайта
                                    .Table-Cell-Value 
                                        span 2
                                        .status-factor
                                            app-icon(name="check-filled" size="20")
                                //- 
                            //- END Table-Cell-List
                        //- END Table-Row
                    //- 
                    
        .Page-Block
            .Page-Block-Header#main-info 
                h2 История рейтинга
                app-icon.tooltip(name="tooltip" width="18")
            .Page-Block-Content
                .Table-SingleCol
                    .Table-Header
                        .Table-Columm-Name
                            span Баллы
                        .Table-Columm-Name
                            span Фактор
                        .Table-Columm-Name
                            span Дата
                    .Table-Row
                        .Table-Cell
                            .Gift-Status
                                app-icon(name="gift" size="15")
                            .Rating_Points.added 
                                span.value 150
                                app-icon(name='token')
                            
                        .Table-Cell
                            .Table-Factor-Name
                                span Ежедневные: Ежедневное посещение сайта
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 
                    .Table-Row
                        .Table-Cell
                            //- .Gift-Status
                            //-     app-icon(name="gift" size="15")
                            .Rating_Points.removed 
                                span.value 150
                                app-icon(name='token')       
                        .Table-Cell
                            .Table-Factor-Name
                                span Ежедневные: Ежедневное посещение сайта
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 
                    .Table-Row
                        .Table-Cell
                            //- .Gift-Status
                            //-     app-icon(name="gift" size="15")
                            .Rating_Points.added 
                                span.value 150
                                app-icon(name='token')      
                        .Table-Cell
                            .Table-Factor-Name
                                span Ежедневные: Ежедневное посещение сайта
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 
                    .Table-Row
                        .Table-Cell
                            .Gift-Status
                                app-icon(name="gift" size="15")
                            .Rating_Points.added 
                                span.value 150
                                app-icon(name='token')      
                        .Table-Cell
                            .Table-Factor-Name
                                span Ежедневные: Ежедневное посещение сайта
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 
                    .Table-Row
                        .Table-Cell
                            //- .Gift-Status
                            //-     app-icon(name="gift" size="15")
                            .Rating_Points.added 
                                span.value 150
                                app-icon(name='token')      
                        .Table-Cell
                            .Table-Factor-Name
                                span Ежедневные: Ежедневное посещение сайта
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 
                    .Table-Row
                        .Table-Cell
                            //- .Gift-Status
                            //-     app-icon(name="gift" size="15")
                            .Rating_Points.added 
                                span.value 150
                                app-icon(name='token')      
                        .Table-Cell
                            .Table-Factor-Name
                                span Ежедневные: Ежедневное посещение сайта
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 


                          
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@include tooltip;
@include TableDoubleCol;

.Page-Block-Header h2 {
    text-align: center;
}

.Table-SingleCol {
    .Rating_Points {
        justify-content: center;
        display: inline-flex;
    }
}


.status-factor-group, 
.status-factor {
    position: absolute;
    display: inline-flex;
    right: 20px;
    opacity: .2;
}

.completed,
.Table-Cell.completed {
    .status-factor {
        opacity: 1;
        svg {
            fill: var(--palette-blue);
        }
    }
    .Table-Cell-Value {
        > span {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    .status-factor-group {
        opacity: 1;
        svg {
            fill: var(--palette-pink);
        }
    }
    .Table-Cell-Name {
        color: var(--palette-blue);
        opacity: 1;
    }
    &:hover {
        .Table-Cell-Value span{
            opacity: 1;
            transform: translateX(0);
        }
        .status-factor {
            opacity: 0;
            .icon {
                transform: translateX(-120%);
            }
        }
    }
}

.status-factor {
    @include trans-ease-out;
    opacity: 0;
    right: 0;
    .icon {
        @include trans-ease-out;
    }
}


.Table-SingleCol {
    @include respond-to(handlers) {
        overflow: auto;
    }
    .Table-Header {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        gap: 3px;

        @include respond-to(handlers) {
            grid-template-columns: minmax(100px, 1fr) minmax(300px, 1fr) minmax(100px, 1fr);
        }
    }

    .Table-Columm-Name {
        text-align: center;
        padding: 15px;
        background-color: var(--palette-dark-light);
        text-transform: uppercase;
        color: var(--palette-pink);
        font-weight: 700;
        letter-spacing: 0.1ex;
        font-size: 15px;
        border-radius: 4px;
        &:not(:first-child) {
            &:nth-child(even) {
                // margin: 0 3px;
            }
        }
        @include respond-to(handlers) {
            padding: 10px;
        }
    }

    .Table-Row {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        gap: 3px;
        border-bottom: 1px solid #232D38;
        padding: 20px 0;
        text-align: center;

        @include respond-to(handlers) {
            grid-template-columns: minmax(100px, 1fr) minmax(300px, 1fr) minmax(100px, 1fr);
        }
    }

    .Table-Cell {
        position: relative;
    }
}

.Rating_Points {
    font-weight: 700;
    &.added {
        color: var(--palette-blue);
        &:before {
            content: '+';
        }
        .icon {
            fill: var(--palette-blue);
        }
    }
    &.removed {
        color: var(--palette-pink);
        &:before {
            content: '-';
        }
        .icon {
            fill: var(--palette-pink);
        }
    }

    .icon {
        vertical-align: middle;
        margin-left: 5px;
    }
}

.Gift-Status {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 100%;
    background-color: var(--palette-dark-light);
    width: 32px;
    height: 32px;
    .icon {
        fill: var(--palette-blue);
        filter: drop-shadow(0 0 5px var(--palette-blue));
    }
}

</style>