import React from 'react';
import Navigation from '../components/navigation';
import {Link} from 'react-router-dom';

export default class FindBirds extends React.Component {

  constructor() {
    super();
    // this.state = {
    //   name: ''
    // };
  }

  componentDidMount() {
    this.props.onGetBirds();
  }

  render() {
    const birds = this.props.birds.matchBirds;
    return (
    <section id="birdFinder" className="hideElement">
      <Navigation/>
      <div className="container">
        <form id="searchForm" className="search-form">
          <input type="text" className="search" placeholder="Enter Bird Name..." onChange={() => {this.props.onDisplayMatches()}} />
        </form>
      </div>

      <center>
        <div id="birdImages">
          {birds && birds.length > 0 ? (
          <div>
          {birds.map((bird, index) => {

            if(bird.valid_data.localeCompare("Yes") == 0){
              var birdUrl = require("../../images/Birds/Repository/" + bird.bird_Id + ".jpg");
            }else{
              var birdUrl = require("../../images/Birds/birdPlaceholder.jpg");
            }
            {/*console.log(birdUrl);*/}
            return (
                <div key={bird.bird_Id} className="card image-item">
                  <Link to={"/findBirds/" + bird.bird_Id} onClick={() => {this.props.onSelectBird(bird)}}>
                  {/*<a href={"#" + bird.bird_Id} className="image-link" data-toggle="modal">*/}
                    <div className="image-link">
                      <div className="caption">
                        <div className="caption-content">
                          <i className="fa fa-search-plus fa-3x"/>
                        </div>
                      </div>
                      <img src={birdUrl} height="200" width="300"/>
                      <div className="title">
                        <span>{bird.common_name}</span>
                      </div>
                    </div>
                  {/*</a>*/}
                  </Link>
                </div>
            );
          })}
          </div>
            ) : null}
        </div>
      </center>
    </section>
    );
  }
}

