import React from 'react';
import { Container, ListGroup } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default function ApplicationHeaderComponent() {
    return (
        <Container>
            <ListGroup>
                <ListGroup.Item action><Icon.House/> Home</ListGroup.Item>
                <ListGroup.Item action><Icon.Search/> Search</ListGroup.Item>
                <ListGroup.Item action><Icon.Calendar/> History</ListGroup.Item>
                <ListGroup.Item action><Icon.Clock/> Watch Later</ListGroup.Item>
                <ListGroup.Item action><Icon.Question/> About</ListGroup.Item>
            </ListGroup>
        </Container>
    );
}