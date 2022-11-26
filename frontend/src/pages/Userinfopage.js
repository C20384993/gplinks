import { useEffect } from "react";
import { useUsersContext } from "../hooks/useUsersContext";
import { useAuthContext } from '../hooks/useAuthContext'
import { useState } from "react";

import UserDetails from "../components/UserDetails"

const Userinfopage = () => {
    const {dispatch} = useUsersContext()
    const { user } = useAuthContext()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    useEffect(() => {
        const fetchUsers = async () => {
        const response = await fetch('/api/users/'+user.username)
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_USERS', payload: json})
        }
    }

    fetchUsers()
}, [dispatch, user])

const handleSubmit = async (e) => {
    const response = await fetch('http://localhost:4000/api/users/update/', {
        method: 'PATCH',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(
            {
                "username" : username,
                "password" : password
            })
        })
        
        const json = JSON.stringify({username, password})

        if (response.ok) {
            dispatch({type: 'UPDATE_USER', payload: json}) //Call DELETE_USER from UserContext.js
        }
}

    return (
        <div className='userinfopage'>
            <h2>My Profile</h2>
            {user && (
                <div className="users">
                
                    <UserDetails key={user._id} user={user} />
                
                    <form onSubmit={handleSubmit}>
                        <strong>Change Password</strong>
                        <label>Enter new Password: </label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />

                        <button onClick={() => setUsername(user.username)}>Update Password</button>
                        <p>------------------------------------------</p>
                    </form>
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