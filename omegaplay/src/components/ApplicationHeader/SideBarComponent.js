import React from 'react';
import { ListGroup, Row, Col, Badge, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../../stylesheets/SideBarComponent.css"
import { useHistory } from "react-router-dom";
import useStore from '../../zustand/login';
import images from '../../mockedData/data.json'

export default function ApplicationHeaderComponent() {
    const history = useHistory();
    const user = useStore(state => state.user);
    const avatars = images;

    const ToDateString = (date) => {
        var dateString = new Date(date).toLocaleDateString("en-US");
        return dateString;
    }

    const avatarImage = images[user[0].img - 1].src

    return (
        <>
            <ListGroup className="list-grouplink" align="left">
                <ListGroup.Item style={{ padding: "20px" }}>
                    <Col style={{ paddingLeft: "40px", paddingRight: "40px" }}>
                        <Row style={{ marginBottom: "10px" }}>
                            <Image src={avatarImage} roundedCircle fluid className="clickableItem"
                                onClick={() => { history.push("/avatar") }}></Image>
                        </Row>
                        <Row>
                            <h5>{user[0].userName}</h5>
                        </Row>
                        <Row style={{ marginBottom: "10px" }}>
                            <Badge variant="secondary" className="text-left text-white text-uppercase">{user[0].genre}</Badge>
                        </Row>
                        <Row>
                            <p className="textProfile">{user[0].email}</p>
                            <p className="textProfile">{ToDateString(user[0].birthDate)}</p>
                        </Row>
                    </Col>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} onClick={() => { history.push("/home") }}>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={2}><Icon.House /></Col>
                        <Col>Home</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} onClick={() => { history.push("/search") }} >
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={2}> <Icon.Search /></Col>
                        <Col>Search</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} onClick={() => { history.push("/history") }}>
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={2}><Icon.Calendar /></Col>
                        <Col>History</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} onClick={() => { history.push("/watch-later") }}>
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={2}><Icon.Clock /></Col>
                        <Col>Watch Later</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} onClick={() => { history.push("/avatar") }}>
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={2}><Icon.Question /></Col>
                        <Col>About</Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}