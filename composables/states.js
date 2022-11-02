export const useCart = () => useState(() => [])

export const useAuth = () => useState(() => ({
    isAuth: false
}))

export const useVisitePage = () => useState(() => 0)