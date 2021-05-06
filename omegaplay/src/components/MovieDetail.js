import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import MovieDetailHeader from "./MovieDetailHeader";
import MovieDetailExtended from "./MovieDetailExtended";
import movies from "../mockedData/data.json";

export default function MovieDetail() {
    return (
        <Container>
            <Row>
              <Col className="mb-5" key={movies[0]._id}>
                <MovieDetailHeader data = {movies[0]}/>
                <MovieDetailExtended data = {movies[0]}/>
              </Col>
            </Row>
        </Container>
    );
}