<template>
    <div>
        <button @click="increment()">Increment</button>
        <p>{{count}}</p>
        <button @click="decrement()">Dcrement</button>
    </div>
</template>


<script setup>
    const count = ref(0);

    function increment(){
        this.count++
    }

    function decrement(){
        this.count--
}
</script>