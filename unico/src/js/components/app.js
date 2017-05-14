/**
 * Created by pratikgarala on 23/1/17.
 */

import React from 'react';
import Navigation from './navigation';
import HeaderContainer from '../containers/headerContainer'
import ViewIcons from './viewIcons';
import ProductSectionContainer from '../containers/productSectionContainer';
import ListViewContainer from '../containers/listViewContainer';
import Footer from './footer';

require("jquery");
require("bootstrap-webpack");
require("../../sass/main.sass");


const App = () => (
    <div className="rootDiv">
        <Navigation/>
        <HeaderContainer/>
        <ViewIcons/>
        <ProductSectionContainer/>
        <ListViewContainer/>
        {/*<Footer/>*/}
    </div>
);

export default App;

