/**
 * Created by pratikgarala on 24/12/16.
 */
import React from 'react';
import Profile from '../../img/profile.jpg';
import HeaderData from '../containers/profile-data';

const Header = () => (
  <div>
      {/*<!-- Header -->*/}
      <header>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <img className="img-responsive img-circle" src={Profile} />
                      <HeaderData/>
                  </div>
              </div>
          </div>
      </header>
  </div>
);

export default Header;