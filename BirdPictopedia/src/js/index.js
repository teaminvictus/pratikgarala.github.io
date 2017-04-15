/**
 * Created by pratikgarala on 10/4/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserHistory} from 'react-router';

import Preloader from './components/preloader';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/landingPage';
import FindBirdsContainer from './containers/birds_container';
import BirdDetailContainer from './containers/birdDetail_container';




const main = (
    <Provider store={store} >
        <Router history={BrowserHistory}>
            <div className="rootDiv">
                <Preloader/>
                <NavigationBar/>
                <Route path="/" exact={true} component={LandingPage} />
                <Route path="/birdFinder" exact={true} component={FindBirdsContainer} />
                <Route path="/birdFinder/:bird_Id"  component={BirdDetailContainer} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(main, document.getElementById('root'));