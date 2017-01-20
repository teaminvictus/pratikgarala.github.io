/**
 * Created by pratikgarala on 17/1/17.
 */
import React from 'react';
import FooterData from '../containers/footer-data'

const Footer = () => (
    <div>
        {/*<!-- footer -->*/}
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <FooterData/>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            Thats Me Pratik &copy; 2017
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;
