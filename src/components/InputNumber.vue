<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
const disabled = ref(true)
</script>

<template>
  <n-space justify="center">
    <n-switch v-model:value="disabled" />
    <n-input-number v-model:value="value" :disabled="disabled" />
  </n-space>
</template>
