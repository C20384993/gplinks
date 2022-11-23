import { useEffect } from "react";
import { useUsersContext } from "../hooks/useUsersContext";
import { useAuthContext } from '../hooks/useAuthContext'

import UserDetails from "../components/UserDetails"

const Userinfopage = () => {
    const {users, dispatch} = useUsersContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchUsers = async () => {
        const response = await fetch('/api/users')
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_USERS', payload: json})
        }
    }

    fetchUsers()
}, [dispatch])

    return (
        <div className='userinfopage'>
            <h2>My Profile</h2>
            {user && (
            <div className="users">
                {users && users.map((user) => (
                    <UserDetails key={user._id} user={user} />
                ))}
            </div>
            )}
            {!user && (
                <div className="users">
                    <strong>You are not logged in!</strong>
                    <p>Please login to view your account details.</p>
                </div>
            )}
        </div>
    )
}

export default Userinfopage;