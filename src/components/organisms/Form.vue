<script setup lang="ts">
import { defineProps, computed, ref } from "vue";
import type { Step } from "../types";
import { Input } from "..";

const props = defineProps({
  activeStep: {
    type: Number,
    default: 0,
  },
  steps: {
    type: Array<Step>,
    default: () => [
      {
        title: "Hello world",
        description: "Lorem Ipsum",
      },
    ],
  },
});

const title = computed(() => {
  return props.steps[props.activeStep].title;
});

const description = computed(() => {
  return props.steps[props.activeStep].description;
});

const inputs = computed(() => {
  return props.steps[props.activeStep].inputs;
});

const componentMapping: Object = {
  input: Input,
};
</script>

<template>
  <div class="form-wrapper">
    <div class="step-indicator">
      <div v-for="(step, index) in steps" :key="index">
        <p :class="{ selected: index === activeStep }">{{ index + 1 }}</p>
      </div>
    </div>
    <div class="form">
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
      <div class="form-inputs">
        <component
          v-for="(input, index) in inputs"
          :key="index"
          v-bind="input"
          :is="componentMapping[input.type]"
        ></component>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-wrapper {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .step-indicator {
    display: flex;
    gap: 1rem;
    padding: 2.5rem;
    p {
      width: 2.125rem;
      height: 2.125rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 1px solid var(--white);
      font-weight: 600;
      color: var(--white);
    }
    .selected {
      background-color: var(--pastel-blue);
      border-color: var(--pastel-blue);
      color: var(--marine-blue);
    }
  }
  .form {
    @include mobile {
      width: 100%;
      background-color: white;
      h1 {
        font-size: 2em;
        color: var(--color-heading);
        font-weight: bold;
        line-height: 100%;
      }
      h2 {
        font-size: 1.25em;
        color: var(--color-description);
        line-height: 1.5;
      }
    }
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.5rem;
    padding: 2rem 1.5rem 1.75rem 1.5rem;
    .form-inputs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>
