<template>   
   <div class="container mx-auto">
    <h1>home page</h1>
    <button @click="moveAboutPage" class="bg-purple-500 p-4 rounded-sm">About</button>
    <HomeProduct />
   </div>
</template>

<script setup>
    function moveAboutPage(){
        navigateTo('about')
    };
</script>

<style lang="scss">
    
</style>