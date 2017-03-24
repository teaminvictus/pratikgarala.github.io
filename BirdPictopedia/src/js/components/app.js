/**
 * Created by pratikgarala on 16/3/17.
 */
import React from 'react';
import Navigation from '../components/navigation';
import Header from '../components/header';
import Map from '../components/map';


require("jquery");
require("bootstrap-webpack");
require("../../css/navigation.css");
require("../../css/header.css");
require("../../css/map.css");
require("../../css/tooltip-curved.css");

const App = () => (

    <div>
        <Navigation/>
        <Header/>
        <Map/>
    </div>
);

require("../js/map");
export default App;