import { createContext, CreateContext, useReducer } from 'react'

export const AuthContext = createContext()

//authReducer handles 2 cases: logins and signups
//type describes the action taken
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user:null }
        default:
            return state
    }

}

//Function is used by other components to update the state.
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    console.log('AuthContext state: ', state)

    //return template of AuthContext
    //Have to wrap everything within <AuthContext.Provider>
    //children is the app component, app surrounds every other component
    //This provides the state value to the entire application
    //...state gives everything related to state. This allows more properties to be added later on. 
    return(
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}