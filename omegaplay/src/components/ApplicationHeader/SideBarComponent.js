import React from 'react';
import { ListGroup, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../../stylesheets/SideBarComponent.css"
import { useHistory } from "react-router-dom";

export default function ApplicationHeaderComponent() {
    const history = useHistory();
    
    return (
        <>
            <ListGroup className="list-grouplink" align="left">
                <ListGroup.Item action style={{ padding: "16px" }} onClick={()=>{history.push("/home")}}>
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={2}><Icon.House /></Col>
                            <Col>Home</Col>
                        </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} onClick={()=>{history.push("/search")}} >
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={2}> <Icon.Search /></Col>
                        <Col>Search</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} onClick={()=>{history.push("/history")}}>
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={2}><Icon.Calendar /></Col>
                        <Col>History</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} onClick={()=>{history.push("/watch-later")}}>
                    <Row >
                        <Col xs={1}></Col>
                        <Col xs={2}><Icon.Clock /></Col>
                        <Col>Watch Later</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item action style={{ padding: "16px" }} onClick={()=>{history.push("/avatar")}}>
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