<script setup lang="ts">
import {useRoute} from 'vue-router'
import Layout from '@/views/Layout.vue'

const route = useRoute()
</script>

<template>
  <Layout v-if="route.meta?.useLayout" />
  <router-view v-else/>
</template>
