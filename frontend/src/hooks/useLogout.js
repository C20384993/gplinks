import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        localStorage.removeItem('user') //Removes the logged in user from local machine

        dispatch({type: 'LOGOUT'}) //The logout action, uses LOGOUT from useAuthContext
    }

    return {logout}
}