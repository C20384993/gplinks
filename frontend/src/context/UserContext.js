import { createContext, useReducer } from "react";

export const UsersContext = createContext()

export const usersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            console.log("Set")
            return {
                users: action.payload
            };
        case 'SET_USER':
            console.log("Set 1")
            return {
                users: state.users.filter((u) => u._id !== action.payload._id)
            };
        case 'DELETE_USER':
            console.log("Delete")
            return {
                users: state.users.filter((u) => u._id !== action.payload._id)
            };
        case 'PATCH_USER':
            console.log("Update password")
            return {
                users: action.payload
            };
        default:
            return state
    }
}

export const UsersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(usersReducer, {
        users: null
    })

    return (
        <UsersContext.Provider value={{...state, dispatch}}>
            { children }
        </UsersContext.Provider>
    )
}