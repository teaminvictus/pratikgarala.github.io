/**
 * Created by pratikgarala on 18/4/17.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';

import endangered from '../../images/Birds/endangered.png';
import unSelect from '../../images/Birds/unselect.png';
import select from '../../images/Birds/select1.png';
import btSelect from '../../images/Birds/select.png';


const IMAGES_PER_PAGE = 4;
var btSelectedBirds = [];
var btSelectedTrees = [];
var btTrees = [];
var btFilteredTrees = [];
var foodSource = {
    "fruit" : 0,
    "insect" : 0,
    "seed" : 0,
    "nectar" : 0
};
export default class BTMatrix extends React.Component {


    constructor() {
        super();
    }


    componentDidMount() {
        if(this.props.postcodes.postcodes == null){
            this.props.onGetPostcodes();
            // this.props.onGetAuStates();
        }

        if(this.props.postcodes.selectedPostcode != null){
            $("#postcodeInput").val(this.props.postcodes.selectedPostcode.suburb + ", " + this.props.postcodes.selectedPostcode.state + ", " + this.props.postcodes.selectedPostcode.postcode)
        }

        if(this.props.birds.birds == null){
            this.props.onGetBirds();
        }

        if(this.props.trees.trees == null){
            this.props.onGetTrees();
        }
    }

    nextClicked(){

        var progressBar = document.querySelectorAll(".progress-indicator li");
        var index = 0;
        for(var i = 0; i < progressBar.length ; i++){
            if( i + 1 != progressBar.length){
                const li = progressBar[i];
                if (li.className.localeCompare("active") == 0){
                    // li.className = "completed";
                    // progressBar[i+1].className = "active";
                    index = i + 1;
                    break;
                }
            }
        }
        switch (index){
            case 0:
                break;
            case 1:
                if (this.props.postcodes.selectedPostcode != null) {
                    progressBar[index - 1].className = "completed";
                    progressBar[index].className = "active";
                    $("#pickLocation")[0].classList.add("hideElement");
                    $("#selectBirds")[0].classList.remove("hideElement");
                }
                break;
            case 2:
                if (btSelectedBirds.length != 0) {
                    progressBar[index - 1].className = "completed";
                    progressBar[index].className = "active";
                    btSelectedBirds.map(bird => {
                        if(bird.fruit == 1)
                            foodSource.fruit = 1;
                        if(bird.insect == 1)
                            foodSource.insect = 1;
                        if(bird.seed == 1)
                            foodSource.seed = 1;
                        if(bird.nectar == 1)
                            foodSource.nectar = 1;
                    });
                    btFilteredTrees = btTrees.filter(tree => (foodSource.fruit == 1 && tree.fruit == 1) ||
                        (foodSource.insect == 1 && tree.insect == 1) ||
                        (foodSource.seed == 1 && tree.seed == 1) ||
                        (foodSource.nectar == 1 && tree.nectar == 1));
                    if (btFilteredTrees.length == 0 )
                        btFilteredTrees = btTrees;
                    $("#selectBirds")[0].classList.add("hideElement");
                    $("#selectTrees")[0].classList.remove("hideElement");
                }
                break;
            case 3:
                if (btSelectedTrees.length != 0) {
                    progressBar[index - 1].className = "completed";
                    progressBar[index].className = "active";
                    $("#selectTrees")[0].classList.add("hideElement");
                    $("#createMatrix")[0].classList.remove("hideElement");
                }
                break;
            // case 4:
            //     progressBar[index - 1].className = "completed";
            //     progressBar[index].className = "active";
            //     $("#createMatrix")[0].classList.add("hideElement");
            //     $("#saveMatrix")[0].classList.remove("hideElement");
            default:
                break;
        }

    }

    backClicked(){

        var progressBar = document.querySelectorAll(".progress-indicator li");
        var index = progressBar.length;
        for(var i = 0; i < progressBar.length ; i++){
            if( i != 0){
                const li = progressBar[i];
                if (li.className.localeCompare("active") == 0){

                    index = i - 1;
                    break;
                }

            }
        }

        switch (index){
            case 0:
                progressBar[index + 1].className = "";
                progressBar[index].className = "active";
                $("#pickLocation")[0].classList.remove("hideElement");
                $("#selectBirds")[0].classList.add("hideElement");
                break;
            case 1:
                progressBar[index + 1].className = "";
                progressBar[index].className = "active";
                foodSource.fruit = 0;
                foodSource.insect = 0;
                foodSource.nectar = 0;
                foodSource.seed = 0;
                $("#selectBirds")[0].classList.remove("hideElement");
                $("#selectTrees")[0].classList.add("hideElement");
                break;
            case 2:
                progressBar[index + 1].className = "";
                progressBar[index].className = "active";
                $("#selectTrees")[0].classList.remove("hideElement");
                $("#createMatrix")[0].classList.add("hideElement");
                break;
            // case 3:
                // progressBar[index + 1].className = "";
                // progressBar[index].className = "active";
                // $("#createMatrix")[0].classList.remove("hideElement");
                // $("#saveMatrix")[0].classList.add("hideElement");
                // break;
            default:
                break;
        }
    }

    // onSelectPostcode(postcode){
    //     this.props.onSelectPostcode(postcode);
    //     this.props.onGetTreesInLocation(postcode);
    // }

    onSelectUnselect(bird){
        const birdId = bird.birdId;
        if($("#bt" + birdId)[0].className.localeCompare("unSelect") == 0) {
            $("#bt" + birdId)[0].classList.remove("unSelect");
            $("#bt" + birdId)[0].classList.add("select");
            $("#bt" + birdId)[0].children[0].src = select;

            btSelectedBirds.push(bird);
        }else {
            $("#bt" + birdId)[0].classList.add("unSelect");
            $("#bt" + birdId)[0].classList.remove("select");
            $("#bt" + birdId)[0].children[0].src = unSelect;

            const index = btSelectedBirds.findIndex(selectedbird => selectedbird.birdId === birdId);
            btSelectedBirds.splice(index, 1);
        }
        console.log(btSelectedBirds);
    }

    onSelectUnselectTree(tree){
        const treeId = tree.treeId;
        if($("#bt" + treeId)[0].className.localeCompare("unSelect") == 0) {
            $("#bt" + treeId)[0].classList.remove("unSelect");
            $("#bt" + treeId)[0].classList.add("select");
            $("#bt" + treeId)[0].children[0].src = select;

            btSelectedTrees.push(tree);
        }else {
            $("#bt" + treeId)[0].classList.add("unSelect");
            $("#bt" + treeId)[0].classList.remove("select");
            $("#bt" + treeId)[0].children[0].src = unSelect;

            const index = btSelectedTrees.findIndex(selectedTree => selectedTree.treeId === treeId);
            btSelectedTrees.splice(index, 1);
        }
        console.log(btSelectedTrees);
    }

    renderSelectSymbol(tree, bird){
        if((bird.fruit == 1 && tree.fruit == 1) ||
            (bird.insect == 1 && tree.insect == 1) ||
            (bird.seed == 1 && tree.seed == 1) ||
            (bird.nectar == 1 && tree.nectar == 1)){
            return(
                <img src={btSelect} width="30" height="30" />
            );
        }
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
            const postcodes = this.props.postcodes.matchPostcodes;
            var btBirds =[];
            if (this.props.birdsForIdentifier.filteredBirdsForIdentifier != null)
                btBirds = this.props.birdsForIdentifier.filteredBirdsForIdentifier.filter(bird => (bird.fruit.localeCompare("1")==0 || bird.seed.localeCompare("1")==0 ||
                                                                                                                bird.insect.localeCompare("1")==0 || bird.nectar.localeCompare("1")==0 ));

            if(this.props.postcodes.selectedPostcode!= null && this.props.trees.trees != null) {
                switch (this.props.postcodes.selectedPostcode.state){
                    case "VIC":
                        btTrees = this.props.trees.trees.filter(tree => (tree.vic == 1));
                        break;
                    case "NSW":
                        btTrees = this.props.trees.trees.filter(tree => (tree.nsw == 1));
                        break;
                    case "TAS":
                        btTrees = this.props.trees.trees.filter(tree => (tree.tas == 1));
                        break;
                    case "QLD":
                        btTrees = this.props.trees.trees.filter(tree => (tree.qld == 1));
                        break;
                    case "SA":
                        btTrees = this.props.trees.trees.filter(tree => (tree.sa == 1));
                        break;
                    case "WA":
                        btTrees = this.props.trees.trees.filter(tree => (tree.wa == 1));
                        break;
                    case "ACT":
                        btTrees = this.props.trees.trees.filter(tree => (tree.act == 1));
                        break;
                    case "NT":
                        btTrees = this.props.trees.trees.filter(tree => (tree.nt == 1));
                        break;
                }

            }
            return (
                <section id="btMatrix">
                    <div className="progressBar">
                        <ul className="progress-indicator">
                            <li className="active">
                                <span className="bubble"/>
                                Pick Your Location
                            </li>
                            <li>
                                <span className="bubble"/>
                                Select Birds
                            </li>
                            <li>
                                <span className="bubble"/>
                                Select Trees
                            </li>
                            <li>
                                <span className="bubble"/>
                                BT Matrix
                            </li>
                            {/*<li>*/}
                                {/*<span className="bubble"/>*/}
                                {/*Save*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className="btSteps">
                        <div id= "pickLocation">
                            <div className="btStepsTitle">
                                <div className="col-lg-8 col-lg-offset-2">
                                    {/*<!-- Section Heading -->*/}
                                    <div className="section-heading">
                                        <h2>Pick Your Location</h2>
                                        <div className="hr"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="col-lg-12">
                                    <form >
                                        <input id="postcodeInput" type="text"  placeholder="Enter Suburb Name..." onChange={() => {this.props.onDisplayMatches()}} autoComplete="off"/>
                                        {postcodes && postcodes.length > 0 ? (
                                            <ul className="suggestions">
                                                {postcodes.map((postcode, index) => {
                                                    return (
                                                        <li key={postcode.id} onClick={() => this.props.onSelectPostcode(postcode)}>
                                                                <span>
                                                                    {postcode.suburb} , {postcode.state}, {postcode.postcode}
                                                                </span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        ) : null}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id= "selectBirds" className="hideElement">
                            <div className="btStepsTitle">
                                <div className="col-lg-8 col-lg-offset-2">
                                    {/*<!-- Section Heading -->*/}
                                    <div className="section-heading">
                                        <h2>Select Birds</h2>
                                        <div className="hr"></div>
                                    </div>
                                </div>
                            </div>
                            <div id="birdImages">
                                <center>
                                    {btBirds && btBirds.length > 0 ? (
                                        <div>
                                            {btBirds.map((bird, index) => {
                                                if(bird.isImageAvailable == 1){
                                                    var birdUrl = require("../../images/Birds/Repository/" + bird.birdId + ".jpg");
                                                }else{
                                                    var birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
                                                }
                                                {/*var className = "card image-item " + bird.size;*/}
                                                var className = "col-sm-6 col-md-6 col-lg-4 " + bird.size;
                                                {/*console.log(birdUrl);*/}
                                                return (
                                                    <div key={bird.birdId} className="card image-item">
                                                        {/*<Link to={"/birdFinder/" + bird.birdId} onClick={() => {this.props.onSelectBird(bird)}}>*/}
                                                            {/*<a href={"#" + bird.bird_Id} className="image-link" data-toggle="modal">*/}
                                                            <div className="image-link">

                                                                <Link to={"/birdFinder/" + bird.birdId}>
                                                                    <div className="caption">
                                                                        <div className="caption-content">
                                                                            <i className="fa fa-search-plus fa-3x"/>
                                                                        </div>
                                                                    </div>
                                                                    {this.renderEndangeredStatus(bird)}
                                                                    <img src={birdUrl} height="200" width="300"/>
                                                                </Link>
                                                                <div className="title">
                                                                    <div className="col-sm-9">
                                                                        <span>{bird.commonName}</span>
                                                                    </div>
                                                                    <div className="col-sm-1">
                                                                        <div id={"bt" + bird.birdId} className="unSelect" onClick={()=> this.onSelectUnselect(bird)}>
                                                                            <img src={unSelect} width="30" height="30"/>
                                                                        </div>
                                                                    </div>
                                                                    {/*<div className="col-sm-9">*/}
                                                                        {/*<audio controls>*/}
                                                                            {/*<source src="http://www.xeno-canto.org/sounds/uploaded/MXMFTGKZDR/XC355017-GMCLAC_1932-Spiny-cheekedHoneyeater.mp3" type="audio/mpeg" />*/}
                                                                            {/*Your browser does not support the audio element.*/}
                                                                        {/*</audio>*/}
                                                                    {/*</div>*/}
                                                                </div>
                                                            </div>
                                                            {/*</a>*/}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : null}
                                </center>
                            </div>
                        </div>
                        <div id= "selectTrees" className="hideElement">
                            <div className="btStepsTitle">
                                <div className="col-lg-8 col-lg-offset-2">
                                    {/*<!-- Section Heading -->*/}
                                    <div className="section-heading">
                                        <h2>Select Trees</h2>
                                        <div className="hr"></div>
                                    </div>
                                </div>
                                <div id="birdImages">
                                    <center>
                                        {btFilteredTrees && btFilteredTrees.length > 0 ? (
                                            <div>
                                                {btFilteredTrees.map((tree, index) => {
                                                    if(tree.isImageAvailable == 1){
                                                        var treeUrl = require("../../images/Trees/" + tree.treeId + ".jpg");
                                                    }else{
                                                        var treeUrl = require("../../images/Trees/treePlaceholder.jpg");
                                                    }
                                                    return (
                                                        <div key={tree.treeId} className="card image-item">
                                                            {/*<Link to={"/birdFinder/" + bird.birdId} onClick={() => {this.props.onSelectBird(bird)}}>*/}
                                                            {/*<a href={"#" + bird.bird_Id} className="image-link" data-toggle="modal">*/}
                                                            <div className="image-link">

                                                                <Link to={"/treeFinder/" + tree.treeId} onClick={() => {this.props.onSelectTree(tree)}}>
                                                                    <div className="caption">
                                                                        <div className="caption-content">
                                                                            <i className="fa fa-search-plus fa-3x"/>
                                                                        </div>
                                                                    </div>

                                                                    <img src={treeUrl} height="200" width="300"/>
                                                                </Link>
                                                                <div className="title">
                                                                    <div className="col-sm-9">
                                                                        <span>{tree.commonName}</span>
                                                                    </div>
                                                                    <div className="col-sm-1">
                                                                        <div id={"bt" + tree.treeId} className="unSelect" onClick={()=> this.onSelectUnselectTree(tree)}>
                                                                            <img src={unSelect} width="30" height="30"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/*</a>*/}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        ) : null}
                                    </center>
                                </div>
                            </div>
                            <div className="container">
                                <div className="col-lg-12">

                                </div>
                            </div>
                        </div>
                        <div id= "createMatrix" className="hideElement">
                            <div className="btStepsTitle">
                                <div className="col-lg-8 col-lg-offset-2">
                                    {/*<!-- Section Heading -->*/}
                                    <div className="section-heading">
                                        <h2>Bird-Tree Matrix</h2>
                                        <div className="hr"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="col-lg-12">
                                    <table>
                                        <tr>
                                            <th colSpan="2" rowSpan="2">
                                            </th>
                                            <th colSpan={btSelectedTrees.length }>
                                                TREES
                                            </th>
                                        </tr>

                                        <tr>
                                            {/*<th colSpan="2">*/}
                                            {/*</th>*/}
                                            {btSelectedTrees.map((tree, index) => {
                                                return (
                                                <th>
                                                    {tree.commonName}
                                                </th>
                                                )}
                                            )}
                                        </tr>
                                        {btSelectedBirds.map((bird, index) => {
                                            return(
                                                <tr>
                                                    {index == 0 ? <th rowSpan={btSelectedBirds.length + 1}>BIRDS</th> : null}
                                                    <th key={bird.birdId}>
                                                        {bird.commonName}
                                                    </th>
                                                    {btSelectedTrees.map((tree, index) => {
                                                        return (
                                                            <td key={tree.treeId}>
                                                                {this.renderSelectSymbol(tree, bird)}
                                                            </td>
                                                        )}
                                                    )}
                                                </tr>
                                            )}
                                        )}
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/*<div id= "saveMatrix" className="hideElement">*/}
                            {/*<div className="btStepsTitle">*/}
                                {/*<div className="col-lg-8 col-lg-offset-2">*/}
                                    {/*/!*<!-- Section Heading -->*!/*/}
                                    {/*<div className="section-heading">*/}
                                        {/*<h2>Save Matrix</h2>*/}
                                        {/*<div className="hr"></div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="container">*/}
                                {/*<div className="col-lg-12">*/}

                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="btBottom">
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-3">
                            <a href="#" className="btn btn-default" onClick={() => this.backClicked()}>Back</a>
                        </div>
                        <div className="col-lg-3">
                            <a href="#" className="btn btn-default" onClick={() => this.nextClicked()}>Next</a>
                        </div>
                        <div className="col-lg-3">
                        </div>
                    </div>
                    <Footer/>
                </section>
            );
        }
}