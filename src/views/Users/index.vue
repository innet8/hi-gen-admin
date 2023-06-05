<template>
  <section>
    <PageHeader title="Users" title-class="mb-2">
      <p class="text-gray-600 text-left">
        Manage the users in your network and their permissions.
        <a
          href="https://tailscale.com/kb/1138/user-roles/"
          target="_blank"
          rel="noopener noreferrer"
          class="link whitespace-nowrap text-blue-600"
          aria-label="Read documentation about Read KB article about Users"
        >
          Learn more →
        </a>
      </p>
    </PageHeader>
    <div class="search flex gap-[1rem]">
      <NInput size="large" class="text-left" placeholder="Search users...">
        <template #prefix>
          <SearchIcon />
        </template>
      </NInput>
      <div class="popselects">
        <NPopselect>
          <NButton
            class="popselect"
            size="large"
          >
            <span class="flex-1 font-semibold">Status</span>
              <span class="flex-shrink-0">
              <DropdownIcon />
            </span>
          </NButton>
        </NPopselect>
        <NPopselect>
          <NButton
            class="popselect"
            size="large"
          >
            <span class="flex-1 font-semibold">Role</span>
            <span class="flex-shrink-0">
              <DropdownIcon />
            </span>
          </NButton>
        </NPopselect>
      </div>
      <NButton
        class="download-btn flex-1 hidden md:block h-full bg-gray-0 border-gray-300 enabled:hover:bg-gray-100
        enabled:hover:border-gray-300 enabled:hover:text-gray-900 disabled:border-gray-200 disabled:text-gray-400 px-3"
        size="large"
      >
        <DownloadIcon />
      </NButton>
    </div>
    <div class="tags">
      <n-tag round :bordered="false" class="font-medium">
        1 user
      </n-tag>
    </div>
    <div class="table">
      <n-data-table
        :columns="columns"
        :data="data"
        :pagination="false as const"
        :bordered="false"
/>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import SearchIcon from '@/views/Users/components/SearchIcon.vue'
import DownloadIcon from '@/views/Users/components/DownloadIcon.vue'
import DropdownIcon from '@/views/Users/components/DropdownIcon.vue'

import PageHeader from '@/components/PageHeader.vue'
import createColumns, {User} from '@/views/Users/UsersTableColumns'


const aa=    {
  avatar: 'https://avatars.githubusercontent.com/u/15177071?v=4',
  nickname: 'Daniel Morrison',
  account: 'DanielSimgame@github',
  role: '123456789',
  createAt: '123456789',
  lastLoginAt: '123456789'
}

const data: User[] = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/15177071?v=4',
        nickname: 'Daniel Morrison',
        account: 'DanielSimgame@github',
        role: '123456789',
        createAt: '123456789',
        lastLoginAt: '123456789'
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/15177071?v=4',
      nickname: 'Daniel Morrison',
      account: 'DanielSimgame@github',
      role: '123456789',
      createAt: '123456789',
      lastLoginAt: '123456789'
  }
]

data.push(aa)
console.log(data)

const columns = createColumns({
    callback (row: User) {
        console.log('callback', row)
    }
})
</script>

<style lang="scss" scoped>
.search {
  @apply mb-8;
  :deep(.n-input__input) {
    left: 1rem;
  }
}

.download-btn {
  position: relative;
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: transparent;
  padding: 0.5rem 1rem;
  text-align: center;
  font-weight: 500;
  transition-property: background-color,border-color,color,box-shadow;
  transition-duration: .12s;
  box-shadow: 0 1px 1px #0000000a;
}

.popselects {
  @apply flex gap-2;
  .popselect {
    @apply bg-gray-0 border-gray-300 enabled:hover:bg-gray-100 enabled:hover:border-gray-300
    enabled:hover:text-gray-900 disabled:border-gray-200 disabled:text-gray-400 gap-2 flex items-center;
    padding: 0.5rem 1rem !important;
  }
}

.tags {
  @apply w-fit left-0 mb-4;
  .n-tag {
    @apply px-2 py-1 border-gray-200 bg-gray-200 text-gray-600;
  }
}

.table {
  @apply w-full;

  :deep(table) {
    --n-font-size: 16px;
    font-size: var(--n-font-size);

    thead.n-data-table-thead {
      @apply uppercase;
      background-color: transparent;

      tr.n-data-table-tr {
        background-color: transparent;

        th {
          background-color: transparent;
        }

        th[data-col-key="createAt"],
        th[data-col-key="lastLoginAt"] {
          @apply hidden md:table-cell;
        }
      }
    }

    tbody {
      tr {
        @apply relative;
        td[data-col-key="actions"] {
          width: 42px;
        }
      }
    }
  }
}
</style>

