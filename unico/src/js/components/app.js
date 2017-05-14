/**
 * Created by pratikgarala on 13/5/17.
 */

import React from 'react';
import Navigation from './navigation';
import HeaderContainer from '../containers/headerContainer'
import ViewIcons from './viewIcons';
import ProductSectionContainer from '../containers/productSectionContainer';
import ListViewContainer from '../containers/listViewContainer';

require("bootstrap-webpack");
require("../../sass/main.sass");


const App = () => (
    <div className="rootDiv">
        <Navigation/>
        <HeaderContainer/>
        <ViewIcons/>
        <ProductSectionContainer/>
        <ListViewContainer/>
    </div>
);

export default App;

