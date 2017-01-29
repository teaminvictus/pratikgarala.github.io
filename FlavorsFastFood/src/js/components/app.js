/**
 * Created by pratikgarala on 23/1/17.
 */

import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import About from '../components/about';
import Pricing from '../components/pricing';
import WeeklySpecials from '../components/weeklySpecials';
import Contact from '../components/contact';
import SocialContact from '../components/socialContact';
import Footer from '../components/footer';
import MenuModal from '../container/menu-Modal';


require("../../css/normalize.css");
require("../../css/main.css");
require("jquery");
require("bootstrap-webpack");
require("../../css/style-portfolio.css");
require("../../css/font-awesome.min.css");
require("../../css/picto-foundry-food.css");
require("../../css/font-awesome.min.css");
require("../../css/googlefontapi.css");
require("../js/jquery.mixitup.min");
require("../js/main");



const App = () => (
    <div>
        <Navigation/>
        <Header/>
        <About/>
        <Pricing/>
        <WeeklySpecials/>
        <Contact/>
        <SocialContact/>
        <Footer/>
        <MenuModal/>


    </div>
);

export default App;

