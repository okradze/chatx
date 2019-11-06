import React from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LogInForm from '../../components/LogInForm/LogInForm'
import './AuthPage.scss'

const AuthPage = () => (
    <div className='authpage'>
        <LogInForm />
        <SignUpForm />
    </div>
)

export default AuthPage
