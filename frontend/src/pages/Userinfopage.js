import { useEffect } from "react";
import { useUsersContext } from "../hooks/useUsersContext";
import { useAuthContext } from '../hooks/useAuthContext'
//import { useState } from "react";

import UserDetails from "../components/UserDetails"

const Userinfopage = () => {
    const {users, dispatch} = useUsersContext()
    const { user } = useAuthContext()
    //const [username, setUsername] = useState('')
    //const [password, setPassword] = useState('')


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

    //------------------------------------------------------------------------------------------------------------------------
    /* UPDATE handleSubmit form with errors, causes backend server to crash, route works in Postman.
    //When form is submitted, try to update the user
    //async as it will need to interact with the backend */
    /*const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:4000/api/users/update', {
            method: 'PATCH',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify({username, password})
        })
        
        .then((res) => {
            return res.json();
        })
        //const json = await response.json()

        //if (response.ok) {
        //    dispatch({type: 'PATCH_USER', payload: json}) //Call PATCH_USER from UserContext.js
        //}
    } 

    
    {users && users.map((user) => (
                    <form onSubmit={handleSubmit}>
                        <strong>Change Password</strong>
                        <label>Enter new Password: </label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />

                        <button>Update Password</button>
                    </form>
                ))} */
        //---------------------------------------------------------------------------------------------------

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