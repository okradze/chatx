import React, { useState } from 'react'

import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import { login } from '../../firebase/auth'

import './LogInForm.scss'

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
        <form className='login-form' onSubmit={handleSubmit}>
            <FormInput
                name='email'
                value={email}
                onChange={handleChange}
                type='email'
                placeholder='Email'
                required
            />
            <FormInput
                name='password'
                value={password}
                onChange={handleChange}
                type='password'
                placeholder='Password'
                required
            />
            <CustomButton type='submit'>Log In</CustomButton>
        </form>
    )
}

export default LogInForm
