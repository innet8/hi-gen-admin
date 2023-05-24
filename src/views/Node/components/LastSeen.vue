<template>
  <div class="time-display items-center cursor-default">
    <span
      class="inline-block w-2 h-2 rounded-full bg-gray-300 mr-2"
    >
    </span>
    <span class="text-gray-600">
      {{ lastSeenTime }}
    </span>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
    time: {
        type: Date,
        default: () => new Date()
    }
})

const lastSeenTime = computed(() => {
    const hours = props.time.getHours()
    const minutes = props.time.getMinutes()
    const offsetInMinutes = props.time.getTimezoneOffset()
    const offsetInHours = -(offsetInMinutes / 60)
    const sign = offsetInHours >= 0 ? '+' : '-'
    const absOffset = Math.abs(offsetInHours)

    const ampm = hours >= 12 ? 'PM' : 'AM'
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

    return `${formattedHours}:${formattedMinutes} ${ampm} GMT${sign}${absOffset}`
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