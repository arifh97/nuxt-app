<template>
    <div class="my-12">
        <div class="container mx-auto">
            <h1 class="text-6xl font-bold">All iPhones</h1>
            <div class="flex justify-between">
                <NuxtLink
                 v-for="iphone in data"
                 :key="iphone"
                 :to="`iphones/${iphone}`"
                 class="mt-10">
                    <h1 class="text-5xl mb-7 bold">{{iphone}}</h1>
                    <img :src="`/images/${iphone}.jpg`" class="w-80" alt="">
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: "Next 3 - iPhones"
    });

    const {data} = useFetch("/api/iphones");
    
</script>

<style lang="scss" scoped>

</style>