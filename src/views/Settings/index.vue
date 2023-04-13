<template>
    <div class="settings">
        <div class="selection-wrap">
            <NSelect
                class="section-selector"
                size="large"
                v-model:value="tabSelection"
                @update:value="tabSelectionUpdate"
                :options="settingSections"
            >
            </NSelect>
            <div class="section-list">
                <div
                    v-for="(group, groupIndex) in settingSections"
                    :key="groupIndex"
                    class="flex flex-col min-w-[190px]"
                    :class="groupIndex !== settingSections.length - 1 ? 'mb-12' : ''"
                >
                    <div class="flex flex-row gap-[12px]">
                        <component :is="group['icon']"/>
                        <h2 class="text-gray-500 font-medium">{{ group.label }}</h2>
                    </div>

                    <div class="ml-[34px]">
                        <router-link
                            v-for="(link, linkIndex) in group['children']"
                            :key="linkIndex"
                            class="flex font-medium mt-4"
                            :to="link.value"
                        >
                            {{ link.label }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <router-view class="w-full"></router-view>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {SelectOption, SelectGroupOption} from 'naive-ui'
import {useRoute, useRouter} from 'vue-router'
import HomeIcon from "@/views/Settings/Components/HomeIcon.vue";
import PersonIcon from "@/views/Settings/Components/PersonIcon.vue";

const route = useRoute()
const router = useRouter()

/**
 * 切换设置tab
 * */
const tabSelection = ref(route.path)
const tabSelectionUpdate = (val: string) => {
    router.push(val)
}
const settingSections: Array<SelectOption | SelectGroupOption> = [
    {
        type: 'group',
        label: 'Tailnet Settings',
        key: 'Tailnet Settings',
        icon: HomeIcon,
        children: [
            {
                label: 'General',
                key: '/settings/general',
                value: '/settings/general',
            },
            {
                label: 'User management',
                key: '/settings/user',
                value: '/settings/user',
            },
            {
                label: 'Device management',
                key: '/settings/device',
                value: '/settings/device',
            },
            {
                label: 'OAuth clients',
                key: '/settings/OAuth',
                value: '/settings/OAuth',
            },
            {
                label: 'Webhooks',
                key: '/settings/webhooks',
                value: '/settings/webhooks',
            },
            {
                label: 'Contact preferences',
                key: '/settings/contact',
                value: '/settings/contact',
            },
            {
                label: 'Billing',
                key: '/settings/billing',
                value: '/settings/billing',
            },
        ]
    },
    {
        type: 'group',
        label: 'Personal Settings',
        key: 'Personal Settings',
        icon: PersonIcon,
        children: [
            {
                label: 'Keys',
                key: '/settings/keys',
                value: '/settings/keys',
            },
        ]
    },
]
</script>

<style lang="scss" scoped>
.settings {
  @apply flex flex-col md:flex-row md:mt-16;

  .selection-wrap {
    @apply mb-10 md:mr-20 lg:mr-40;

    .section-selector {
      @apply md:hidden text-lg text-left;
      border-radius: .375rem;
    }

    .section-list {
      @apply hidden md:block text-left;
      font-size: 1.125em;

      a {
        @apply text-gray-700;
      }

      a.router-link-exact-active {
        @apply text-blue-600;
      }
    }
  }
}
</style>