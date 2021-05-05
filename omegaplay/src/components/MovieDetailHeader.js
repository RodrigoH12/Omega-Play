import React from 'react'
import { Card, Image, Row, Col, Jumbotron, Button, ButtonGroup } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

export default function MovieDetailHeader() {
    const playButtonClick = (e) => {
        console.log("Pressed " + e);
    }
    return (
        <Jumbotron fluid style={{ padding: '20px' }}>
            <Row>
                <Col md={5}>
                    <Image rounded width="100%" src="https://www.vitalthrills.com/wp-content/uploads/2021/02/army-of-the-dead-poster.jpg" />
                </Col>
                <Col align="left" md={4}>
                    <h1 >Army of The Dead</h1>
                    <div>
                        <Icon.StarFill />
                        <Icon.StarFill />
                        <Icon.StarFill />
                        <Icon.StarFill />
                        <Icon.Star />
                    </div>
                    <p>2h 28m</p>

                    <br />
                    <br />
                    <p size="10px">Release Date: 15/06/2020</p>
                    <p>Genres: Action, Adventure, Thriller</p>
                    <p>Country: United States</p>
                </Col>
                <Col align="left" md={3}>
                    <Row>

                        <Col align="right">
                            <Button variant="text" onClick={() => playButtonClick("play")}>
                                <Icon.PlayFill size={50} />
                            </Button>
                            <Button variant="text" onClick={() => playButtonClick("watchLater")}>
                                <Icon.ClockFill size={30} />
                            </Button>
                        </Col>
                    </Row>

                </Col>

            </Row>
        </Jumbotron>
    );
}