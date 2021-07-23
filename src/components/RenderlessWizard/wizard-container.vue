<template>
  <div class="wizard-container">
    <div class="step-content">
      <slot></slot>
    </div>
    <div class="step-controller">
      <button class="Wizard-Button prev" :disabled="!scope.hasPrev" @click="scope.prev">
        Назад
      </button>
      <div class="center Wizard-Steps">
        Шаг {{ scope.currentStep }} / {{ scope.stepsCount }}
      </div>
      <button class="Wizard-Button next" @click="scope.next" :class="{ 'yellow': !scope.hasNext }">
        {{ scope.hasNext ? 'Дальше' : 'Отправить' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['scope'],
};
</script>

<style lang="scss">
.wizard-container {
  background: var(--palette-dark-regular);
  border-radius: 3px;
  box-shadow: 0px 0px 3px 0px rgba(35, 35, 35, 0.3);
  color: #fff;
  font-size: 1.2rem;
  margin: 1rem;
  min-height: 300px;
  // overflow: hidden;
  font-family: 'Jura', sans-serif !important;
  display: flex;
  flex-direction: column;
  // background: transparent;
  background: var(--palette-dark-medium);
  margin: 0;
}

.step-content {
  display: flex;
  position: relative;
  flex: 1 1 0;
  // @include trans-ease-out;
  // overflow: hidden;
}

.step-controller {
  border-top: 1px solid var(--palette-dark-light);
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background: var(--palette-dark-regular);
}

.Wizard-Button {
  background-color: transparent;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  @include trans-ease-out;
  &.prev {
    color: var(--palette-pink);
    text-shadow: 0 0 5px var(--palette-pink);

  }
  &.next {
    color: var(--palette-blue);
    text-shadow: 0 0 5px var(--palette-blue);
  }

  &:hover {
    &.prev {
      text-shadow: 0 0 15px var(--palette-pink);
    }

    &.next {
      text-shadow: 0 0 15px var(--palette-blue);
    }

    &.yellow {
      text-shadow: 0 0 15px var(--palette-yellow);
    }
  }

  &[disabled='disabled'] {
    opacity: .5;
    cursor: default;
  }

  &.yellow {
    color: var(--palette-yellow);
    text-shadow: 0 0 5px var(--palette-yellow);
  }
}

.Wizard-Steps {
  font-size: 12px;
}

</style>
