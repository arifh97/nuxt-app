<template>
    <main class="sidebar bg-gray-300">
        <article class="sidebar-nav">
            <p>Dashboard</p>
            <p>About</p>
        </article>
        <slot />
    </main>
</template>
<style lang="scss">
.sidebar{
    display: flex;
    &-nav{
        display: flex;
        flex-direction: column;
    }
}
</style>