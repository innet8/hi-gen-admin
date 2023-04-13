<template>
  <div>
    <div
      class="flex flex-row items-center"
    >
      <h3 class="option-title">
          {{ title }}
      </h3>
      <div>
      <div v-if="hasTag">
        <NTag
          v-for="(tag, tagIndex) in tags"
          :key="tagIndex"
          round
          :bordered="false"
          class="option-tag"
          :class="tag.className"
          :style="tag?.style"
        >
          {{ tag['name'] }}
        </NTag>
      </div>
    </div>
    </div>
    <div class="option-desc-wrap">
      <p>
        {{ description }}
        <a
          :href="learnMoreUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="link whitespace-nowrap"
        >
          Learn more →
        </a>
      </p>
      <div class="ml-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tag {
    name: String
    className?: String
    style?: String
}

defineProps({
    title: {
        type: String,
        default: () => 'Option Title',
    },
    hasTag: {
        type: Boolean,
        default: () => false,
    },
    tags: {
        type: Array<Tag>,
        default: () => [
            {
                name: 'Tag',
                className: ''
            }
        ]
    },
    description: {
        type: String,
        default: () => 'Description'
    },
    learnMoreUrl: {
        type: String,
        default: () => '/'
    }
})
</script>

<style lang="scss" scoped>
.option-title {
  @apply text-gray-700 text-xl font-semibold tracking-tight;
}

.option-tag {
  @apply inline-flex items-center align-middle justify-center font-medium border border-yellow-50 bg-yellow-50 text-yellow-600 rounded-full px-2 py-1 leading-none text-sm ml-2;
}

.option-desc-wrap {
  @apply md:flex md:flex-row md:justify-between mt-2;
  p {
    @apply max-w-lg text-[1rem] text-gray-500 mb-4 md:mb-0;

    a {
      @apply text-blue-600;
    }
  }
}
</style>