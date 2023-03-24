<template>
  <div class="container">
    <div class="box">
      <div class="title">About</div>
      <ul>
        <li>Frontend: vue3, vite3, vant3, axios</li>
        <li>Backend: node, express, jsonwebtoken</li>
        <li>Database: mysql</li>
      </ul>
      <div class="link-group">
        <div class="link" @click="router.push('/home')">Home</div>
        <div class="link" @click="logout">Logout</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { removeToken } from '@/utils/auth'
const router = useRouter()

const logout = () => {
  removeToken()
  router.push('/login')
}
</script>
<style scoped lang="scss">
@import '@/styles/login.scss';
.link-group {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>