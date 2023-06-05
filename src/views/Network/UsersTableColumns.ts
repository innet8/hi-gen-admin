import {DataTableColumns, NButton,NDropdown,NTag,NIcon} from "naive-ui";
import {h} from "vue";
import UserInfoItem from "@/views/Network/components/UserInfoItem.vue";
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
            title: 'Remarks',
            key: 'remark',
            render(row) {
                return h(
                    UserInfoItem,
                    {
                        avatar: row.avatar,
                        nickname: row.remark,
                    }
                    
                )
            }
        },
        {
            title: 'Configure',
            key: 'online',
            render (row) {
                if (row.type == '1'||row.type == '2') {
                    if (row.status == '1') {
                        return h(
                            NTag,
                            {
                                size: 'small',
                                type: "primary"
                            },
                            { default: () => '已下发' }
    
                            )}
        
                    else{
                        return h(
                            NTag,
                            {
                                size: 'small',
                                type: "error"
                            },
                            { default: () => '未下发' })}
                }
                if (row.type == '3'||row.type == '4') {
                    if (row.status == '1') {
                        return h(
                            NTag,
                            {
                                size: 'small',
                                type: "info"
                            },
                            { default: () => '已生成' }
    
                            )}
        
                    else{
                        return h(
                            NTag,
                            {
                                size: 'small',
                                type: "error"
                            },
                            { default: () => '未生成' })}

                }
                else{
                    return "-"
                }
            }
        },
        {
            title: 'Online status',
            key: 'online',
            render (row) {
                    return h(
                        NTag,
                        {
                            size: 'small',
                            type: row.online == '1' ? 'success' : '',
                        },
                        { default: () => row.online == '1' ?  '在线': '离线' }
                        )
            }
        },
        {
            title: 's/n',
            key: 'sn',
            render(row) {
                    if(row.sn == '1' || row.sn == '2' || row.sn == '3' || row.sn == '4' || row.sn == '5'){
                        return '-'
                    }else{
                        if (row.email!='') {
                            return '-'
                        }
                            return row.sn
                    }
            }
        },
        {
            title: 'protocol',
            key: 'out_node_remark',
            render(row) {
                if(row.type == '4'){
                    if(row.sn == '1'){
                        return 'VMess'
                    }
                    if(row.sn == '2'){
                        return 'Shadowsocks'
                    }
                    if(row.sn == '3'){
                        return 'L2TP'
                    }
                    if(row.sn == '4'){
                        return 'Openvpn'
                    }
                    if(row.sn == '5'){
                        return 'WireGuard'
                    }
                }else{
                    return "-"
                }
            },
        },
        {
            title: 'Account',
            key: 'email',
            render(row) {
                if(row.email != ''){
                        return row.sn
                }else{
                    return "-"
                }
            },
        },
        {
            title: 'Export',
            key: 'out_node_remark',
            render(row) {
                if(row.out_node_remark != null){
                    return row.out_node_remark
                }else{
                    return "-"
                }

            },
        },
        {
            title: '',
            key: 'actions',
            width: '42px',
            render() {
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