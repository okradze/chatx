import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { checkAuth } from './redux/user/userActions'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'

const App = ({ checkAuth }) => {
    useEffect(() => {
        checkAuth()
    }, [checkAuth])

    return (
        <div className='app'>
            <BrowserRouter>
                <Switch>
                    <PublicRoute exact path='/' component={AuthPage} />
                    <PrivateRoute path='/home' component={HomePage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    checkAuth: () => dispatch(checkAuth()),
})

export default connect(
    null,
    mapDispatchToProps,
)(App)
