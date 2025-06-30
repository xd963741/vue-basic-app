<template>
    <div class="login-container">
      <h2>登入</h2>
      <input v-model="username" placeholder="帳號" />
      <input v-model="password" type="password" placeholder="密碼" />
      <button @click="login">登入</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const username = ref('')
  const password = ref('')
  const router = useRouter()
  
  function login() {
    if (username.value.trim() && password.value.trim()) {
      // 實際可改為發送後端登入 API，成功後再跳轉
      router.push('/notify')
    } else {
      alert('請輸入帳號與密碼')
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 360px;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input {
    padding: 0.5rem;
  }
  button {
    padding: 0.75rem;
    background-color: #06c755;
    color: white;
    border: none;
    border-radius: 6px;
  }
  </style>
  