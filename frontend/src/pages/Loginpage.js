import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Loginpage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    //async as it will need to interact with the backend
    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(username, password)
    }

    return (
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
    )
}

export default Loginpage