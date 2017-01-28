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





        <div className="portfolio-modal modal fade" id="masalapav"  role="dialog" aria-hidden="true">
            <div className="modal-content">
                <div className="close-modal" data-dismiss="modal">
                    <div className="lr">
                        <div className="rl">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <div className="modal-body">
                                <h2>Masala Pav</h2>
                                <hr className="star-primary" />
                                <img src={require("../../images/menu/masalapav.jpg")} className="img-responsive img-centered" alt="" />
                                <p>
                                    <h4>Ingredients</h4>
                                    <br/>
                                    onion, tomatoes, capsicum, garlic, ginger, green chilies
                                    cumin seeds, turmeric powder, red chili powder, pav bhaji masala, butter, water
                                    salt, pav, butter, lemon, coriander leave
                                </p>
                                <br/>
                                <button type="button" className="btn btn-default" data-dismiss="modal">
                                    <i className="fa fa-times"></i> Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default App;

