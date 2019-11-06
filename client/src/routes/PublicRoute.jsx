import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../providers/user/UserProvider'

const PrivateRoute = ({ component: Component, ...otherRouteProps }) => {
    const { user } = useContext(UserContext)

    if (!user) return <Route component={Component} {...otherRouteProps} />

    return <Redirect to='/home' />
}

export default PrivateRoute
