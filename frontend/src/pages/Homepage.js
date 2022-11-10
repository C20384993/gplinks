import { useEffect, useState } from 'react';
import UserDetails from '../components/UserDetails';

const Homepage = () => {
    {/*Fetch users from the database*/}
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/users')
            const json = await response.json()
            {/*Store the users from database in const json*/}

            if (response.ok) {
                setUsers(json)
            }
        }

        fetchUsers()
    }, [])
    {/*Empty array [] is the dependency array, having it empty only runs the function once when the component is first rendered*/}

    return ( 
        <div className="home">
            <div className="users">
                {/*Only runs if there are values. Will not run if = null*/}
                {users && users.map((user) => (
                    <UserDetails key={user._id} user={user}/>
                ))}
            </div>
        </div>
    );
}
 
export default Homepage;