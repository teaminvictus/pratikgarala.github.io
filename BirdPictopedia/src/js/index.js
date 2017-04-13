/**
 * Created by pratikgarala on 10/4/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserHistory} from 'react-router';

import LandingPage from './components/landingPage';
import FindBirdsContainer from './containers/birds_container';
import BirdDetailContainer from './containers/birdDetail_container';

const main = (
    <Provider store={store} >
        <Router history={BrowserHistory}>
            <div>
                <Route path="/" exact={true} component={LandingPage} />
                <Route path="/findBirds" exact={true} component={FindBirdsContainer} />
                <Route path="/findBirds/:bird_Id"  component={BirdDetailContainer} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(main, document.getElementById('root'));