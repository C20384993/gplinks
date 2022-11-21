import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { useAuthContext } from '../hooks/useAuthContext'

const Loginpage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const { user } = useAuthContext()

    //async as it will need to interact with the backend
    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(username, password)
    }

    return (
    <div>
    {!user && (
        <form className="loginpage" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>Username: </label>
            <input
                type="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <label>Password: </label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Sign in</button>
            {error && <div className="error">{error}</div>}
        </form>
     )}
    {user && (
            <div>
                <p><strong>Logged in successfully.</strong></p>
                <p>You are now logged into your account.</p>
            </div>
        )}
    </div>
    );
}

export default Loginpage