import {DataTableColumns, NButton,NDropdown,NTag,NIcon,NModal,useMessage} from "naive-ui";
import {h,ref} from "vue";
import UserInfoItem from "@/views/Node/components/UserInfoItem.vue";
import '@fortawesome/fontawesome-free/css/all.css'
import dateEnUs from "naive-ui/es/locales/date/enUS";
import MyDialog from './MyDialog.vue';




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
            title: 'Node Remarks',
            key: 'remark',
            render(row) {
                return h(
                    UserInfoItem,
                    {
                        avatar: row.avatar,
                        nickname: row.remark,
                        account: row.account
                    }
                )
            }
        },
        {
            title: 'Status',
            key: 'online',
            render (row) {
                if (row.online) {
                    return h(
                        NTag,
                        {
                            size: 'small',
                            type: "primary"
                        },
                        { default: () => 'Online' })}
                else{
                    return h(
                        NTag,
                        {
                            size: 'small',
                            type: "error"
                        },
                        { default: () => 'Off-line' })}}
        },
        {
            title: 'node',
            key: 'ip',
        },
        {
            title: 'MTU',
            key: 'mtu',
        },
        {
            title: '',
            key: 'actions',
            width: '42px',
            render(row) {
                return h(
                    MyDialog, {
                        detail: row,
                    }
                );
            }
        },
    ]
}
