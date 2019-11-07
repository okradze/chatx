import axios from 'axios'
import { SET_USER, CLEAR_USER } from './userTypes'

const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

const clearUser = () => ({
    type: CLEAR_USER,
})

export const login = userCredentials => {
    return async dispatch => {
        const response = await axios.post('auth/login', userCredentials)
        dispatch(setUser(response.data))
    }
}

export const signup = userCredentials => {
    return async dispatch => {
        const response = await axios.post('auth/signup', userCredentials)
        dispatch(setUser(response.data))
    }
}

export const logout = () => {
    return async dispatch => {
        await axios.post('auth/logout')
        dispatch(clearUser())
    }
}

export const checkAuth = () => {
    return async dispatch => {
        const response = await axios.post('auth/check')
        dispatch(setUser(response.data))
    }
}