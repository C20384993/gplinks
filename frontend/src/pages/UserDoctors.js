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
        const response = await fetch('/api/doctors', {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_DOCTORS', payload: json})
        }
    }

    if (user) {
        fetchDoctors()
    }
}, [dispatch, user])

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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
    )
}

export default UserDoctors