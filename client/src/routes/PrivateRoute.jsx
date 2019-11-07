import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Route, Redirect } from 'react-router-dom'

import { selectUser } from '../redux/user/userSelectors'

const PrivateRoute = ({ user, component: Component, ...otherRouteProps }) => {
    if (user) return <Route component={Component} {...otherRouteProps} />

    return <Redirect to='/' />
}

const mapStateToProps = createStructuredSelector({
    user: selectUser,
})

export default connect(mapStateToProps)(PrivateRoute)
