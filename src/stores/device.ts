import { defineStore } from "pinia";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

export const useDeviceStore = defineStore("device", () => {
  const windowWidth = ref<number>(window.innerWidth);
  const isMobile = computed(() => windowWidth.value < 768);
  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    updateWindowWidth;
    window.addEventListener("resize", updateWindowWidth);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWindowWidth);
  });

  return {
    isMobile,
  };
});
