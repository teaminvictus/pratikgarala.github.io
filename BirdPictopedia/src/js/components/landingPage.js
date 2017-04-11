/**
 * Created by pratikgarala on 11/4/17.
 */
import React from 'react';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Map from '../components/map';


require("jquery");
require("bootstrap-webpack");
require("font-awesome-webpack");
require("../../css/navigation.css");
require("../../css/header.css");
require("../../css/map.css");
require("../../css/normalize.css");
require("../../css/tooltip-curved.css");
require("../js/navigation");
require("../../css/birdFinder.css");
require("../../css/birdDetail.css");


const LandingPage = () => (
    <div>
        <Navigation/>
        <div id="landingPage" >
            <Header/>
            <Map/>
        </div>
    </div>
);

export default LandingPage;