import React, { useState } from 'react'
import { login } from '../../firebase/auth'

const LogInForm = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    })

    const { email, password } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            await login(email, password)
        } catch (error) {
            setUserCredentials({ email: '', password: '' })
        }
    }

    const handleChange = event => {
        const { name, value } = event.target

        setUserCredentials(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name='email'
                value={email}
                onChange={handleChange}
                type='email'
                placeholder='Email'
            />
            <input
                name='password'
                value={password}
                onChange={handleChange}
                type='password'
                placeholder='Password'
            />
            <button type='submit'>Log In</button>
        </form>
    )
}

export default LogInForm
