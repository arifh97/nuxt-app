export default defineNuxtRouteMiddleware(() => {
    return useAuth().value.isAuth;
})