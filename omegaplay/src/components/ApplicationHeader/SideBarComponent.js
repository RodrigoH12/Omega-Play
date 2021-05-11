import React from 'react';
import { ListGroup, Row, Col, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../../stylesheets/SideBarComponent.css"
import { useHistory } from "react-router-dom";
import useStore from '../../zustand/login';
import images from '../../mockedData/data.json'

export default function ApplicationHeaderComponent() {
    const history = useHistory();
    const user = useStore(state => state.user);
    const ToDateString = (date) => {
        var dateString = new Date(date).toLocaleDateString("en-US");
        return dateString;
    }

    const avatarImage = images[user[0].img - 1].src

    return (
        <>
            <ListGroup className="list-grouplink" align="left">
                <ListGroup.Item style={{ padding: "20px" }} className="sideBarInfo">
                    <Col style={{ paddingLeft: "40px", paddingRight: "40px" }}>
                        <Row style={{ marginBottom: "10px" }}>
                            <Image src={avatarImage} roundedCircle fluid className="clickableItem"
                                onClick={() => { history.push("/avatar") }}></Image>
                        </Row>
                        <Row>
                            <h6>WELCOME BACK :</h6>
                            <h5><i><b>{user[0].userName}</b></i></h5>
                        </Row>
                        <Row>
                            <p className="textProfile">{user[0].email}</p>
                            <p className="textProfile">{ToDateString(user[0].birthDate)}</p>
                        </Row>
                    </Col>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} className="sideBarButtons" onClick={() => { history.push("/home") }}>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={2}><Icon.House /></Col>
                        <Col>Home</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} className="sideBarButtons" onClick={() => { history.push("/search") }} >
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={2}> <Icon.Search /></Col>
                        <Col>Search</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} className="sideBarButtons" onClick={() => { history.push("/history") }}>
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={2}><Icon.Calendar /></Col>
                        <Col>History</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} className="sideBarButtons" onClick={() => { history.push("/watch-later") }}>
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={2}><Icon.Clock /></Col>
                        <Col>Watch Later</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} className="sideBarButtons" onClick={() => { history.push("/about") }}>
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