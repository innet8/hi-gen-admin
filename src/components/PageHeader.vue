<template>
    <header class="mb-8 w-full">
        <div class="flex justify-between items-center">
            <div class="flex items-center">
                <h1
                    class="text-3xl font-semibold tracking-tight leading-tight"
                    :class="titleClass"
                    tabindex="-1"
                >
                    {{ title }}
                </h1>
            </div>
        </div>
        <slot></slot>
    </header>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: () => 'Title'
    },
    titleClass: {
        type: String,
        default: () => ''
    }
})
</script>

<style lang="scss" scoped>
header {
    @apply mt-0;
    width: 100%;
}
</style>