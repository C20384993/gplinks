import { useUsersContext } from '../hooks/useUsersContext'
import { useLogout } from '../hooks/useLogout'
//import { useState } from "react";


const UserDetails = ({ user }) => {
    const { dispatch } = useUsersContext()
    const { logout } = useLogout()
    //const [username, setUsername] = useState('')
    //const [password, setPassword] = useState('')

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

    return (
        <div className="user-details">
            <p>------------------------------------------</p>
            <p><strong>Username: </strong>{user.username}</p>
            <button onClick={handleClick}>Delete Account</button>
            <p>------------------------------------------</p>
        </div>
    )
}

export default UserDetails