<template>
  <div class="flex items-center relative">
    <!-- 扩展图标 -->
    <n-dropdown trigger="hover" :options="options" @select='handleSelect' >
      <n-button :bordered=false>
        <n-icon>
          <i class="fa-solid fa-ellipsis-h"></i>
        </n-icon>
      </n-button>
    </n-dropdown>
    <!-- 下拉框内容 -->
    <div v-if="numbe==='0'">
      <n-modal v-model:show="showModal" >
        <n-card
          style="width: 1000px"
          title="Node details"
          size="huge"
          :bordered="false"
          role="dialog"
          aria-modal="true"
        >
            <n-divider />
            <n-space vertical :size="12" class="mb-2" >
              <n-alert  type="warning">
                The modified node will take effect immediately, which will affect the current use
              </n-alert>
            </n-space>

          <div class="flex justify-around">
            <div>
              <n-form-item  label="Node Remarks" class=" px-5 py-3" show-require-mark=true
              ref="formRef" :model="detail"  require-mark-placement="left"
              >
                <n-input   
                class="w-[400px] bg-[#f3f4f7]" 
                v-model:value="detail.remark"
                type="text"
                />

              </n-form-item>
            </div>
            <div>
              <n-form-item  label="MTU" class=" px-5 py-3">
                <n-input   
                v-model:value="detail.mtu" 
                type="text" 
                disabled
                class="w-[400px] bg-[#f3f4f7]" />
              </n-form-item>
            </div>
          </div>

            <n-space item-style="display: flex;" align="center" class="pb-2 pl-8">
              <n-checkbox 
              size="medium" 
              label="Automatic Refill Line" 
              />
            </n-space>

          <div class="flex justify-around">
            <div>
              <n-form-item  label="Node IP" class=" px-5 py-3">
                <n-input  v-model:value="detail.ip" type="text" disabled  class="w-[400px] bg-[#f3f4f7]" />
              </n-form-item>
            </div>
            <div>
              <n-form-item  label="Dedicated IP" class=" px-5 py-3">
                <n-input 
                v-model:value="detail.vpc_ips"
                type="text"  
                placeholder='Please input multiple items with English "," intervals' 
                class="w-[400px] bg-[#f3f4f7]" 
                />
              </n-form-item>
            </div>
          </div>

        <p class="text-[12px] text-[#8a95b1] py-1 ">Used for: VMess, ShadowSocks access</p>
        
        <!-- :disabled="isReadonlyDomain" 判断是否禁用-->
        <n-form-item path="age" label="Domain Name" class="bg-[#f7f9fc] px-5 py-3">
          <n-input   
          v-model:value="detail.domain"
          type="text"
          :disabled="isReadonlyDomain"
          placeholder="Please enter the domain name" 
          class="bg-[#f3f4f7] " />
        </n-form-item>

            <n-divider />
          <template #footer>

            <div class="flex justify-end">
              <NButton type="tertiary" class="px-3 text-[#647398] w-[70px]" @click="countdown">
                Cancel
              </NButton>
              <NButton type="info" class="ml-5 px-3 bg-[#5891e9] w-[70px] text-[#fff]" @click.stop="handleDrawerSubmit">
                OK
              </NButton>

            </div>
            
          </template>
        </n-card>
      </n-modal>
    </div>
    <div v-else-if="numbe==='1'">

      <n-modal v-model:show="showModal" >
        <n-config-provider :theme="theme">
          <n-card>
            <n-space>
        <n-card
          style="width: 1000px; height:1000px"
          title="Web Terminal"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >





          <n-space vertical >
            <n-layout>
              <n-layout has-sider>
                <n-layout-sider
                  bordered
                  show-trigger
                  collapse-mode="width"
                  :collapsed-width="12"
                  :width="240"
                  :native-scrollbar="false"
                  
                >
                  <n-menu
                    :collapsed-width="64"
                    :collapsed-icon-size="22"
                    :options="menuOptions"
                    class="h-[840px]"
                    @select="handleMenuSelect"
                  />
                </n-layout-sider>

                <div v-if="index">
                  <iframe :src="elements"
                  frameborder="0" 
                  class="h-[840px] w-[950px]">
                  </iframe>
                </div>

                <n-layout  />
              </n-layout>
            </n-layout>
          </n-space>





          <template #footer>
            <div class="flex justify-end">
              <NButton type="tertiary" class="px-3 text-[#647398] w-[70px] ml-3" @click="countdown">
                Cancel
              </NButton>
            </div>
          </template>
        </n-card>
      </n-space>
    </n-card>
  </n-config-provider>
      </n-modal>

    </div>
    <div v-else-if="numbe==='5'">
      <n-modal v-model:show="showModal" >
        <n-card
          style="width: 520px; height:330px "
          title="Resetting node"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
          <template #header-extra>
            
          </template>

          <div>
            <n-alert type="warning">
              <p class="text-[#a2a1a1]">node（{{ detail.remark }}）If you need to reset, the data will be cleared</p> 
            </n-alert>

            <n-form-item show-require-mark=true require-mark-placement="left" label="You are resetting important data, please enter the login password" path="password" class="w-[440px] pt-3" >
                <n-input  type="password" placeholder="Please enter your password" />
            </n-form-item>

        </div>
        
        <div class="flex justify-end">
          <NButton type="tertiary" class="px-3 text-[#647398] w-[70px]" @click="countdown">
            Cancel
          </NButton>
          <NButton type="info" class="ml-5 px-3 bg-[#5891e9] w-[70px] text-[#fff]" @click.stop="handleDrawerSubmit">
            OK
          </NButton>

        </div>

          <template #footer>

          </template>
        </n-card>
      </n-modal>
    </div>
    <div v-else-if="numbe==='6'">
      <n-modal v-model:show="showModal" >
        <n-card
          style="width: 1000px; height:1000px"
          
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >

          <p class="font-bold text-[25px]">{{detail.remark}}</p>
          <p class="font-bold text-[#647398] my-3">Node IP:{{detail.ip}}</p>
          <n-divider />

          <n-scrollbar style="max-height: 750px" >
          <n-table>
            <thead>
              <tr>
                <th class="font-bold text-[15px] text-[#647398]  ">Operating content</th>
              </tr>
            </thead>
            <tbody>
              <tr  v-for="(site,index) in element"  :key="site.id">
                  <td >{{site.content}}</td>
              </tr>
            </tbody>
          </n-table>
        </n-scrollbar>

          <template #footer>
            <div class="flex justify-end">
              <NButton type="tertiary" class="px-3 text-[#647398] w-[70px]" @click="countdown">
                Cancel
              </NButton>
            </div>
          </template>
        </n-card>
      </n-modal>
    </div>
    <div v-else-if="numbe==='8'">
      <n-modal v-model:show="showModal" >
        <n-card
          style="width: 520px; height:350px "
          title="Delete node"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
          <template #header-extra>
            
          </template>

          <div>
            <n-alert type="warning">
              <p class="text-[#a2a1a1]">node（{{ detail.remark }}）The association is as follows. If you need to delete, it will affect the current network</p> 
              <div v-if="detail.token!=''">
                <n-button strong secondary type="warning" class="px-3">
                  Hitosea网络
                </n-button>
              </div>
              <div v-else>
              </div>
            </n-alert>

            <n-form-item show-require-mark=true require-mark-placement="left" label="You are resetting important data, please enter the login password" path="password" class="w-[440px] pt-3" >
                <n-input  type="password" placeholder="Please enter your password" />
            </n-form-item>

        </div>
        
        <div class="flex justify-end">
          <NButton type="tertiary" class="px-3 text-[#647398] w-[70px]" @click="countdown">
            Cancel
          </NButton>
          <NButton type="info" class="ml-5 px-3 bg-[#5891e9] w-[70px] text-[#fff]" @click.stop="handleDrawerSubmit">
            OK
          </NButton>

        </div>

          <template #footer>

          </template>
        </n-card>
      </n-modal>
    </div>
    <div v-else>
      <n-modal v-model:show="showModal" >
        <n-card
          style="width: 600px"
          title="这是所有都不匹配的情况下"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
          <template #header-extra>
            噢！
          </template>
            内容
          <template #footer>
            尾部
          </template>
        </n-card>
      </n-modal>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {NButton,NDropdown,NIcon,NModal} from "naive-ui";
import axios from 'axios';
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'


//1的框中内容（以下）
const menuOptions = [
  {
    label: 'Device',
    key: 'pinball-1973',
    children: [
      {
        label: 'AX9000',
        key: 'rat',
      }
    ]
  },
  {
    label: 'node',
    key: 'dance-dance-dance',
    children: [
      {
        label: props.detail.remark,
        key: "kkb",
      }
    ]
  }
]
//1的框中内容（以上）

let index =  ref(false)

const theme = ref<GlobalTheme | null>(darkTheme)

const props =  defineProps({
  detail: {
    type: Object,
  }
})
const emits = defineEmits(['drawerCancel', 'drawerSubmit', 'update:modelValue']);
const showModal=ref(false)
let numbe=''

// <!-- :disabled="isReadonlyDomain" 判断是否禁用-->
const isReadonlyDomain = ref(true);
if(props.detail.domain==''){
  isReadonlyDomain.value=false
}

const options = [
  { label: 'Detail',         key: '0' },
  { label: 'Web terminal',   key: '1' },
  { label: 'Command record', key: '2' },
  { label: 'Webhook',        key: '3' },
  { label: 'Container info', key: '4' },
  { label: 'Resetting node', key: '5' },
  { label: 'Node log',       key: '6' },
  { label: 'Deployment log', key: '7' },
  { label: 'Delete',         key: '8' },
]
// 点击下拉框后判断点击的是哪个选项，并用正确的弹窗弹出，下拉选项框的弹窗
function handleSelect(key: string){
  showModal.value=true
  numbe=key
}

function countdown() {
    showModal.value = false;
}

const handleDrawerSubmit = () => {
    emits('drawerSubmit');
    showModal.value = false;
};

//获取数据(日志)
const instance = axios.create({
  baseURL: 'https://cloud7.gezi.vip',
  timeout: 5000,
  headers: {
    Authorization: 'Bearer cCFcCNBqA76D6MRigqlSWtU0dccn1ziXXBwITeEm'
  }
})
const element=ref()
instance.get(`/api/admin/nodes/${props.detail.id}/log-list?user_id=300&pagesize=1000`).then(response => {
  element.value = (response.data.data.data)
})

//获取数据（终端）
const instances = axios.create({
  baseURL: 'https://cloud7.gezi.vip',
  timeout: 5000,
  headers: {
    Authorization: 'Bearer cCFcCNBqA76D6MRigqlSWtU0dccn1ziXXBwITeEm'
  }
})
const elements=ref()
instances.get(`/api/admin/nodes/${props.detail.id}/webssh?id=${props.detail.id}&container_id=0&_t=1686018060887`).then(response => {
  elements.value = (response.data.data.url)
})

//获取数据（device）
const devices = axios.create({
  baseURL: 'https://cloud7.gezi.vip',
  timeout: 5000,
  headers: {
    Authorization: 'Bearer cCFcCNBqA76D6MRigqlSWtU0dccn1ziXXBwITeEm'
  }
})
const device=ref()
devices.get(`/api/admin/devices/6278/ssh-open?_t=1686020546553`).then(response => {
  device.value = (response.data.data.url)
  console.log("--------------")
  console.log(device)
  console.log("device")
}) 

//获取数据（获取的原始元素）
const elem=ref()

devices.get('/api/admin/nodes?user_id=300').then(response => {
  elem.value = (response.data.data.data)
  console.log("-------------")
  console.log(elem.value[0])
  console.log("原始")
})
function handleMenuSelect(key: string) {
  if (key === 'kkb') {
    index.value=true
  }
}

</script>



<style lang="scss" scoped>
.nickname {
  @apply font-semibold hover:text-blue-500 no-underline;
}

</style>

