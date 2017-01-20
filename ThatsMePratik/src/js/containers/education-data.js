/**
 * Created by pratikgarala on 6/1/17.
 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Education extends Component{

    renderEducation() {
        return this.props.education.map((edu) => {
            return (
                <div className="col-sm-6 text-center" key={edu.id}>
                    <h4>{edu.course}</h4>
                    <p>
                        {edu.university}
                        <br />
                        {edu.institute}
                        <br />
                        ({edu.from} - {edu.to})
                    </p>

                </div>
            );
        });
    }

    render(){
        return(
            <div className="row col-lg-12">
                {this.renderEducation()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        education : state.education
    }
}

export default connect(mapStateToProps)(Education);