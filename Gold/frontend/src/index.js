// Parte do react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Route from './routes'

//Parte do redux
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware,compose } from 'redux';

import { BrowserRouter } from 'react-router-dom'

import rootReducer from './rootReducer'




const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )

)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
