<template>
  <main>
    <div class="logo flex items-center">
      <TailscaleIcon size="small"/>
      <div role="banner" data-testid="banner" class="text-lg font-semibold ml-2 truncate">Sdwan</div>
    </div>
    <NForm
        class="w-[20rem]"
        :show-label="false"
        size="large"
        :show-feedback="false"
    >






    <NFormItem class="mb-3">
      <n-space vertical class="w-[500px]">
        <n-input v-model:value="form.userName" type="text" placeholder="账号" />
      </n-space>
    </NFormItem>

      <NFormItem>
        <n-space vertical class="w-[500px]">
          <n-input v-model:value="form.password" type="text" placeholder="密码" />
        </n-space>
      </NFormItem>








      <NFormItem class="mt-[0.65rem]">
        <NButton
          class="w-full bg-[var(--gray7)] hover:bg-[var(--gray8)] text-white"
          color="#474645"
          text-color="#FFFFFF"
          strong
          @click="login"
        >
            Sign in
        </NButton>
      </NFormItem>






    </NForm>
    <div class="divider">
      or
    </div>
    <NButton
        v-for="(button, btnIndex) in ssoButtons"
        :key="btnIndex"
        class="button-sso button-logo max-w-[20rem]"
        size="large"
        type="default"
        strong
        @click="ssoLoginFuncMap.get(button.name)"
    >
      <img :src="button.icon" class="button-logo-icon" :alt="button.name"/>
      {{ button.label }}
    </NButton>
    <footer class="max-w-[24rem]">
      <p class="mt-[1rem]">
        <strong>First time?</strong>
        Learn more at <a href="https://tailscale.com">tailscale.com</a>.
      </p>
    </footer>
    <footer class="legal">
      <p>
        By clicking the buttons above, you acknowledge that you have read, understood, and agree to Tailscale’s
        <a href="https://tailscale.com/terms" target="_blank">Terms of Service</a>
         and
        <a href="https://tailscale.com/privacy" target="_blank">Privacy Policy</a>.
      </p>
    </footer>
  </main>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import googleIcon from '@/assets/images/login/google.svg'
import githubIcon from '@/assets/images/login/github.svg'
import microsoftIcon from '@/assets/images/login/microsoft.svg'
import TailscaleIcon from '@/components/TailscaleIcon.vue'
import {useRouter} from 'vue-router'
import { fromJSON } from 'postcss'
import { NDialog,NInput,NFormItem } from 'naive-ui'


const router = useRouter()

const form = reactive({
  userName: '',
  password: '',
  isVerifyPass: false,
})

const login = () => {
  if (form.userName=='admin' && form.password=='933ff374c43d831a') {
    router.push('/users')
  }
  else{
    console.log(form.userName)
    console.log(form.password)
  }
}



const ssoLoginFuncMap = new Map([
  ['google', login],
  ['microsoft', login],
  ['github', login],
])

const ssoButtons = [
  {
    name: 'google',
    icon: googleIcon,
    label: 'Sign in with Google',
  },

]
</script>

<style lang="scss" scoped>
main {
  @apply w-screen flex flex-col items-center pt-[2rem] pb-[1rem] text-center min-h-full my-0 mx-auto;

  footer {
    letter-spacing: -0.01em;

    a {
      @apply underline;
    }
  }

  footer.legal {
    @apply max-w-[28rem] mx-auto;
  }
}

.login-form-input {
  @apply bg-[var(--gray0)];
  font-size: 1rem;
  --n-border-hover: transparent !important;
  --n-border-focus: 2px solid rgb(38, 71, 194) !important;
  --n-box-shadow-focus: none !important;

  :deep(input) {
    line-height: 1.5rem;
    letter-spacing: 0;
  }
}

.button-sso {
  @apply mt-[0.65rem];
  padding: 0.5rem 0.75rem 0.5rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  /*color: #242424;*/
  color: var(--gray9);
  border: 0;
  outline: none;
  transition: border-color 200ms ease, box-shadow 200ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  width: 100%;
  //--n-border-hover: #a9a8a6 !important;

  .n-base-wave {
    --n-border: 1px solid #d8d6d4 !important;
  }
}

.button-sso:hover {
  border-color: #a9a8a6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  color: var(--gray9);
}
</style>
