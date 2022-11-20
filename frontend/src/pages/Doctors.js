//import { Link } from 'react-router-dom'
import walter from './DoctorImages/Walter_White.png'
import chris from './DoctorImages/Chris_Han.png'
import mary from './DoctorImages/Mary_Jones.png'
import jason from './DoctorImages/Jason_Lawer.png'
import './Doctors.css'

const Doctors = () => {
    return(
        <div className='Workers'>

            <div className='doc'>
                <img className='docImage' img src={walter}/>
                <div>
                    Dr.White
                </div>
            </div>

            <div className='doc'>
                <img className='docImage' img src={chris}/>
                <div>
                    Dr.Han
                </div>
            </div>

            <div className='doc'>
                <img className='docImage' img src={mary}/>
                <div>
                    Dr.Jones
                </div>
            </div>

            <div className='doc'>
                <img className='docImage' img src={jason}/>
                <div>
                    Jason Lawer
                </div>
            </div>
        </div>
    )
}

export default Doctors;