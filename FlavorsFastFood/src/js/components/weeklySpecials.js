/**
 * Created by pratikgarala on 28/1/17.
 */
import React from 'react';

const WeeklySpecials = () => (
    <section id ="weeklySpecials" className="description_content">
        <div  className="special background_content">
            <h1>Weekly <span>Special</span> to enjoy</h1>
        </div>
        <div className="text-content container">
            <div className="col-md-6">
                <div className="image_box_story2 paddingtop10">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        {/*<!-- Indicators -->*/}
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        {/*<!-- Wrapper for slides -->*/}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={require("../../images/pani_puri.jpg")}  alt="..." />
                                <div className="carousel-caption">

                                </div>
                            </div>
                            <div className="item">
                                <img src={require("../../images/dabeli.jpg")} alt="..." />
                                <div className="carousel-caption">

                                </div>
                            </div>
                            <div className="item">
                                <img src={require("../../images/pizza.jpg")} alt="..." />
                                <div className="carousel-caption">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h1>Weekly special</h1>
                <div className="fa fa-usd fa-2x"></div>
                <p className="desc-text">Here at Flovers
                    something special enters our doors every week, and we can’t help but show them off.
                    so stop by and experience our weekly specials.</p>
                <div className="right-text">
                    <p>Enjoy Unlimited Panipuri at $12</p>
                    <p>Get 10% Take away Discount on order over $30 (Tue, Wed, Thu)</p>
                    <p>Indian Style Gourmet Tava Pizza at $8</p>
                </div>

            </div>
        </div>
    </section>
);

export default WeeklySpecials;