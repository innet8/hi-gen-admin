<template>
  <div class="time-display items-center cursor-default">
  <span class="text-gray-600">
    {{ createdAtTime }}
  </span>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
    time: {
        type: Date,
        default: () => new Date()
    }
})

const createdAtTime = computed(() => {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[props.time.getMonth()]} ${props.time.getDate()}, ${props.time.getFullYear()}`;
})
</script>

<style lang="scss" scoped>
.time-display {
  display: none;
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
    }
  }
}
</style>