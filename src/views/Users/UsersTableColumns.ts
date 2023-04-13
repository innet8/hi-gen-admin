import {DataTableColumns, NButton} from "naive-ui";
import {h} from "vue";
import UserInfoItem from "@/views/Users/components/UserInfoItem.vue";
import CreatedAt from "@/views/Users/components/CreatedAt.vue";
import LastSeen from "@/views/Users/components/LastSeen.vue";

export type User = {
    avatar: string
    nickname: string
    account: string
    role: string
    createAt: Date
    lastLoginAt: Date
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
        },
        {
            title: 'Joined',
            key: 'createAt',
            render (row) {
                return h(
                    CreatedAt,
                    {
                        time: row.createAt,
                    },
                )
            }
        },
        {
            title: 'Last seen',
            key: 'lastLoginAt',
            render (row) {
                return h(
                    LastSeen,
                    {
                        time: row.lastLoginAt,
                    },
                )
            }
        },
        {
            title: '',
            key: 'actions',
            width: '42px',
            render (row) {
                return h(
                    NButton,
                    {
                        strong: true,
                        tertiary: true,
                        size: 'small',
                        onClick: () => callback(row)
                    },
                    { default: () => '...' }
                )
            }
        }
    ]
}