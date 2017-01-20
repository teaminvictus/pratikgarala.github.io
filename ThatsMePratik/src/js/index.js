import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import App from './components/App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';


const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
        </div>
    </Provider>,
    document.getElementById('root')
);