import { DoctorsContext } from "../context/DoctorContext";
import { useContext } from "react";

export const useDoctorsContext = () => {
    const context = useContext(DoctorsContext)

    if (!context) {
        throw Error('useDoctorsContext must be used inside ContextProvider')
    }

    return context
}