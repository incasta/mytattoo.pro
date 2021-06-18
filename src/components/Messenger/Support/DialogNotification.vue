<template lang="pug">
    
    .DialogNotification(@click="notification = !notification" :class="{ off: notification, on: !notification }" )
        .DialogNotification-Icon(v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}" content="Отключить увдомления")
            app-icon(name="notification-off" size="16")
        .DialogNotification-Icon(v-tippy="{ delay: [300, 100], arrow : true, arrowType : 'round', theme: 'custom',}" content="Включить уведомления")
            app-icon(name="notification-on" size="16")

</template>

<script>
export default {
    data () {
        return {
            notification: true,
        }
    }
}
</script>


<style lang="scss" scoped>

.DialogNotification {
    cursor: pointer;
    // margin: 0 10px;
    margin-left: 10px;
    @include trans-ease-out;
    .icon {
        fill: var(--palette-pink);
    }
    &.on {
        .DialogNotification-Icon {
            &:last-child {
                display: none;
            }
        }
    }
    &.off {
        .DialogNotification-Icon {
            &:first-child {
                display: none;
            }
        }
    }

    &:hover {
        background-color: var(--palette-dark-lighter);
    }

    @include respond-to(handlers) {
        .DialogNotification-Icon {
            width: 35px;
        }
    }
}

.DialogNotification-Icon {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 55px;
    height: 55px;
    &:last-child {
        .icon {
            fill: var(--palette-green);
        }
    }
}

</style>