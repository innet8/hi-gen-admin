<template>
  <div class="global-header">
    <div class="global-header__top">
      <RouterLink class="flex items-center" to="/">
        <TailscaleIcon size="small"/>
        <div role="banner" data-testid="banner" class="text-lg font-semibold ml-3 truncate">my username</div>
      </RouterLink>
      <nav class="flex justify-center items-center h-[2rem]" aria-label="External links">
        <a
          v-for="(link, index) in topExternalLinks"
          :key="index"
          class="text-gray-600 hover:text-gray-800 inline-block px-2 py-1"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.name }}
        </a>
        <div class="ml-2 flex items-center">
          <NButton
            style="width: 32px; height: 32px; overflow: hidden"
            circle
            :bordered="false"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <div
              class="w-[32px] h-[32px] bg-cover bg-center"
              :style="`background-image: url(${avatarUrl});`"
            ></div>
          </NButton>
        </div>
      </nav>
    </div>
    <div class="global-header__nav">
      <nav>
        <router-link
          v-for="(tab, index) in navTabs"
          :key="index"
          :to="tab.path"
          class="group"
          active-class="active"
        >
          <div class="group-hover:bg-gray-200">
            <component :is="tab.icon" />
            <span>
              {{ tab.name }}
            </span>
          </div>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import UsersIcon from '@/views/Users/components/UsersIcon.vue'
import SettingsIcon from '@/components/SettingsIcon.vue'
import TailscaleIcon from '@/components/TailscaleIcon.vue'
const avatarUrl = 'https://avatars.githubusercontent.com/u/15177071?v=4'

const topExternalLinks = [
    {
        name: 'Download',
        href: 'https://tailscale.com/download'
    },
    {
        name: 'Support',
        href: 'https://tailscale.com/contact/support'
    },
    {
        name: 'Docs',
        href: 'https://tailscale.com/kb'
    },
]

const navTabs = [
  {
    name: 'Users',
    path: '/users',
    icon: UsersIcon as Component
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: SettingsIcon as Component
  }
]
</script>

<style lang="scss" scoped>
.global-header {
  @apply pt-4 mb-6 border-b;
  background-color: rgb(247, 245, 244);

  &__top {
    @apply mb-4 md:mb-6 flex justify-between items-center px-2 md:px-0;
    width: 94%;
    max-width: 1120px;
  }

  &__nav {
    @apply relative w-full overflow-hidden top-[1px];

    nav {
      @apply flex items-center overflow-auto left-1 relative md:container md:mx-auto md:px-0 md:-left-3;
      -webkit-overflow-scrolling: touch;
      -webkit-scrollbar-width: none;
      -moz-scrollbar-width: none;
      -ms-scrollbar-width: none;
      scrollbar-width: none;
      max-width: 1120px;

      a {
        @apply whitespace-nowrap py-2 relative font-[500];
      }

      a > div {
        @apply px-3 py-2 flex items-center rounded-md after:absolute after:bottom-0
        after:right-3 after:left-3 after:h-0.5 text-gray-600 group-hover:text-gray-800
        after:invisible;
      }

      a.active {
        @apply font-[600] text-blue-600;

        div {
          @apply text-blue-500;
        }
      }

      a.active > div:after {
        @apply visible bg-blue-600 text-blue-600 h-[2px] w-[80%] left-1/2 transform -translate-x-1/2;
        content: '';
      }
    }
  }
}

.global-header > div {
  @apply mx-auto;
}
</style>