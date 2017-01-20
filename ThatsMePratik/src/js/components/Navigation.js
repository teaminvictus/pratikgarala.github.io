/**
 * Created by pratikgarala on 24/12/16.
 */

import React from 'react';
import MenuOptionList from '../containers/menu-option-list';


const Navigation = () => (
    <div>
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom affix">
            <MenuOptionList/>
        </nav>
    </div>
);

export default Navigation;
