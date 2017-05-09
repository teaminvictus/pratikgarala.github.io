/**
 * Created by pratikgarala on 29/4/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => (

    <footer>

        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <Link to="/privacyPolicy">Privacy Policy</Link>
                </div>
                <div className="col-lg-5 text-left">
                    <p>This site is licensed under a <a href="http://creativecommons.org/licenses/by/3.0/au/">Creative Commons Attribution 3.0 Australia License</a></p>.
                    <p><img className="img-responsive" src="http://www.ala.org.au/wp-content/themes/ala-wordpress-theme/img/creativecommons.png" alt="Creative Commons"/></p>
                    <p>
                        Provider content may be covered by other <Link to="/termsOfUse">Terms of Use</Link>.
                    </p>
                </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay="0.2s">
                {/*<div className="col-sm-6 col-md-4">*/}
                    {/*<!-- Social Media icons -->*/}
                    {/*<ul className="social-media">*/}
                        {/*<li><a title="Facebook" href="#"><i className="fa fa-facebook"></i></a></li>*/}
                        {/*<li><a title="Twitter" href="#"><i className="fa fa-twitter"></i></a></li>*/}
                        {/*<li><a title="Google Plus" href="#"><i className="fa fa-google-plus"></i></a></li>*/}
                        {/*<li><a  title="Linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>*/}
                        {/*<li><a  title="Flickr" href="#"><i className="fa fa-flickr"></i></a></li>*/}
                        {/*<li><a  title="Tumblr" href="#"><i className="fa fa-tumblr"></i></a></li>*/}
                        {/*<li><a  title="Instagram" href="#"><i className="fa fa-instagram"></i></a></li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
                {/*<!-- Bottom Credits -->*/}
                <div className="col-sm-12 text-center">
                    <p className="text-center">COPYRIGHT © 2017-2018 Ornithopedia</p>
                </div>
            </div>
        </div>
        {/*<!-- Go To Top Link -->*/}
        <div className="page-scroll hidden-sm hidden-xs">
            <a href="#page-top" className="back-to-top"><i className="fa fa-angle-up"/></a>
        </div>
    </footer>
);

export default Footer;