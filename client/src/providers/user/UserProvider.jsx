import React, { useState, createContext } from 'react'
import axios from 'axios'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = async userCredentials => {
        const response = await axios.post('auth/login', userCredentials)
        setUser(response.data)
    }

    const signup = async userCredentials => {
        const response = await axios.post('auth/signup', userCredentials)
        setUser(response.data)
    }

    const logout = async () => {
        await axios.post('auth/logout')
        setUser(null)
    }

    const checkAuth = async () => {
        const response = await axios.post('auth/check')
        setUser(response.data)
    }

    return (
        <UserContext.Provider
            value={{ login, logout, signup, checkAuth, setUser, user }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
