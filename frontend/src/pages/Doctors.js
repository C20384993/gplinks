//import { Link } from 'react-router-dom'
import walter from './DoctorImages/Walter_White.png'
import chris from './DoctorImages/Chris_Han.png'
import mary from './DoctorImages/Mary_Jones.png'
import jason from './DoctorImages/Jason_Lawer.png'
import './Doctors.css'
import SearchBar from '../components/Searchbar'

const Doctors = () => {
    return(
        <div className='Workers'>

            <div className='doc'>
                <img className='docImage' img src={walter} alt='walter'/>
                <div>
                    Dr.White
                </div>
            </div>

            <div className='doc'>
                <img className='docImage' img src={chris} alt='chris'/>
                <div>
                    Dr.Han
                </div>
            </div>

            <div className='doc'>
                <img className='docImage' img src={mary} alt='mary'/>
                <div>
                    Dr.Jones
                </div>
            </div>

            <div className='doc'>
                <img className='docImage' img src={jason} alt='jason'/>
                <div>
                    Jason Lawer
                </div>
            </div>
            <SearchBar/>
        </div>
    )
}

export default Doctors;