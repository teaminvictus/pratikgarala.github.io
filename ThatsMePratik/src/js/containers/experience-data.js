/**
 * Created by pratikgarala on 28/12/16.
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Experience extends Component{

    renderExperience() {
        return this.props.experience.map((exp) => {
            let className;
            if (exp.id % 2 == 0) {
                className = "timeline-inverted";
            } else {
                className = "";
            }

            return (
                <li key={exp.id} className={className}>
                    <div className="timeline-image">
                        <h4>{exp.from}
                            <br />to
                            <br />{exp.to}</h4>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>{exp.designation}</h4>
                            <h4 className="subheading">{exp.company}</h4>
                        </div>
                        <div className="timeline-body">
                            <p>
                                {exp.responsibility}
                            </p>
                        </div>
                    </div>
                </li>
            );
        });
    }

    render(){
        return(
            <div className="row">
                <div className="col-lg-12">
                    <ul className="timeline">

                        {this.renderExperience()}

                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>Start
                                    <br />of
                                    <br />Career</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        experience : state.experience
    }
}

export default connect(mapStateToProps)(Experience);