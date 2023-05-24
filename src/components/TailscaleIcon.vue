<template>

      <svg v-if="size === 'small'" width="35" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
            <circle opacity="0.2" cx="3.4" cy="3.25" r="2.7" fill="currentColor"></circle>
            <circle cx="3.4" cy="11.3" r="2.7" fill="currentColor"></circle>
            <circle opacity="0.2" cx="3.4" cy="19.5" r="2.7" fill="currentColor"></circle>
            <circle cx="11.5" cy="11.3" r="2.7" fill="currentColor"></circle>
            <circle cx="11.5" cy="19.5" r="2.7" fill="currentColor"></circle>
            <circle opacity="0.2" cx="11.5" cy="3.25" r="2.7" fill="currentColor"></circle>
            <circle opacity="0.2" cx="19.5" cy="3.25" r="2.7" fill="currentColor"></circle>
            <circle cx="19.5" cy="11.3" r="2.7" fill="currentColor"></circle>
            <circle opacity="0.2" cx="19.5" cy="19.5" r="2.7" fill="currentColor"></circle>
      </svg>

</template>

<script lang="ts" setup>
defineProps({
    size: {
        type: String,
        default: () => 'large'
    }
})
</script>

<style scoped>

</style>