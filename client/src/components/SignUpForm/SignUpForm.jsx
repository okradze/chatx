import React, { useState } from 'react'
import { connect } from 'react-redux'

import { signup } from '../../redux/user/userActions'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import './SignUpForm.scss'

const SignUpForm = ({ signup }) => {
    const [userCredentials, setUserCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async event => {
        event.preventDefault()

        setLoading(true)
        try {
            await signup(userCredentials)
        } catch (error) {}
        setLoading(false)
    }

    const handleChange = event => {
        const { name, value } = event.target

        setUserCredentials(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const { firstName, lastName, email, password } = userCredentials

    return (
        <div className='signup-form'>
            <h3 className='signup-form__title'>Sign Up</h3>
            <form className='signup-form__form' onSubmit={handleSubmit}>
                <FormInput
                    name='firstName'
                    value={firstName}
                    onChange={handleChange}
                    type='text'
                    placeholder='First Name'
                />
                <FormInput
                    name='lastName'
                    value={lastName}
                    onChange={handleChange}
                    type='text'
                    placeholder='Last Name'
                />
                <FormInput
                    name='email'
                    value={email}
                    onChange={handleChange}
                    type='email'
                    placeholder='Email'
                />
                <FormInput
                    name='password'
                    value={password}
                    onChange={handleChange}
                    type='password'
                    placeholder='Password'
                />
                <CustomButton type='submit' disabled={loading}>
                    Sign Up
                </CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signup: userCredentials => dispatch(signup(userCredentials)),
})

export default connect(
    null,
    mapDispatchToProps,
)(SignUpForm)
