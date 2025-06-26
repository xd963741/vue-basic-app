<template>
  <div style="text-align:center; padding: 2rem;">
    <h1>Hello Joe 👋</h1>
    <p>This is a simple Vue 3 site deployed on Render.</p>

    <button @click="showAlert" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 16px;">
      點我一下
    </button>
  </div>
</template>

<script setup>
function showAlert() {
  alert("Hello from Joe's Vue App!");
}
</script>

<style>
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f7f9fb;
}
button {
  background-color: #42b983;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #369f6e;
}
</style>
