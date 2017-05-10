/**
 * Created by pratikgarala on 23/1/17.
 */

import React from 'react';
import Navigation from './navigation';
import Header from './header';
import Footer from './footer';
import RequestModal from './requestModal';

require("jquery");
require("bootstrap-webpack");
require("../../sass/main.sass");


const App = () => (
    <div className="rootDiv">
        <Navigation/>
        <Header/>
        <Footer/>
        <RequestModal/>
    </div>
);

export default App;

