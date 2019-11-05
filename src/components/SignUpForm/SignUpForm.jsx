import React, { useState } from 'react'
import { signup } from '../../firebase/auth'

const SignUpForm = () => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
    })

    const { displayName, email, password } = userCredentials

    const handleSubmit = event => {
        event.preventDefault()

        signup(email, password, { displayName })
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
                name='displayName'
                value={displayName}
                onChange={handleChange}
                type='text'
                placeholder='Full Name'
            />
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
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default SignUpForm
