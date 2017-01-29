/**
 * Created by pratikgarala on 28/1/17.
 */
/**
 * Created by pratikgarala on 24/12/16.
 */
import React from 'react';

const Contact = () => (
    <section  id="contact"  className="description_content">
        <div className="featured background_content">
            <h1>Get in <span>Touch! </span></h1>
        </div>
        <div className="text-content container">
            <div className="inner contact">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="map">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?q=279-281%20Heaths%20road%20Werribee%203030&key=AIzaSyCinELbn8fnsHWwQpuUsven_5fDExAeLhs" width="100%" height="450" frameborder="0" style={{border:0}}  ></iframe>
                                </div>
                            </div>

                            <div className="col-md-4">
                                {/*<!-- Message -->*/}
                                <div className="right-text">
                                    <h2>Hours</h2><hr />
                                    <p>Monday: Closed</p>
                                    <p>Tuesday: 6:00 PM - 11:00 PM</p>
                                    <p>Wednesday: 6:00 PM - 11:00 PM</p>
                                    <p>Thursday: 6:00 PM - 11:00 PM</p>
                                    <p>Friday: 6:00 PM - 11:00 PM</p>
                                    <p>Saturday: 6:00 PM - 11:00 PM</p>
                                    <p>Sunday: 6:00 PM - 11:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;