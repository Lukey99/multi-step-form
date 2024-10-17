<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label" for="">{{ label }}</label>
    <input :value="modelValue" :placeholder="placeholder" />
  </div>
</template>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
  label {
    font-size: 0.9em;
    color: var(--marine-blue)
  }
  input {
    all: unset;
    border: 1px solid var(--light-gray);
    border-radius: 0.125rem;
    padding: 0.25rem 0.75rem;
    &::placeholder {
      font-weight: 500;
      color: var(--cool-gray);
    }
  }
}
</style>
