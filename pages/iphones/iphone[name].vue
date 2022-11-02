<template>
    <div>
        <Head>
            <Title>iPhone-{{name}}</Title>
        </Head>
        <div class="container mx-auto flex justify-center mt-10">
            <div class="flex gap-10">
                <div class="w-40">
                    <img src="/images/iphone-12.jpg" alt="">
                </div>
                <div>
                    <h1 class="text-6xl font-bold leading-normal mb-4">iPhone {{name}}</h1>
                    <button @click="addToCart" class="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-8 rounded-full">
                        <span v-if="inIsCart()">Remove to cart</span>
                        <span v-else>Buy Now</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
   const route = useRoute();
   const name = computed(() => {
    return route.params.name.replaceAll('-' , " ");
   })
   definePageMeta({
    // layout: false
   })
   const fullName = computed(() => {
    return `iPhone${route.params.name}`
   })
   const cart = useCart()
   function inIsCart(){
    return !!cart.value.find((ct) => ct.name === fullName.value)
   }
   function addToCart() {
        if(!inIsCart()){
            cart.value.push({  name: fullName });
        } else{
            cart.value = cart.value.filter((ct) => ct.name !== fullName.value)
        }
   }
</script>
<style lang="scss" scoped>
    
</style>