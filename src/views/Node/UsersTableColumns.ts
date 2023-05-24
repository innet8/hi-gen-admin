import {DataTableColumns, NButton,NDropdown,NTag,NIcon} from "naive-ui";
import {h} from "vue";
import UserInfoItem from "@/views/Node/components/UserInfoItem.vue";
import '@fortawesome/fontawesome-free/css/all.css'




export type User = {
    avatar: string
    nickname: string
    account: string
    role: string
    createAt: string
    lastLoginAt: string
}

export default function createColumns ({callback}: { callback: (row: User) => void }): DataTableColumns<User> {
    return [
        {
            title: 'User',
            key: 'account',
            render(row) {
                return h(
                    UserInfoItem,
                    {
                        avatar: row.avatar,
                        nickname: row.nickname,
                        account: row.account
                    }
                )
            }
        },
        {
            title: 'Role',
            key: 'role',
            render (row) {
                return h(
                    NTag,
                    {
                        size: 'small',
                        type: "primary"
                    },
                    { default: () => 'Online' }
                )
            }
        },
        {
            title: 'node',
            key: 'createAt',

        },
        {
            title: 'MTU',
            key: 'lastLoginAt',

        },
        {
            title: '',
            key: 'actions',
            width: '42px',
            render(row) {
                return h(
                NDropdown, {
                  size: 'small',
                  trigger: 'hover',
                  showArrow:true,
                  options: [
                    { label: 'Web terminal', key: 'option-1' },
                    { label: 'Command record', key: 'option-2' },
                    { label: 'Container info', key: 'option-3' },
                    { label: 'Resetting node', key: 'option-4' },
                    { label: 'Nodelog', key: 'option-5' },
                    { label: 'Deployment log', key: 'option-6' },
                    { label: 'Delete', key: 'option-7' },
                    { label: 'Detail', key: 'option-8' },
                    {
                        label: 'Web terminal',
                        key: 'option-9',
                        icon: () => h(NIcon, null, { default: () => h('i', { class: 'fa-solid fa-code' }) })
                    }
                  ],
  
                }, {
                    default: '...'
                }
                )
              }
        }
    ]
}