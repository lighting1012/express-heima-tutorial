<template>
  <div class="container">
    <div class="box">
      <div class="title">Register Your Account</div>
      <van-form @submit="onSubmit">
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
          <van-button class="submit-btn" round block type="primary" native-type="submit">
            Register
          </van-button>
        </div>
        <div class="tips">
          Already had an account? 
          <span class="link" @click="router.push('/login')">Login</span>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { register } from '@/api/user'

const router = useRouter()

const username = ref('')
const password = ref('')
const onSubmit = (values) => {
  console.log('submit', values)
  register(values).then(resp => {
    console.log(resp.data)
  })
}
</script>
<style scoped lang="scss">
@import '@/styles/login.scss';
</style>