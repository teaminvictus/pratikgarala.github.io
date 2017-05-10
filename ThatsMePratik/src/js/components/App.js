import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import HomePageStrip from  './HomePageStrip';
import Footer from './footer';
import PortfolioDetail from '../containers/portfolio-detail-data';

require("jquery");
require("bootstrap-webpack");
require("font-awesome-webpack");
// require('../../vendor/font-awesome/css/font-awesome.min.css');
require('../../less/freelancer.less');
require('../utils/freelancer');


const App = () => (

    <div id="page-top">
        <Navigation />
        <Header />
        <HomePageStrip id="portfolio" title="Portfolio" isGreen={false} />
        <HomePageStrip id="experience" title="Experience" isGreen={true} />
        <HomePageStrip id="education" title="Education" isGreen={false} />
        <HomePageStrip id="skills" title="Skills" isGreen={true} />
        {/*<HomePageStrip id="contact" title="Contact Me" isGreen={false} />*/}
        <Footer/>
        <PortfolioDetail/>

    </div>
);

export default App;
