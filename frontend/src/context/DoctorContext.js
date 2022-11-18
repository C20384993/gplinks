import { createContext, useReducer } from "react";

export const DoctorsContext = createContext()

export const doctorsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DOCTORS':
            console.log("Set")
            return {
                doctors: action.payload
            };
        case 'CREATE_DOCTOR':
            console.log("Create")
            return {
                doctors: [action.payload, ...state.doctors]
            };
        case 'DELETE_DOCTOR':
            console.log("Delete")
            return {
                doctors: state.doctors.filter((d) => d._id !== action.payload._id)
            };
        default:
            return state
    }
}

export const DoctorsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(doctorsReducer, {
        doctors: null
    })

    return (
        <DoctorsContext.Provider value={{...state, dispatch}}>
            { children }
        </DoctorsContext.Provider>
    )
}