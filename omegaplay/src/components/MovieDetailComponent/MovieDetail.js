import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import MovieDetailHeader from "./MovieDetailHeader";
import MovieDetailExtended from "./MovieDetailExtended";

export default function MovieDetail({ data }) {
    return (
        <Container>
            <Row>
              <Col className="mb-5" key={data._id}>
                <MovieDetailHeader data = {data}/>
                <MovieDetailExtended data = {data}/>
              </Col>
            </Row>
        </Container>
    );
}