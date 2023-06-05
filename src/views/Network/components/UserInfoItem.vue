<template>
  <div class="flex items-center relative">
    <n-avatar
      class="mr-3 w-8 h-8 md:w-12 md:h-12"
      round
      :size="48"
      :src="avatar"
    />
    <div class="min-w-0">
      <div class="truncate">
        <a
          href="/admin/machines?q=DanielSimgame@github"
          class="nickname stretched-link"
        >
          {{ nickname }}
        </a>
      </div>
      <div class="text-gray-600 truncate">
        {{ account }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  avatar: {
    type: String,
    default: () => 'https://avatars.githubusercontent.com/u/15177071?v=4'
  },
  nickname: {
    type: String,
    default: () => 'Nickname'
  },
  account: {
    type: String,
    default: () => ''
  }
})
</script>

<style lang="scss" scoped>
.nickname {
  @apply font-semibold hover:text-blue-500 no-underline;
}
</style>