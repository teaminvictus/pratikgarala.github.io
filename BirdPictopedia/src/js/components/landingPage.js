/**
 * Created by pratikgarala on 11/4/17.
 */
import React from 'react';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Map from '../components/map';


import Preloader from "./preloader";
import NavigationBar from "./NavigationBar";
import MainSlider from "./mainSlider";
import FeatureSection from './featureSection';

require("jquery");

require("bootstrap-webpack");
require("font-awesome-webpack");
require("../../fonts/font-awesome/css/font-awesome.min.css");
require("../../fonts/flaticons/flaticon.css");
require("../../css/normalize.css");
require("../../css/preloader.css");
require("../../css/navigationBar.css");
require("../../css/mainSlider.css");
require("../../css/featureSection.css");
require("../../css/font.css");
require("../../css/animate.css");
require("../../css/yellowpaws.css");
require("../../css/birdFinder.css");
require("../../css/birdDetail.css");




const LandingPage = () => (
    <div className="rootDiv">
        {
            new WOW().init()
        }
        {/*<Preloader/>*/}
        {/*<NavigationBar/>*/}
        <MainSlider/>
        <FeatureSection/>
        {/*<div id="landingPage" >*/}
            {/*<Header/>*/}
            {/*<Map/>*/}
        {/*</div>*/}
    </div>
);


require("../js/main");


export default LandingPage;