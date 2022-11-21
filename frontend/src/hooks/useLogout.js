import { useAuthContext } from "./useAuthContext"
import { useDoctorsContext } from "./useDoctorsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: doctorsDispatch } = useDoctorsContext()

    const logout = () => {
        localStorage.removeItem('user') //Removes the logged in user from local machine

        dispatch({type: 'LOGOUT'}) //The logout action, uses LOGOUT from useAuthContext
        doctorsDispatch({type: 'SET_DOCTORS', payload: null}) //Reset global state of doctors when logging out.
    }

    return {logout}
}