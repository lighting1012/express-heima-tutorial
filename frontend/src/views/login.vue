<template>
  <div class="container">
    <div class="box">
      <div class="title">Login To Start</div>
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
            Login
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { login } from '@/api/auth'

const username = ref('admin')
const password = ref('123456')
const onSubmit = (values) => {
  console.log('submit', values)
  login(values).then(resp => {
    console.log(resp.data)
  })
}
</script>
<style lang="scss">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px #a9a9a9;
    border-radius: 20px;
    .title {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 50px;
      background: linear-gradient(to right, #ff6b6b, #ffa04d);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
    .submit-btn {
      background: linear-gradient(to right, #ff6b6b, #ffa04d);
      border: none;
      color: #fff;
      font-size: 18px;
    }
    .van-cell {
      font-size: 18px;
    }
  }
}
</style>