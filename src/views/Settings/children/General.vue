<template>
  <div>
    <PageHeader title="General">
      <p class="page-header-desc">
        Manage your tailnet account settings.
      </p>
    </PageHeader>
    <div class="general-wrap">
      <header class="max-w-2xl">
        <h3 class="subtitle">
            Organization
        </h3>
        <p class="mt-1 text-gray-600">
          This is your organization’s name. It cannot be changed.
        </p>
      </header>
      <div class="mt-4">
        <div class="max-w-sm">
          <div
            class="flex input-wrapper relative overflow-hidden min-w-0"
          >
            <NInput
              class="outline-none w-full h-full font-mono text-sm text-ellipsis"
              type="text"
              readonly
              value="danielsimgame.github"
          >
            <template #suffix>
              <NButton
                class="flex justify-center px-3 rounded-md bg-white focus:outline-none font-sans link font-medium text-sm"
                :bordered="false"
              >
                <span>Copy</span>
              </NButton>
            </template>
          </NInput>
          </div>
        </div>
      </div>
      <hr class="my-[2.5rem]">
      <div>
        <div
          class="text-2xl font-semibold tracking-tight"
        >
          Feature previews
        </div>
        <p class="text-gray-600 mt-3 mb-10">
          Get early access to features. Feature previews are available for testing,
          but still in development. Please
          <a class="link text-blue-600" href="https://tailscale.com/contact/support">
            share feedback
          </a>
          on how we could make them work better.
        </p>
      </div>

      <div class="options">
        <GeneralSettingItem :description="desc1">
          <div class="ml-2">
            <a class="link whitespace-nowrap text-[1rem] font-medium text-blue-600" href="/admin/acls">
              Manage in Access Controls →
            </a>
          </div>
        </GeneralSettingItem>
        <GeneralSettingItem :hasTag="true" :tags="tags2">
          <div class="ml-2">
            <span data-state="delayed-open" aria-describedby="radix-:r17:">
              <n-switch size="large" />
            </span>
          </div>
        </GeneralSettingItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import GeneralSettingItem from "@/views/Settings/Components/GeneralSettingItem.vue";

const desc1 = 'SSH into servers by using Tailscale and your tailnet policy for authorization and authentication.'
const tags2 = [
    {
        name: 'Beta',
        style: 'background-color: rgb(248,229,185); color: rgb(118,43,11)',
    },
    {
        name: 'Invite only',
        style: 'background-color: rgb(238,235,234); color: rgb(68 67 66)',
    },
]
</script>

<style lang="scss" scoped>
.page-header-desc {
    @apply text-left;
}

.general-wrap {
  header {
    @apply text-left mx-0;

    h3.subtitle {
      @apply text-xl font-semibold tracking-tight;
    }
  }

  .options {
    @apply flex flex-col gap-[2.5rem];
  }
}
</style>