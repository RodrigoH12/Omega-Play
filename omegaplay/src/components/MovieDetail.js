import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import MovieDetailHeader from "./MovieDetailHeader";
import MovieDetailExtended from "./MovieDetailExtended";

export default function MovieDetail() {
    return (
        <Container>
            <Row>
                <Col>
                <MovieDetailHeader/>
                <MovieDetailExtended/>
                </Col>
            </Row>
        </Container>
    );
}