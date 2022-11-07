import { Link } from 'react-router-dom'
import walter from './Walter_White.png'
import chris from './Chris_Han.png'
import mary from './Mary_Jones.png'

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

        </div>
    )
}

export default Doctors;