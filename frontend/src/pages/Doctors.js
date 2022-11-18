//import { Link } from 'react-router-dom'
import walter from './DoctorImages/Walter_White.png'
import chris from './DoctorImages/Chris_Han.png'
import mary from './DoctorImages/Mary_Jones.png'

const Doctors = () => {
    return(
        <div className='doctors'>

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

        </div>
    )
}

export default Doctors;