import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

//authReducer handles 2 cases: logins and signups
//type describes the action taken
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            //Return user logging in
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            //Return original state
            return state
    }

}

//Function is used by other components to update the state.
//children represents what the component is wrapping
export const AuthContextProvider = ({ children }) => {
    //Register the state using the reducer hook
    const [state, dispatch] = useReducer(authReducer, {
        //Initial state
        user: null
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }

    }, [])

    console.log('AuthContext state: ', state)

    //return template of AuthContext
    //Have to wrap everything within <AuthContext.Provider>
    //children is the app component, app surrounds every other component
    //This provides the state value to the entire application
    //...state gives everything related to state. This allows more properties to be added later on. 
    //dispatch is used so it can be called from other parts of the website.
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}