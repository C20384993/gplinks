import { useEffect } from "react";
import { useDoctorsContext } from "../hooks/useDoctorsContext";

import DoctorDetails from "../components/DoctorDetails"
import DoctorForm from "../components/DoctorForm";

const UserDoctors = () => {
   const {doctors, dispatch} = useDoctorsContext()

    useEffect(() => {
        const fetchDoctors = async () => {
        const response = await fetch('/api/doctors')
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_DOCTORS', payload: json})
        }
    }

    fetchDoctors()
}, [dispatch])

return (
    <div className="userdoctors">
        <div className="doctors">
            {doctors && doctors.map((doctor) => (
                <DoctorDetails key={doctor._id} doctor={doctor} />
            ))}
        </div>
        <DoctorForm />
    </div>
    )
}

export default UserDoctors