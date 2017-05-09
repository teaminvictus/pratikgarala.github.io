/**
 * Created by pratikgarala on 6/5/17.
 */
import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import Footer from './footer';

const About = () => (
    <div>
    <section id="aboutus">

        <div className="col-lg-8 col-lg-offset-2">
            {/*<!-- Section Heading -->*/}
            <div className="section-heading">
                <h2>About us</h2>
                <div className="hr"></div>
            </div>
        </div>
        <div className="col-lg-12">
            <div className="container">
                <Collapsible popout>
                    <CollapsibleItem header='Onithopedia Overview'>
                        <p>
                            As an important part of biodiversity, birds are indicators of biodiversity and
                            environmental health. However, based on the finding of Australian Research Council
                            in 2010, human activities have brought many threats to birds and as a result, the
                            birds are facing a critical situation. The Ornithopedia aims to support society to
                            increase the biodiversity of birdlife. It is designed to allow bird lovers to identify their
                            bird sightings, support them to invite birds to visit their backyards, and provide a
                            platform for them to build a community.
                        </p>
                    </CollapsibleItem>
                    <CollapsibleItem header='How Does It Work?'>
                        <p>
                            Onithopedia targets the specific audiences with bird lovers who are interested bird
                            habits, habitats and birdlife. It provides find sufficient information about birds nearby
                            the bird lovers especially when they want to identify birds nearby them. It also
                            designed to allow users to find tips about how to invite birds to backyard. Beside of
                            that, it developed a platform for bird lovers to build their communities to create
                            projects or events.
                        </p>
                    </CollapsibleItem>
                    <CollapsibleItem header='What You Could Do Here?'>
                        <p>
                            <ul>
                                <li>Identify birds</li>
                                <li>Search birds nearby you</li>
                                <li>Learn to invite birds to your backyard</li>
                                <li>Share your bird sightings</li>
                                <li>Trace your birdlife activities</li>
                                <li>Manage your birds sighting</li>
                            </ul>
                        </p>
                    </CollapsibleItem>
                    <CollapsibleItem header='Date Integration'>
                        <p>
                            As the Onithopedia is designed as a responsive web application, each Onithopedia
                            portal integrates with the datasets from open data sources and users. In this way,
                            the initial bird datasets are generated form open data sources such as e-Bird
                            Australia and Global Biodiversity Information Facility. Additionally, the application
                            also collects data from user’s input when they use the application such as uploading
                            birds’ photos and searching birds.
                        </p>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        </div>
    </section>
    {/*<Footer/>*/}
        </div>
);

export default About;