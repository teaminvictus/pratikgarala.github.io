import React from 'react';
import Portfolio from '../containers/portfolio-data';
import Experience from '../containers/experience-data';
import Education from '../containers/education-data';
import Skills from '../containers/skill-data';
import Contact from './Contact';

const HomePageStrip = (props) => (
    <section className={props.isGreen ? "success" : ""} id={props.id}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>{props.title}</h2>
                    <hr className={props.isGreen ? "star-light" : "star-primary"} />
                    <br />
                </div>
            </div>
            {renderTag(props.id)}
        </div>
    </section>
);

function renderTag(id) {

    if (id == 'portfolio') {
        return <Portfolio/>;
    }else if (id == 'experience'){
        return <Experience/>;
    }else if (id == 'education') {
        return <Education/>;
    }else if (id == 'skills') {
        return <Skills/>;
    }else if (id == 'contact') {
        return <Contact/>;
    }
};

export default HomePageStrip;