<template>
  <main>
    <div class="logo">
      HITOSEA
    </div>
    <NForm
        class="w-[20rem]"
        :show-label="false"
        size="large"
        :show-feedback="false"
    >
      <NFormItem>
        <NInput
            class="login-form-input"
            autofocus
            v-model="form.username"
            :input-props="{ autocomplete: 'email', type: 'email' }"
            placeholder="Enter your email..."
        />
      </NFormItem>
      <NFormItem class="mt-[0.65rem]">
        <NButton class="w-full" type="primary" @click="login">Sign in</NButton>
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

const form = reactive({
  username: '',
})

const login = () => {
  console.log(form)
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
  {
    name: 'microsoft',
    icon: microsoftIcon,
    label: 'Sign in with Microsoft',
  },
  {
    name: 'github',
    icon: githubIcon,
    label: 'Sign in with GitHub',
  },
]
</script>

<style lang="scss" scoped>
main {
  @apply w-full;

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

}

.button-sso {
  @apply mt-[0.65rem];
  padding: 0.5rem 0.75rem 0.5rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  /*color: #242424;*/
  color: var(--gray9);
  border: 1px solid #d8d6d4;
  transition: border-color 200ms ease, box-shadow 200ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  width: 100%;
}

.button-sso:hover {
  border-color: #a9a8a6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}
</style>
