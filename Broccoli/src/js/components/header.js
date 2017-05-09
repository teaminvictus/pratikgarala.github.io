/**
 * Created by pratikgarala on 24/12/16.
 */
import React from 'react';

const Header = () => (
      <section className="header">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <div className="intro-text">
                          <h2>A better way <br /> to enjoy every day.</h2>
                          <br />
                          <span className="skills"> Be the first to know when we lunch.</span>
                          <br />
                          <a href="#inviteModal" className="btn btn-default" data-toggle="modal">Request an invite</a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
);

export default Header;