import { useState } from "react";

const UserForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {username, password}
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        {/*Error check, see if user can be added. If user is added, reset the entry fields.*/}
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setUsername('')
            setPassword('')
            setError(null)
            console.log('User added', json)
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add User</h3>
            <label>Username:</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <label>Password:</label>
            <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

        <button>Create User</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
}

export default UserForm