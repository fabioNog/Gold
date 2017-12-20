import React from 'react'
import {  Route, Switch } from 'react-router-dom'


// import Home from './containers/home';
// import Roster from './containers/roster';
// import Schedule from './containers/schedule'


import AppBar from './App'
import Login from './login/login'
import Blog from './blog/blog'
import Register from './register/register'
export default () => {
    return (        
            <main>
                <Switch>
                    <Route exact path='/' component={AppBar} />
                    <Route path='/login' component={Login} />
                    <Route path='/blog' component={Blog} />                    
                    <Route path='/register' component={Register} />
                </Switch>
            </main>        
    )
}
