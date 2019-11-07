import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectUser } from '../redux/user/userSelectors'

const PublicRoute = ({ user, component: Component, ...otherRouteProps }) => {
    if (!user) return <Route component={Component} {...otherRouteProps} />

    return <Redirect to='/home' />
}

const mapStateToProps = createStructuredSelector({
    user: selectUser,
})

export default connect(mapStateToProps)(PublicRoute)
