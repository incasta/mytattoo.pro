<template lang="pug">
    .content
        .Page-Block
            .Page-Block-Header
                h2 История чарта
                app-icon.tooltip(name="tooltip" size="18")
            .Page-Block-Content
                .Table-SingleCol
                    .Table-Header
                        .Table-Columm-Name
                            app-icon.rating-updown(name="rating-updown" size="28")
                        .Table-Columm-Name
                            span Место
                        .Table-Columm-Name
                            span Чарт
                        .Table-Columm-Name
                            span Дата
                    .Table-Row
                        .Table-Cell
                            .Rank-Status
                                app-icon(name="rank-up" size="15")
                        .Table-Cell
                            .Chart-Place
                                span.value 1 
                                span место 
                        .Table-Cell
                            .Table-Factor-Name
                                span.chart-name ГОРОД 
                                span — 
                                span.chart-city Старый Крым
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 
                    .Table-Row
                        .Table-Cell
                            .Rank-Status
                                app-icon(name="rank-down" size="15")
                        .Table-Cell
                            .Chart-Place
                                span.value 3 
                                span место      
                        .Table-Cell
                            .Table-Factor-Name
                                span.chart-name РЕГИОНАЛЬНЫЙ 
                                span — 
                                span.chart-city Крым
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 
                    .Table-Row
                        .Table-Cell
                            .Rank-Status
                                app-icon(name="rank-down" size="15")
                        .Table-Cell
                            .Chart-Place
                                span.value 14 
                                span место     
                        .Table-Cell
                            .Table-Factor-Name
                                span.chart-name РЕГИОНАЛЬНЫЙ 
                                span — 
                                span.chart-city Крым
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 
                    .Table-Row
                        .Table-Cell
                            .Rank-Status
                                app-icon(name="rank-up" size="15")
                        .Table-Cell
                            .Chart-Place
                                span.value 31 
                                span место    
                        .Table-Cell
                            .Table-Factor-Name
                                span.chart-name ГОРОД 
                                span — 
                                span.chart-city Старый Крым
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 
                    .Table-Row
                        .Table-Cell
                            .Rank-Status
                                app-icon(name="rank-up" size="15")
                        .Table-Cell
                            .Chart-Place
                                span.value 123 
                                span место     
                        .Table-Cell
                            .Table-Factor-Name
                                span.chart-name ГОРОД 
                                span — 
                                span.chart-city Старый Крым
                        .Table-Cell
                            .Table-Date
                                span 20 / 20 / 2044
                    //- 
                    .Table-Row
                        .Table-Cell
                            .Rank-Status
                                app-icon(name="rank-down" size="15")
                        .Table-Cell
                            .Chart-Place
                                span.value 11312 
                                span место 
                        .Table-Cell
                            .Table-Factor-Name
                                span.chart-name ГОРОД 
                                span — 
                                span.chart-city Старый Крым
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

<style lang="scss" scoped>

@include tooltip;
@include TableSingleCol;
@include Paginator;

path.st0 {
    fill: var(--palette-blue) !important;
}

.Table-Columm-Name {
    @include flex-ja_center; 
}

.Table-Columm-Name {
    &:first-child {
        padding: 0;
    }
}

.Chart-Place {
    font-weight: 700;
}

.chart-name {
    font-weight: 700;
    text-transform: uppercase;
    opacity: .5;
}

.chart-city {
    color: var(--palette-blue);
}

</style>