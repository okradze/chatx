import React, { useEffect, useContext } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { UserContext } from './providers/user/UserProvider'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'

const App = () => {
    const { checkAuth } = useContext(UserContext)

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

export default App
