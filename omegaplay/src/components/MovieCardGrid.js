import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import movies from "../mockedData/data.json";
import MovieCard from "./MovieCard";

export default function MovieCardGrid() {
    return (
        <Container>
          {" "}
          <Row>
          {movies.map((data) => (
              <Col className="mb-5" key={data._id}>
                <MovieCard data={data} />
              </Col>
            ))}
          </Row>
        </Container>
    );
}
