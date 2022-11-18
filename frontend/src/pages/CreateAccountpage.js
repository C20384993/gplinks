import { useState } from "react"
import { useCreateaccountpage } from "../hooks/useCreateaccountpage"

const Createaccountpage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {createaccountpage, error, isLoading} = useCreateaccountpage()

    //When form is submitted, try to create the new user
    //async as it will need to interact with the backend
    const handleSubmit = async (e) => {
        //Stop browser from refreshing after submitting
        e.preventDefault()

        //Use the createaccountpage hook
        await createaccountpage(username, password)
    }

    return (
     <form className="createaccountpage" onSubmit={handleSubmit}>
        <h3>Create Account</h3>
        <label>Username: </label>
        <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}   //Update the username state 
            value={username}    //Set the value = to the username state
        />
        <label>Password: </label>
        <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />

        <button disabled={isLoading}>Create Account</button>
        {error && <div className="error">{error}</div>}
     </form>
    )
}

export default Createaccountpage