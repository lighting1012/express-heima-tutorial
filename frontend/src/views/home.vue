<template>
  <div class="container">
    <div class="box">
      <div class="title">You did it.</div>
      <div class="greets">Hi {{ username }}.</div>
      <div class="link-group">
        <div class="link" @click="router.push('/about')">About</div>
        <div class="link" @click="logout">Logout</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { removeToken } from '@/utils/auth'
import { getInfo } from '@/api/user'
const router = useRouter()
const username = ref('')

const init = () => {
  getInfo().then(resp => {
    console.log(resp);
    username.value = resp.data?.username
  })
}

const logout = () => {
  removeToken()
  router.push('/login')
}

init()

</script>
<style scoped lang="scss">
@import '@/styles/login.scss';
.greets {
  margin-bottom: 10px;
}
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