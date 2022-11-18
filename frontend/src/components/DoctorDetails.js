import { useDoctorsContext } from '../hooks/useDoctorsContext'

const DoctorDetails = ({ doctor }) => {
    const { dispatch } = useDoctorsContext()

    const handleClick = async () => {
        const response = await fetch('/api/doctors/'+doctor._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_DOCTOR', payload: json})
        }
    }

    return (
        <div className="doctor-details">
            <h4>{doctor.doctorName}</h4>
            <p><strong>Practicing: </strong>{doctor.practice}</p>
            <p><strong>Qualification: </strong>{doctor.doctorQualification}</p>
            <p>{doctor.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default DoctorDetails