<script setup>
import { computed, defineEmits } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  primary: {
    type: Boolean,
    default: true,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
  tertiary: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const buttonClass = computed(() => {
  if (props.secondary) return "button-secondary";
  if (props.tertiary) return "button-tertiary";
  if (props.primary) return "button-primary";
  return "button-primary";
});

const onClick = ($event) => {
  emit("click", $event);
};
</script>

<template>
  <button :class="buttonClass" @click="onClick">{{ text }}</button>
</template>

<style scoped lang="scss">
button {
  all: unset;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
}

.button-primary {
  background-color: var(--marine-blue);
  color: var(--white);
}

.button-secondary {
  background-color: var(--purplish-blue);
  color: var(--white);
}

.button-tertiary {
  padding: 0 !important;
  background-color: transparent;
  color: var(--cool-gray);
  font-weight: 500;
}
</style>
