<template>
  <div class="container">
    <div class="box">
      <div class="title">You did it.</div>
      <div class="greets">Hi {{ username }}</div>
      <div class="link-group">
        <div class="link">About</div>
        <div class="link">Logout</div>
      </div>
    </div>
  </div>
</template>
<script setup>
const username = ref('--')
</script>
<style lang="scss">
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