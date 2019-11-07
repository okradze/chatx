import React, { useState } from 'react'
import { connect } from 'react-redux'

import { login } from '../../redux/user/userActions'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'

import './LogInForm.scss'

const LogInForm = ({ login }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async event => {
        event.preventDefault()

        setLoading(true)
        try {
            await login(userCredentials)
        } catch (error) {
            setUserCredentials({ email: '', password: '' })
        }
        setLoading(false)
    }

    const handleChange = event => {
        const { name, value } = event.target

        setUserCredentials(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const { email, password } = userCredentials

    return (
        <div className='login-form-container'>
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
                <CustomButton type='submit' disabled={loading}>
                    Log In
                </CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    login: userCredentials => dispatch(login(userCredentials)),
})

export default connect(
    null,
    mapDispatchToProps,
)(LogInForm)
