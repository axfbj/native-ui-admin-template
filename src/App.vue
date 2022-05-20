<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import InputNumber from './components/InputNumber.vue'
const number = ref(0)
const handlerClick = () => {
  number.value++
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <InputNumber />
  <n-button @click="handlerClick">Default: {{ number }}</n-button>
  <n-button type="primary"> Primary </n-button>
  <n-button type="info"> Info </n-button>
  <n-button type="success">Success</n-button>
  <n-button type="warning"> Warning </n-button>
  <n-button type="error"> Error </n-button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
