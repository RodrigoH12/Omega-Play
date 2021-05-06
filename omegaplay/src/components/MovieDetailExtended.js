import React from 'react'
import { Image, Row, Col, Jumbotron } from "react-bootstrap";

export default function MovieDetailExtended() {
    return (
        <Jumbotron fluid style={{ padding: '20px' }}>
            <Col align="justify">
                <Row>
                    <Col md={3}>
                        <b>Summary:</b>
                    </Col>
                    <Col>
                        <p>Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={5}>
                        <b>Director:</b>
                    </Col>
                    <Col>
                        <p>Zack Snyder</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={5}>
                        <b>Cast:</b>
                    </Col>
                    <Col>
                        <p> Dave Bautista, Ella Purnell, Ana de la Reguera, Garret Dillahunt, Raul Castillo, Omari Hardwick </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={5}>
                        <b>Production Company:</b>
                    </Col>
                    <Col>
                        <p>Netflix</p>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col md={3} xs={5}>
                        <b>Artwork:</b>
                    </Col>
                </Row>
                <br/>
                <Row align="right">
                    <Col md={4} xs={6}>
                        <Image rounded width="100%" src="https://cdn3.movieweb.com/i/article/cy0UDBFHp8XSSKJw1vqEXAz6CTAx9H/1200:100/Army-Of-The-Dead-Trailer-2.jpg" />
                    </Col>
                    <Col md={4} xs={6}>
                        <iframe height="100%" width="100%" src="https://www.youtube.com/embed/tI1JGPhYBS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col md={4} xs={6}>
                        <Image rounded width="100%" src="https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/02/army-of-the-dead.jpg" />
                    </Col>
                </Row>
            </Col>
        </Jumbotron>
    );
}