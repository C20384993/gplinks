import { useEffect } from "react";
import { useDoctorsContext } from "../hooks/useDoctorsContext";
import { useAuthContext } from "../hooks/useAuthContext";

import DoctorDetails from "../components/DoctorDetails"
import DoctorForm from "../components/DoctorForm";

const UserDoctors = () => {
   const {doctors, dispatch} = useDoctorsContext()
   const { user } = useAuthContext()

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
        <h2>My Doctors</h2>
        <br></br>
        {user && (
            <div className="doctors">
                {doctors && doctors.map((doctor) => (
                    <DoctorDetails key={doctor._id} doctor={doctor} />
                ))}
                <br></br>
            </div>
        )}
        {user && (
            <div>
                <DoctorForm />
            </div>
        )}
        {!user && (
            <div>
                <strong>You are not logged in!</strong>
                <p>Please log into your account to view your doctors.</p>
            </div>
        )}
    </div>
    )
}

export default UserDoctors