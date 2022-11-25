import { useUsersContext } from '../hooks/useUsersContext'
import { useLogout } from '../hooks/useLogout'
import { useState } from "react";


const UserDetails = ({ user }) => {
    const { dispatch } = useUsersContext()
    const { logout } = useLogout()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/users/del/'+user._id, {
            method: 'DELETE',
            headers: {
                'content-type': 'application.json, charset=UTF-8'
            }
        })
        logout()
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_USER', payload: json}) //Call DELETE_USER from UserContext.js
        }
    }

    const handleSubmit = async (e) => {
        console.log(username)
        console.log(password)
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
        //const json = await response.json()

        //if (response.ok) {
        //    dispatch({type: 'PATCH_USER', payload: json}) //Call PATCH_USER from UserContext.js
        //}
    }

    return (
        <div className="user-details">
            <p>------------------------------------------</p>
            <p><strong>Username: </strong>{user.username}</p>
            <button onClick={handleClick}>Delete Account</button>
            <p>------------------------------------------</p>
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
        </div>
    )
}

export default UserDetails