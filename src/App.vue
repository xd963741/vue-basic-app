<template>
  <div class="login-container">
    <h2>登入系統</h2>

    <form @submit.prevent="onLogin" class="login-form">
      <label for="username">帳號：</label>
      <input
        id="username"
        v-model="username"
        type="text"
        placeholder="請輸入帳號"
        autocomplete="username"
      />

      <label for="password">密碼：</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="請輸入密碼"
        autocomplete="current-password"
      />

      <button type="submit" :disabled="loading">
        {{ loading ? '登入中...' : '登入' }}
      </button>
    </form>

    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const loading = ref(false)
const message = ref('')

function onLogin() {
  if (!username.value.trim() || !password.value.trim()) {
    alert('請輸入帳號與密碼')
    return
  }

  loading.value = true
  message.value = ''

  // 模擬網路延遲登入流程 (2秒)
  setTimeout(() => {
    loading.value = false
    message.value = `登入成功，歡迎 ${username.value}！`
  }, 2000)
}
</script>

<style scoped>
.login-container {
  max-width: 360px;
  margin: 5rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fff;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

input {
  padding: 0.5rem 0.75rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 5px #42b983;
}

button {
  padding: 0.75rem;
  font-size: 18px;
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:disabled {
  background-color: #a3d9b1;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #369f6e;
}

.message {
  margin-top: 1.5rem;
  font-weight: 600;
  color: #2c662d;
}
</style>
