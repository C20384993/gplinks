import { useAuthContext } from '../hooks/useAuthContext'

const UserDetails = ({ user }) => {
    const { dispatch } = useAuthContext()

    const handleClick = async () => {
        const response = await fetch('/api/users/'+user._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_USER', payload: json}) //Call DELETE_USER from AuthContext.js
        }
    }

    return (
        <div className="user-details">
            <p><strong>Username: </strong>{user.username}</p>
            <p>{user.createdAt}</p>
            <span onClick={handleClick}>Delete Account</span>
        </div>
    )
}

export default UserDetails