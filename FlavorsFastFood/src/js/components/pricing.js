/**
 * Created by pratikgarala on 28/1/17.
 */
import React from 'react';
import MenuData from '../container/menu-data';

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
                        <MenuData/>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Pricing;