/**
 * Created by pratikgarala on 28/1/17.
 */
import React from 'react';

const About = () => (
    <section id="about" className="description_content">

        <div className="text-content container">
            <div className="col-md-8">
                <h1>About us</h1>
                <div className="fa fa-cutlery fa-2x"></div>
                <p className="desc-text">
                    Street food is ready-to-eat food or drink sold by a hawker, or vendor, in a street or other public place, such as at a market or fair. It is often sold from a portable food booth. Street food vending is found all around the world, but varies greatly between regions and cultures and street food is the real replica of authentic food practices in the country or specific part of the country.

                    <br />
                    Indian food is mostly described as curry and Naan (bread) however, This big nation has lots off offer when we talk about food. Indian street food is the great with the taste buds and offers best mouth-watering dishes.
                    <br />
                    We at ‘Flavors’ are bringing the best quality Indian street food with authentic taste of Indian street food market with ambience and lot more varieties from all over India.
                    <br/>
                    We endeavor and never compromise on the quality when It comes to food as there is myth and most tourists visiting India are advised not to eat street food due to hygiene issues but we assure our customer base for the quality for the food at a cheaper rates and above all with great Indian streets ambience to enjoy, Many of our Indian clients always love to visit us just to mesmerize the experience and remember the old happy Days with friends and family.
                    <br />
                    We welcome you all to experience the same as our great Indian Street food lovers. – ‘Only at Flavors’
                </p>
            </div>
            <div className="col-md-4">
                <div className="img-section paddingtop10">
                    <img src={require("../../images/menu/masalapav.jpg")} width="250" height="220" />

                    <div className="img-section-space"></div>

                    <img src={require("../../images/menu/pavbhaji.jpg")}  width="250" height="220" />

                    <div className="img-section-space"></div>

                    <img src={require("../../images/menu/tava_pulav.jpg")}  width="250" height="220" />

                </div>
            </div>
        </div>
    </section>
);

export default About;