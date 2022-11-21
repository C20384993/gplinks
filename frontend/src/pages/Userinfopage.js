import { useEffect } from "react";
import { useAuthContext } from '../hooks/useAuthContext'

import UserDetails from "../components/UserDetails"

const Userinfopage = () => {
    const {users, dispatch} = useAuthContext()

    useEffect(() => {
        const fetchUser = async () => {
        const response = await fetch('/api/users')
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_USER', payload: json})
        }
    }

    fetchUser()
}, [dispatch])

    return (
        <div className='userinfopage'>
            <h2>My Profile</h2>
            <div className="users">
                {users && users.map((user) => (
                    <UserDetails key={user._id} user={user} />
                ))}
            </div>
        </div>
    )
}

export default Userinfopage;