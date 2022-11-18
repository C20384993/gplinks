import { useState } from "react";
import { useDoctorsContext } from "../hooks/useDoctorsContext";

const DoctorForm = () => {
    const { dispatch } = useDoctorsContext()
    const [doctorName, setDoctorName] = useState('')
    const [practice, setPractice] = useState('')
    const [doctorQualification, setDoctorQualification] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const doctor = {doctorName, practice, doctorQualification}

        const response = await fetch('/api/doctors', {
            method: 'POST',
            body: JSON.stringify(doctor),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setDoctorName('')
            setPractice('')
            setDoctorQualification('')
            setError(null)
            setEmptyFields([])
            console.log('new doctor added', json)
            dispatch({type: 'CREATE_DOCTOR', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add doctor</h3>

            <label>doc name:</label>
            <input
                type="text"
                onChange={(e) => setDoctorName(e.target.value)}
                value={doctorName}
                className={emptyFields.includes('doctorName') ? 'error' : ''}
            />
            <label>practice:</label>
            <input
                type="text"
                onChange={(e) => setPractice(e.target.value)}
                value={practice}
                className={emptyFields.includes('practice') ? 'error' : ''}
            />
            <label>doc Qualification:</label>
            <input
                type="text"
                onChange={(e) => setDoctorQualification(e.target.value)}
                value={doctorQualification}
                className={emptyFields.includes('doctorQualification') ? 'error' : ''}
            />
            <button>Add doctor</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default DoctorForm