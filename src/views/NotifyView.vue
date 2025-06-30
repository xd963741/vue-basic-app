<template>
    <div class="notify-container">
      <h2>📢 發送 LINE 訊息</h2>
      <textarea v-model="message" rows="5" placeholder="請輸入訊息內容"></textarea>
      <button @click="sendMessage" :disabled="!message.trim()">送出</button>
      <p v-if="confirm">✅ 模擬發送成功</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const message = ref('')
  const confirm = ref(false)
  
  function sendMessage() {
    alert(`訊息內容：\n${message.value}`)
    confirm.value = true
    setTimeout(() => {
      confirm.value = false
      message.value = ''
    }, 2000)
  }
  </script>
  
  <style scoped>
  .notify-container {
    max-width: 600px;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  textarea {
    padding: 1rem;
    font-size: 16px;
  }
  button {
    padding: 0.75rem;
    background-color: #06c755;
    color: white;
    border: none;
    border-radius: 6px;
  }
  </style>
  