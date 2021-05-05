import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import MovieDetailHeader from "./MovieDetailHeader";

export default function MovieDetail() {
    return (
        <Container>
            <Row>
                <Col>
                <MovieDetailHeader/>
                </Col>
            </Row>
        </Container>
    );
}