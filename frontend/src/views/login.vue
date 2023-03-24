<template>
  <div class="container">
    <div class="box">
      <div class="title">Login To Start</div>
      <van-form>
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            label="username"
            placeholder="username"
            autocomplete="off"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="password"
            placeholder="password"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button 
            class="submit-btn" 
            round 
            block 
            type="primary" 
            native-type="submit"
            @click="onSubmit">
            Login
          </van-button>
        </div>
        <div class="tips">
          Don't have an account? 
          <span 
            class="link" 
            @click="router.push('/register')">
            Register
          </span>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { login } from '@/api/user'
import { setToken } from '@/utils/auth'

const router = useRouter()

const username = ref('admin')
const password = ref('123456')
const onSubmit = () => {
  const data = {
    username: username.value,
    password: password.value
  }
  login(data).then(resp => {
    console.log('login::', resp);
    const token = resp.data?.token
    setToken(token)
    router.push('/')
  })
}
</script>
<style scoped lang="scss">
@import '@/styles/login.scss';
</style>