<template>
  <div>
    <LazyHomeWelcome v-if="page === 'home' " />
    <LazyCounter v-if="page === 'counter' " />
    <br>
    <!-- <NuxtPage /> -->
    <button @click="view('home')">Home</button>
    <button @click="view('counter')">Counter</button>
  </div>
</template>

<script setup>
  const page = ref('home')
  function view(name){
    page.value = name
  }
</script>

