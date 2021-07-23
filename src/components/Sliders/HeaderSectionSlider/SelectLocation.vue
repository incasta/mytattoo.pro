<template lang="pug">

    .SelectLocation
        .label Мое местоположение
        a.Current-City(href="#" @click="showModalAutoLocation")
            span Старый Крым
            app-icon(name="edit-alt" size="14")
                
</template>


<script>

import ModalAutoLocation from "@/components/Modals/ModalAutoLocation.vue"

export default {
    data () {
        return {
            
        }
    },

    components: {
        ModalAutoLocation,
    },

    methods: {
        showModalAutoLocation() {
            // console.log('ModalAutoLocation');
            this.$modal.show(
                ModalAutoLocation,
                { },
                { height: 'auto', width: 400, shiftY: 0.35, reset: true, scrollable: true, styles: "", classes: "ModalLogout"  }
            )
        },
    }
}
</script>

<style lang="scss" scoped>

.SelectLocation { 
    .label {
        text-transform: uppercase;
        font-weight: 700;
        color: var(--palette-blue);
        font-size: 14px;
        letter-spacing: 0.1ex;
        margin-bottom: 20px;
    }

    .Current-City {
        text-transform: uppercase;
        @include flex-ja_center;
        font-weight: 700;
        color: #fff;
        text-decoration: none;
        .icon {
            fill: var(--palette-blue);
            margin-left: 10px;
        }
        &:hover {
            span {
                opacity: .75;
            }
            
        }
    }
}
</style>