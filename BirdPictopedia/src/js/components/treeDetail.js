/**
 * Created by pratikgarala on 18/4/17.
 */
import React from 'react';
import store from '../store/store';
import Footer from './footer';
import {Link} from 'react-router-dom';
import endangered from '../../images/Birds/endangered.png';

class TreeDetail extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log(this.props.match.params.tree_Id);
        this.props.onGetLikelyBirds(store.getState().trees.selectedTree);
    }

    renderMapImage(){
        const selectedTree = store.getState().trees.selectedTree;
        var mapName = "";
        if(selectedTree.nsw == 0){
            mapName = mapName + "0";
        }else if(selectedTree.nsw == 1) {
            mapName = mapName + "1";
        }
        if(selectedTree.vic == 0){
            mapName = mapName + "0";
        }else if(selectedTree.vic == 1){
            mapName = mapName + "1";
        }

        if(selectedTree.sa == 0){
            mapName = mapName + "0";
        }else if(selectedTree.sa == 1){
            mapName = mapName + "1";
        }

        if(selectedTree.wa == 0){
            mapName = mapName + "0";
        }else if(selectedTree.wa == 1){
            mapName = mapName + "1";
        }

        if(selectedTree.qld == 0){
            mapName = mapName + "0";
        }else if(selectedTree.qld == 1){
            mapName = mapName + "1";
        }

        if(selectedTree.nt == 0){
            mapName = mapName + "0";
        }else if(selectedTree.nt == 1){
            mapName = mapName + "1";
        }

        if(selectedTree.tas == 0){
            mapName = mapName + "0";
        }else if(selectedTree.tas == 1){
            mapName = mapName + "1";
        }

        mapName = mapName + ".png";
        var mapUrl;
        try {
            mapUrl = require("../../images/maptree/" + mapName);
        }catch (e){
            mpaUrl = require("../../images/maptree/0000000.png");
        }

        return(
            <img src={"/" + mapUrl} />
        );

    }

    renderEndangeredStatus(bird){
        if(bird.status.localeCompare("Endangered") == 0){
            return(
                <div className="endangered">
                    <img src={endangered} height="30" width="30" />
                </div>
            );
        }
    }

    render() {
        const likelyBirds = this.props.trees.likelyBirds;
        return(
            <div className="treeDetail">
                {/*{console.log(store.getState())}*/}
                <div id={store.getState().trees.selectedTree.treeId} className="image-modal">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="modal-body birdTitle">
                                    <h4>{store.getState().trees.selectedTree.commonName}</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 text-center">
                                    <div className="card image-item">
                                        <img src={"/" + store.getState().trees.treeUrl} height="200" width="300"/>
                                        <div className="title">
                                        <span>
                                            {store.getState().trees.selectedTree.commonName}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 birdDescription">
                                    <p>
                                        {store.getState().trees.selectedTree.description}
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    {this.renderMapImage()}
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h5>Birds that can be attracted by {store.getState().trees.selectedTree.commonName}</h5>
                                </div>
                                <div id="birdImages">
                                    <center>
                                        {likelyBirds && likelyBirds.length > 0 ? (
                                            <div>
                                                {likelyBirds.map((bird, index) => {

                                                    if(bird.isImageAvailable == 1){
                                                        var birdUrl = require("../../images/Birds/Repository/" + bird.birdId + ".jpg");
                                                    }else{
                                                        var birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
                                                    }
                                                    {/*console.log(birdUrl);*/}
                                                    return (
                                                        <div key={bird.birdId} className="card image-item">
                                                            {/*<Link to={"/birdFinder/" + bird.birdId} onClick={() => {this.props.onSelectBird(bird)}}>*/}
                                                            <Link to={"/birdFinder/" + bird.birdId} >
                                                                {/*<a href={"#" + bird.bird_Id} className="image-link" data-toggle="modal">*/}
                                                                <div className="image-link">
                                                                    <div className="caption">
                                                                        <div className="caption-content">
                                                                            <i className="fa fa-search-plus fa-3x"/>
                                                                        </div>
                                                                    </div>
                                                                    {this.renderEndangeredStatus(bird)}
                                                                    <img src={"/" + birdUrl} height="200" width="300"/>
                                                                    <div className="title">
                                                                        <span>{bird.commonName}</span>
                                                                    </div>
                                                                </div>
                                                                {/*</a>*/}
                                                            </Link>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        ) : null}
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

}

export default TreeDetail;
