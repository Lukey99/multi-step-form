<script setup lang="ts">
import { useDeviceStore } from "@/stores/device";
import { computed, ref } from "vue";
import BgSideBarMobile from "@/assets/images/BgSideBarMobile.vue";
import Form from "@/components/organisms/Form.vue";
import { Button } from "..";
import type { Step } from "../types";

const deviceStore = useDeviceStore();
let isMobile = computed(() => deviceStore.isMobile);

const activeStep = ref(0);

const steps: Array<Step> = [
  {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
    inputs: [
      {
        type: "input",
        label: "Name",
        placeholder: "e.g. Stephen King",
      },
      {
        type: "input",
        label: "Email Address",
        placeholder: "e.g. stephenking@lorem.com",
      },
      {
        type: "input",
        label: "Phone Number",
        placeholder: "e.g. +1 234 567 890",
      },
    ],
  },
  {
    title: "Hello world 2",
    description: "Lorem ipsum",
    inputs: [],
  },
];

const submitForm = () => {};
</script>

<template>
  <BgSideBarMobile v-if="isMobile" class="bg-mobile" />

  <div class="steps">
    <Form :steps="steps" :active-step="activeStep" />
  </div>
  <div :class="`stepper-action${activeStep === 0 ? ' single-item' : ''}`">
    <Button
      v-if="activeStep > 0"
      tertiary
      @click="activeStep--"
      text="Go Back"
    />
    <Button
      v-if="activeStep < steps.length - 1"
      @click="activeStep++"
      text="Next Step"
    />
    <Button
      v-if="activeStep === steps.length - 1"
      secondary
      @click="submitForm"
      text="Confirm"
    />
  </div>
</template>

<style scoped lang="scss">
@include mobile {
  .bg-mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
  .stepper-action {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 1rem;
    width: 100vw;
    height: 5rem;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.single-item {
      justify-content: flex-end;
    }
  }
}

.bg-mobile {
  z-index: -1;
}
.steps {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 999;
}
</style>
