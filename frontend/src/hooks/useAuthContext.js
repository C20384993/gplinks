import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

//Hook, called when the user value is used in any component
//User is destructured from the context object
export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('useAuthContext has to be inside a AuthContextProvider')
    }

    return context
}