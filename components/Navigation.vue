<template>
    <nav class="bg-purple-600 text-white p-3 text-lg flex px-10 items-center justify-between">
        <div class="flex">
            <NuxtLink class="mx-4" to="/">Home</NuxtLink>
            <NuxtLink class="mx-4" to="/about">About</NuxtLink>
            <NuxtLink class="mx-4" to="/iphones">Iphones</NuxtLink>
            <p class="mr-4">Cart ({{cart.length}})</p>
            <p>Total Route visited: ({{totalPageCount}})</p>
        </div>

        <div class="flex">
            <div class="flex" v-if="auth.isAuth">
                <NuxtLink class="mx-4" to="/profile">Profile</NuxtLink>
                <button @click="logout">Logout</button>
            </div>
            <NuxtLink class="mx-4" to="/login" v-if="!auth.isAuth">Login</NuxtLink>
        </div>
    </nav>
</template>

<script setup>
const cart = useCart();
const auth = useAuth();
const totalPageCount = useVisitePage()
function logout(){
    auth.value.isAuth = false
}
</script>

<style lang="scss">

</style>
