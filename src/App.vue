<template>
  <div class="container">
    <h1>📢 LINE 訊息模擬器</h1>
    
    <label for="msg">輸入訊息內容：</label>
    <textarea v-model="message" id="msg" rows="5" placeholder="請輸入要發送的訊息"></textarea>

    <button @click="sendMessage" :disabled="!message.trim()">送出訊息</button>

    <p v-if="showConfirm" class="confirm">✅ 訊息已模擬送出！</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('')
const showConfirm = ref(false)

function sendMessage() {
  if (!message.value.trim()) return
  alert(`訊息內容：\n${message.value}`)
  showConfirm.value = true
  setTimeout(() => {
    showConfirm.value = false
    message.value = ''
  }, 2000)
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 4rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  font-family: 'Segoe UI', sans-serif;
  background-color: #fff;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #06c755; /* LINE Green */
}

textarea {
  width: 100%;
  padding: 1rem;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: none;
  margin-bottom: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  font-size: 18px;
  background-color: #06c755;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:disabled {
  background-color: #a0e0ba;
  cursor: not-allowed;
}

.confirm {
  margin-top: 1rem;
  text-align: center;
  color: #2c662d;
  font-weight: bold;
}
</style>
