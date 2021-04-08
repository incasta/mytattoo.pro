<template lang="pug">

    .container
        .Row
            .SideBar
                SideNavigation

            .Main
                .content
                    .Page-Block
                        .Page-Block-Header
                            h2 Доступные задания
                            app-icon.tooltip(name="tooltip" size="18")
                        .Page-Block-Content
                            .Repost-Quest-List
                                .Repost-Quest.timer
                                    .Repost-Quest-Name Репостов эскизов: 
                                    .Repost-Quest-Status
                                        .Repost-Quest-Timer 6 д : 23 ч : 59 с
                                    .Repost-Quest-Reward
                                        span
                                            span +50
                                //-  
                                .Repost-Quest.error
                                    .Repost-Quest-Name Репостов тату: 
                                    .Repost-Quest-Status
                                        .status-message Не выполнено
                                    .Repost-Quest-Reload
                                        a.Quest-Reload(href="javascript:void(0);")
                                            app-icon(name="refresh" size="12")
                                    //- .Repost-Quest-Reward
                                    //-     | + 
                                    //-     span 50
                                //-  
                                .Repost-Quest.completed
                                    .Repost-Quest-Name Репостов эскизов: 
                                    .Repost-Quest-Status
                                        .status-message Выполнено
                                    .Repost-Quest-Reward
                                        span
                                            span +50
                                //-  
                                .Repost-Quest.available
                                    .Repost-Quest-Name Репостов эскизов: 
                                    .Repost-Quest-Status
                                        a.Button-Take-Reward(href="javascript:void(0);") Получить 
                                    .Repost-Quest-Reward
                                        span
                                            span +50
                                //-  
                                .Repost-Quest
                                    .Repost-Quest-Name Репостов эскизов: 
                                    .Repost-Quest-Status
                                        .Quest-Counter
                                            span 1 
                                            | / 
                                            span 2 
                                    .Repost-Quest-Reward
                                        span
                                            span +50
                                //-  
                            .Repost-Quest-Footer
                                .Available-Points 
                                    span Доступные баллы:
                                    span.value 50
                                    app-icon.token(name='token')
                                .Button-Wrap
                                    Button(text="Забрать награду" icon="token" extraClass="token")
                                    //- a.Button-Default(href="javascript:void(0);") 
                                    //-     span Забрать награду
                                    //-     span.Button-Icon 
                                    //-         app-icon.token(name='token')
                    .Page-Block
                        .Page-Block-Header#section-2
                            h2 История рейтинга
                            app-icon.tooltip(name="tooltip" width="18")
                        .Page-Block-Content
                            .Table-SingleCol
                                .Table-Header
                                    .Table-Columm-Name
                                        app-icon.tooltip(name="tooltip" width="18")
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
                                    .Table-Cell
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
                                    .Table-Cell
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
                                    .Table-Cell
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
                                    .Table-Cell
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
                                    .Table-Cell
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
                                    .Table-Cell
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

                            .Paginator
                                .prev
                                    app-icon(name="angle-double-left" size="10")
                                .Paginator-Page-List
                                    .Paginator-Page.current
                                        span 1
                                    .Paginator-Page
                                        span 2
                                    .Paginator-Page
                                        span 3
                                .next
                                    app-icon(name="angle-double-right" size="10")

</template>

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import Button from '@/components/common/Button.vue';

export default {
    components: {
        SideNavigation,
        Button
    },
}
</script>

<style lang="scss" scoped>

@include tooltip;
@include TableSingleCol;
@include Paginator;
@include token;
// @include Button-Default;

.Page-Block-Header {
    justify-content: center;
}

.Gift-Status {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    // margin-right: 20px;
    border-radius: 100%;
    background-color: var(--palette-dark-light);
    width: 32px;
    height: 32px;
    .icon {
        fill: var(--palette-blue);
        filter: drop-shadow(0 0 5px var(--palette-blue));
    }
}

.Repost-Quest-List {
    // 
}

.Repost-Quest {
    display: flex;
    align-items: center;
    &:not(:first-child) {
        &:nth-child(even) {
            margin: 20px 0;
        }
    }

    &.available {
        .Repost-Quest-Name {
            opacity: 1;
            text-shadow: 0 0 5px var(--palette-blue);
            color: var(--palette-blue);
        }
    }
    &.completed {
        .Repost-Quest-Reward {
            > span {
                background-color: #091E28;
                > span {
                    color: var(--palette-blue);
                    opacity: .75;
                }
            }
            
        }
        .Repost-Quest-Status {
            color: var(--palette-blue);
        }
        .Repost-Quest-Name {
            color: var(--palette-blue);
        }
    }
    &.error {
        .Repost-Quest-Name {
            color: var(--palette-pink);
        }
        .Repost-Quest-Status {
            color: var(--palette-pink);
        }
    } 
    &.timer {
        .Repost-Quest-Name {
            color: var(--palette-blue);
        }
    }

    @include respond-to(handlers) {
        flex-wrap: wrap;
        // justify-content: center;
        // margin-bottom: 20px;
        padding-bottom: 20px;
        &:not(:last-child) {
            border-bottom: 1px solid #232D38;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
}

.Repost-Quest-Name {
    margin-right: auto;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.1ex;
    opacity: .75;

    @include respond-to(handlers) {
        width: 100%;
        margin-right: 0;
        // text-align: center;
        margin-bottom: 15px;
    }
}

.Repost-Quest-Reward {
    margin-left: 20px;
    min-width: 60px;
    display: flex;
    > span {
        margin-left: auto;
        font-weight: 700;
        font-size: 12px;
        border-radius: 2px;
        padding: 5px 10px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        background-color: var(--palette-dark-light);
        > span {
            color: #fff;
            opacity: .35;
        }
    }
    
    @include respond-to(handlers) {
        margin-left: auto;
    }
    
}

.Repost-Quest-Timer {
    color: var(--palette-blue);
    font-weight: 700;
    font-size: 14px;
}

.Repost-Quest-Status {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
}

.Repost-Quest-Reload {
    margin-left: 20px;
    margin-left: 20px;
    min-width: 60px;
    display: flex;
    @include respond-to(handlers) {
        margin-left: auto;
    }
}

.Quest-Reload {
    @include flex-ja_center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-color: var(--palette-dark-light);
    margin-left: auto;
    .icon {
        fill: var(--palette-pink);
        @include trans-ease-out;
    }
    &:hover {
        .icon {
            transform: rotate(90deg);
            filter: drop-shadow(0 0 5px var(--palette-pink));
        }
    }
}

.Button-Take-Reward {
    color: var(--palette-blue);
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    padding: 10px 25px;
    background-color: var(--palette-dark-light);
    border: 1px solid var(--palette-blue);
    border-radius: 2px;
    text-decoration: none;
    box-shadow: 0 0 0 var(--palette-blue), inset 0 0 0 var(--palette-blue);
    @include trans-ease-out;
    &:hover {
        box-shadow: 0 0 5px var(--palette-blue), inset 0 0 5px var(--palette-blue);
        text-shadow: 0 0 5px var(--palette-blue);
    }
}

.Repost-Quest-Footer {
    display: flex;
    margin-top: 30px;
    border-top: 1px solid #232D38;
    // padding: 20px 0;
    padding-top: 20px;

    .Available-Points {
        @include flex-a_center;
        margin-right: auto;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.1ex;
        font-size: 15px;
        color: var(--palette-blue);
        .value {
            margin-left: 10px;
        }

        @include respond-to(handlers) {
            margin-right: 0;
            margin-bottom: 20px;
        }
    }

    @include respond-to(handlers) {
        margin-top: 10px;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }
}

</style>