/**
 * Created by pratikgarala on 28/1/17.
 */
import React from 'react';

const Pricing = () => (
    <section id ="pricing" className="description_content">
        <div className="pricing background_content">
            <h1><span>Affordable</span> pricing</h1>
        </div>
        <div className="text-content container">
            <div className="container">
                <div className="row">
                    <div id="w">
                        <ul id="filter-list" className="clearfix">
                            <li className="filter" data-filter="all">All</li>
                            <li className="filter" data-filter="regular">Regular</li>
                            <li className="filter" data-filter="special">Special</li>
                            <li className="filter" data-filter="desert">Desert</li>
                        </ul>
                        <ul id="portfolio">
                            <li className="item regular">

                                <a href="#masalapav" className="portfolio-link" data-toggle="modal" data-target="#masalapav">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={require("../../images/menu/masalapav.jpg")} className="img-responsive" alt="Food" />

                                </a>
                                <h2 className="white">$9.99</h2>

                            </li>
                            <li className="item dinner special">
                                <a href="#" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={require("../../images/menu/pavbhaji.jpg")} className="img-responsive" alt="Food" />
                                </a>

                                <h2 className="white">$8.99</h2>
                            </li>
                            <li className="item dinner regular">
                                <a href="#" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={require("../../images/menu/cheese_pavbhaji.jpg")} className="img-responsive" alt="Food" />
                                </a>
                                <h2 className="white">$9.99</h2>
                            </li>
                            <li className="item special">
                                <a href="#" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={require("../../images/menu/tava_pulav.jpg")} className="img-responsive" alt="Food" />
                                </a>
                                <h2 className="white">$8.99</h2>
                            </li>
                            <li className="item dinner">
                                <a href="#" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={require("../../images/menu/cheese_tava_pulav.jpg")} className="img-responsive" alt="Food" />
                                </a>
                                <h2 className="white">$9.99</h2>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Pricing;