import React from 'react';
import logo from "../../assets/omega.png";
import { Image, Jumbotron, Container, Tabs, Tab } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import '../../stylesheets/About.css';

export default function About() {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <Image src={logo} width="120px"></Image>
                    <h3>About Us</h3>
                    <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
                        <Tab eventKey="about" title="About OmegaPlay">
                            <br/>
                            <h5>OmegaPlay:</h5>
                            <p>
                                OmegaPlay is a web application developed as the final project of Cretificación III subject.
                                This aplication lets the users manage their video preferences, they can search for any movie 
                                that is stored in our database filtering the information by genre, date and country.
                                They can also see the detailed information of the selected movie, see the trailer of the movie 
                                and save the movie to their watch later list.
                            </p>
                            <p>We hope you enjoy using our system! <Icon.EmojiSmile/></p>
                        </Tab>
                        <Tab eventKey="contact" title="Contact Us">
                            <ul>
                                <Icon.PersonFill />{" Carla Barrientos"}
                                <ul>
                                    <Icon.EnvelopeFill />{" carla.andrea.cbm@gmail.com"}
                                </ul>
                                <ul>
                                    <Icon.TelephoneFill />{" +591 78673735"}
                                </ul>
                                <ul>
                                    <Icon.BriefcaseFill />{" Developer"}
                                </ul>

                                <Icon.PersonFill />{" Juan Diego García"}
                                <ul>
                                    <Icon.EnvelopeFill />{ "juandigv69@gmail.com"}
                                </ul>
                                <ul>
                                    <Icon.TelephoneFill />{" +591 79955250"}
                                </ul>
                                <ul>
                                    <Icon.BriefcaseFill />{" Developer"}
                                </ul>
                                <Icon.PersonFill />{" Rodrigo Heredia"}
                                <ul>
                                    <Icon.EnvelopeFill />{ "rodrigoh1205@gmail.com"}
                                </ul>
                                <ul>
                                    <Icon.TelephoneFill />{" +591 79978344"}
                                </ul>
                                <ul>
                                    <Icon.BriefcaseFill />{" Developer"}
                                </ul>
                            </ul>
                        </Tab>
                    </Tabs>
                </Container>
            </Jumbotron>

        </div>
    )
}
