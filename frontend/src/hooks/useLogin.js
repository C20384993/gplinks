import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null) //Handles errors encountered when creating an account.
    const [isLoading, setIsLoading] = useState(null) //Set the state of the create account button to loading after it is clicked.
    const { dispatch } = useAuthContext()

    const login = async (username, password) => {
        setIsLoading(true) //Set state to loading when creating an account
        setError(null) //Reset the error status for each create account request

        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, //Sending application/json data
            body: JSON.stringify({username, password}) //The data being sent, the username and password are sent as JSON
        })
        const json = await response.json() //Will return data with the JSON web token or an error message.

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            //Store the user's data in on the local machine. 
            localStorage.setItem('user', JSON.stringify(json))

            //Update the authentication context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}