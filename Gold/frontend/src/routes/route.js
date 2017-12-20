import React from 'react'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import QuemSomos from '../template/Rotas/QuemSomos'
import App from '../App'


export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} />
                <Route path='/QuemSomos' component={QuemSomos} />
                {/* <Redirect from='*' to='/QuemSomos'/> */}
            </Switch>
        </BrowserRouter>
    )
}

