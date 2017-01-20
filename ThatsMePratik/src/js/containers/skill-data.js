import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import style from '../../less/skills.less';

class SkillList extends Component{

    renderSkills() {
        return this.props.skills.map((skill) => {
            return (
                <div key={skill.id} className="col-sm-3">
                    <div className="set-size charts-container">
                        <div className={getSkillLevelStyle(skill.level)}>
                            <span className="label">
                                {skill.level}
                                <span className="smaller">%
                                </span>
                            </span>
                            <div className="pie">
                                <div className="left-side half-circle"></div>
                                <div className="right-side half-circle"></div>
                            </div>
                            <h4>{skill.name}</h4>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    {this.renderSkills()}
                </div>
            </div>
        );
    }
}

function getSkillLevelStyle(skillLevel){

    let skillLevelStyle = "pie-wrapper skillLevel-" + skillLevel;
    return skillLevelStyle;
}

function mapStateToProps(state){
    return {
        skills : state.skills
    }
}

export default connect(mapStateToProps)(SkillList);