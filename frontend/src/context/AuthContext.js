import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

//authReducer handles 2 cases: logins and signups
//type describes the action taken
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            console.log("Set")
            return { user: action.payload };
        case 'LOGIN':
            //Return user logging in
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        case 'DELETE_USER':
            console.log("Delete User")
            return { user: state.user.filter((u) => u._id !== action.payload._id) };
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

    //Only runs once, when the component is first rendered.
    useEffect(() => {
        //localStorage.getItem('user') is a JSON string, it's being passed into an object that will be used in Javascript.
        const user = JSON.parse(localStorage.getItem('user'))
        //Only update if the user info is in local storage.
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