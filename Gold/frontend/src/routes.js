import React from 'react'
import {  Route, Switch } from 'react-router-dom'


import AppBar from './App'
import Login from './login/login'
import Blog from './blog/blog'
import SignupPage from './SignupPage/signupPage'

import Teste from './teste/teste'

export default () => {
    return (        
            <main>
                <Switch>
                    <Route exact path='/' component={AppBar} />
                    <Route path='/login' component={Login} />
                    <Route path='/blog' component={Blog} />                    
                    <Route path='/signupPage' component={SignupPage} />
                    <Route path='/teste' component={Teste} />

                </Switch>
            </main>        
    )
}
