/**
 * Created by pratikgarala on 20/3/17.
 */

import React from 'react';

require("../js/navigation");

const Navigation = () => (
    <div>
        <div className="open">
            <span className="cls"></span>
            <span>
                <ul className="sub-menu ">
                    <li> <a href="#">Find Birds</a> </li>
                    <li> <a href="#">Identify Birds</a> </li>
                    <li> <a href="#">Projects</a> </li>
                    <li> <a href="#">Contact</a> </li>
                </ul>
            </span>
            <span className="cls"></span>
        </div>
    </div>
);

export default Navigation;