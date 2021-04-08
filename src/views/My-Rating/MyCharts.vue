<template lang="pug">

    .container
        .Row
            .SideBar
                SideNavigation
                    template(#panel)
                        .Side-Panel
                            .Side-Panel-Header
                                h2 Место в чарте
                            .Side-Panel-Content
                                splide(:options="options")
                                    splide-slide
                                        .Tale-Rank.top1
                                            span 1
                                        a.Tale-Rank-Label(href="#") в чарте города
                                    splide-slide
                                        .Tale-Rank.top10
                                            span 2
                                        a.Tale-Rank-Label(href="#") в чарте региона
                                    splide-slide
                                        .Tale-Rank
                                            span 1230
                                        a.Tale-Rank-Label(href="#") в чарте intattoo.pro
                
            .Main
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

<script>
import SideNavigation from '@/components/Navigation/SideNavigation/Master/SideNavigation.vue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

export default {
    components: {
        SideNavigation,
        Splide,
        SplideSlide,
    },

    data() {
        return {
            options: {
                type: "loop",
                perPage: 1,
                rewind: true,
                speed: 200,
                waitForTransition: false,
                pagination: false,
                autoplay: true,
                padding: "0px",
                easing: "cubic-bezier(0.75, 1, 0.5, 1)",
                arrowPath: "M31.667 19.1573C31.667 18.2276 31.2754 17.3542 30.5539 16.6968L17.0012 4.34756C15.5171 2.99525 13.0951 2.99525 11.611 4.34756L9.44673 6.31969C8.72529 6.97706 8.33366 7.85043 8.33366 8.78015C8.33366 9.70986 8.72529 10.5832 9.44673 11.2406L18.1452 19.1667L9.44673 27.0927C8.72529 27.7501 8.33366 28.6235 8.33366 29.5532C8.33366 30.4829 8.72529 31.3563 9.44673 32.0136L11.611 33.9858C13.0951 35.3381 15.5171 35.3381 17.0012 33.9858L30.5539 21.6177C31.2754 20.9604 31.667 20.087 31.667 19.1573Z",
                destroy: true,
                breakpoints: {
                    575: {
                        perPage: 1,
                        pagination: true,
                    },
                }
            },
        }
    },
}
</script>

<style lang="scss" scoped>

@include tooltip;
@include TableSingleCol;
@include Paginator;

.Page-Block-Header {
    justify-content: center;
}

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


::v-deep.splide {
    .splide__list {
        width: 100%;
        @include respond-to (large-screens) {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        @include respond-to (handlers) {
            justify-content: unset;
        }
        .splide__slide {
            &:not(:last-child) {
                margin-bottom: 25px;
                @include respond-to (handlers) {
                    margin-bottom: 0;
                }
            }
        }
        @include respond-to (large-screens) {
            .splide__slide,
            .splide__slide:not(:last-child) {
                margin-bottom: 10px;
                margin-top: 10px;
            }
        }
    }
    .splide__pagination {
        position: relative;
        margin-top: 30px;
    }
    @include respond-to (handlers) {
        margin-bottom: -20px;
    }
} 



.Tale-Rank {
    font-size: 16px;
    border-radius: 2px;
    font-weight: 700;
    letter-spacing: .1ex;
    color: #c4c4c4;
    background: linear-gradient(162.7deg, #ffffff 12.02%, rgba(255, 255, 112, 0) 88.86%);
    padding: 1px;
    display: inline-flex;
    margin: 0 auto;
    span {
        // display: flex;
        @include flex-ja_center;
        padding: 10px 15px;
        background-color: var(--palette-black-bg);
        &:before {
            content: "# ";
            font-size: 12px;
            margin-right: 4px;
            color: #c4c4c4;
        }
    }
    &.top1 {
        background: linear-gradient(162.7deg, #FFFF70 12.02%, rgba(255, 255, 112, 0) 88.86%);
        text-shadow: 0 0 2px var(--palette-blue);
        color: var(--palette-blue);
        span {
            color: var(--palette-yellow);
            &:before {
                content: '';
                width: 14px;
                height: 14px;
                background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 5.57239C16 4.73291 15.317 4.04993 14.4775 4.04993C13.6381 4.04993 12.9552 4.73291 12.9552 5.57239C12.9552 5.97595 13.1133 6.34314 13.3706 6.61584C12.913 7.12781 12.2484 7.45093 11.5094 7.45093C10.3131 7.45093 9.31116 6.60522 9.06873 5.48047C9.34863 5.20422 9.52246 4.8208 9.52246 4.39746C9.52246 3.55798 8.83948 2.875 8 2.875C7.16052 2.875 6.47754 3.55798 6.47754 4.39746C6.47754 4.8208 6.65149 5.20422 6.93127 5.48047C6.68884 6.60522 5.68689 7.45093 4.4906 7.45093C3.75159 7.45093 3.08704 7.12781 2.62939 6.61584C2.88672 6.34314 3.04492 5.97595 3.04492 5.57239C3.04492 4.73291 2.36194 4.04993 1.52246 4.04993C0.682983 4.04993 0 4.73291 0 5.57239C0 6.29993 0.513062 6.90955 1.19629 7.0592C1.35828 8.39612 1.70142 10.0831 2.42725 11.2307V12.6364C2.42725 12.8966 2.63818 13.1077 2.89844 13.1077H13.1016C13.3618 13.1077 13.5728 12.8966 13.5728 12.6364V11.2307C14.2986 10.0831 14.6417 8.39624 14.8037 7.0592C15.4869 6.90942 16 6.29993 16 5.57239V5.57239ZM13.8976 5.57239C13.8976 5.25256 14.1577 4.99231 14.4775 4.99231C14.7974 4.99231 15.0576 5.25256 15.0576 5.57239C15.0576 5.89221 14.7974 6.15234 14.4775 6.15234C14.1577 6.15234 13.8976 5.89221 13.8976 5.57239ZM7.41992 4.39746C7.41992 4.07764 7.68018 3.81738 8 3.81738C8.31982 3.81738 8.57996 4.07764 8.57996 4.39746C8.57996 4.71729 8.31982 4.97742 8 4.97742C7.68018 4.97742 7.41992 4.71729 7.41992 4.39746V4.39746ZM0.942383 5.57239C0.942383 5.25256 1.20264 4.99231 1.52246 4.99231C1.84229 4.99231 2.10242 5.25256 2.10242 5.57239C2.10242 5.89221 1.84229 6.15234 1.52246 6.15234C1.20264 6.15234 0.942383 5.89221 0.942383 5.57239ZM3.36963 12.1652V11.5618H12.6304V12.1652H3.36963ZM12.8427 10.6193H3.15747C2.6615 9.77795 2.37671 8.59607 2.21338 7.52942C2.82043 8.06677 3.61804 8.39331 4.4906 8.39331C6.05701 8.39331 7.38196 7.3407 7.7959 5.90576C7.86267 5.91479 7.93079 5.9198 8 5.9198C8.06921 5.9198 8.13733 5.91479 8.2041 5.90576C8.61804 7.3407 9.94299 8.39331 11.5094 8.39331C12.3822 8.39331 13.1803 8.06653 13.7874 7.52869C13.6241 8.59521 13.3394 9.77698 12.8427 10.6193Z' fill='%23FFFF70'/%3E%3C/svg%3E%0A");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                margin-right: 10px;
            }
        }
        
    }
    &.top10 {
        background: linear-gradient(162.7deg, var(--palette-blue) 12.02%, rgba(255, 255, 112, 0) 88.86%);
        text-shadow: 0 0 2px var(--palette-blue);
        color: var(--palette-blue);
        span {
            color: var(--palette-blue);
            &:before {
                content: '';
                background-image: url("data:image/svg+xml,%3Csvg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M8.95168 14.3623C9.45889 13.2754 10.0633 11.4247 9.21895 10.6267C8.44066 10.7519 7.8113 10.7527 7.29924 10.6295C6.0098 10.3193 5.60165 9.22471 5.95665 7.82299C4.2218 9.52162 4.14856 12.0263 4.79169 14.4381C4.89615 14.8298 4.48686 15.1507 4.16991 14.9244C4.06197 14.8473 1.52673 13.0038 1.52673 10.1649C1.52673 5.51424 6.44783 5.31414 6.44783 0.439909C6.44783 0.0675754 6.85502 -0.136211 7.1215 0.103283C9.08797 1.87069 12.6663 6.11927 12.4655 10.0268C12.3659 11.9639 11.3836 13.6117 9.54593 14.9244C9.19834 15.1726 8.7643 14.7638 8.95168 14.3623Z' fill='%2300F0FF'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='14' height='15' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                width: 14px;
                height: 14px;
                margin-right: 10px;
            }
        }
    }
}

.Tale-Rank-Label {
    text-transform: uppercase;
    font-weight: 700;
    color: var(--palette-blue);
    font-size: 14px;
    margin-top: 7px;
    display: block;
    text-decoration: none;
    letter-spacing: .05ex;
}



</style>