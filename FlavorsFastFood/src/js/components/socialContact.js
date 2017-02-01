/**
 * Created by pratikgarala on 28/1/17.
 */
/**
 * Created by pratikgarala on 24/12/16.
 */
import React from 'react';

const SocialContact = () => (
    <section className="social_connect">
        <div className="text-content container">
            <div className="col-md-4">
                <span className="social_heading">LOCATION</span>
                <span className="social_info white">
                    <h4>279-281 Heaths road </h4>
                    <h4>Werribee VIC 3030</h4>
                </span>
            </div>
            <div className="col-md-4">
                <span className="social_heading">FOLLOW</span>
                <ul className="social_icons">
                    {/*<li><a className="fa-facebook color_animation" href="#" target="_blank"></a></li>*/}
                    <li><a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a></li>
                    <li><a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a></li>
                    <li><a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-instagram"></i></a></li>
                    <li><a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-google-plus"></i></a></li>
                </ul>
            </div>
            <div className="col-md-4">
                <span className="social_heading">OR DIAL</span>
                <span className="social_info"><a className="color_animation" href="tel:883-335-6524">(+61) 452-343-492</a></span>
            </div>
        </div>
    </section>
);

export default SocialContact;
