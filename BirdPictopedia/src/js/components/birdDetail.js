/**
 * Created by pratikgarala on 13/4/17.
 */
import React from 'react';
import Navigation from './navigation';
import store from '../store/store';

var birdUrl = null;
var bird = [];

// const renderImgUrl = (birdId, valid_data) => {
//     if(valid_data.localeCompare("Yes") == 0){
//         birdUrl = require("../../images/Birds/Repository/" + birdId + ".jpg");
//     }else{
//         birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
//     }
// };

const BirdDetail = ({match}) => (

    <div>
        <Navigation/>
        {/*Bird Detail of {match.params.bird_Id} in Progress..!!*/}
        {console.log(store.getState().birds.birdUrl)}

        <div id={store.getState().birds.selectedBird.bird_Id} className="image-modal">
            {/*<div className="close-modal">*/}
                {/*<div className="lr">*/}
                    {/*<div className="rl">*/}
                    {/*</div>*/}
                {/*</div>*/}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="modal-body birdTitle">
                                <h2>{store.getState().birds.selectedBird.common_name}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 card image-item">
                                {/*{renderImgUrl(bird.bird_Id, bird.valid_data)}*/}
                                <img src={"/" + store.getState().birds.birdUrl} height="200" width="300"/>
                                <div className="title">
                                    <span>
                                        {store.getState().birds.selectedBird.common_name}
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-8 birdDescription">
                                <p>
                                    {store.getState().birds.selectedBird.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </div>
    </div>
);



export default BirdDetail;