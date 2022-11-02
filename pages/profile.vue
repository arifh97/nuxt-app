<template>
    <section>
        <h1>Hello Arif</h1>
    </section>
</template>
<script setup>
    definePageMeta({
        layout: 'sidebar',
        middleware: ["auth"],
    })
</script>