/**
 * Created by pratikgarala on 11/4/17.
 */
import React from 'react';

import bird1 from '../../images/Birds/1.jpg';
import bird2 from '../../images/Birds/2.jpg';
import bird3 from '../../images/Birds/3.jpg';
import bird4 from '../../images/Birds/4.jpg';
import bird5 from '../../images/Birds/5.jpg';
import bird6 from '../../images/Birds/6.jpg';
import bird7 from '../../images/Birds/7.jpg';

const HeaderImages = () => (
    <div id="images">
        <img src={bird1} className="boxshadow" id="birdimg1" />
        <img src={bird2} className="boxshadow" id="birdimg2" />
        <img src={bird3} className="boxshadow" id="birdimg3" />
        <img src={bird4} className="boxshadow" id="birdimg4" />
        <img src={bird5} className="boxshadow" id="birdimg5" />
        <img src={bird6} className="boxshadow" id="birdimg6" />
        <img src={bird7} className="boxshadow" id="birdimg7" />
    </div>
);

export default HeaderImages;