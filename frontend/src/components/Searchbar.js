import DoctorsList from './DoctorsList.json' //Array of JSON objects
import { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return(
        <div className="searchbar">
            <input type="text" placeholder="Search for..." 
            onChange={event => {setSearchTerm(event.target.value)}}/>
            {DoctorsList.filter((val) => {
                if (searchTerm === "") {
                    return val
                } else if (val.doctorName.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <div className='searchbarvals'>
                        <p>{val.doctorName}, {val.practicing}, {val.doctorQualification}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default SearchBar;