import { useEffect, useState } from 'react';

const Homepage = () => {
    {/*Fetch users from the database*/}
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:4000/api/users')
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
        <div>
            <p>
                this is the Homepage
            </p>
        </div>
    );
}
 
export default Homepage;