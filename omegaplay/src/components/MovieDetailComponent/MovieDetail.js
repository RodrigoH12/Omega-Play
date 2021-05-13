import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import MovieDetailHeader from "./MovieDetailHeader";
import MovieDetailExtended from "./MovieDetailExtended";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const id = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const getMoviesAxios = async () => {
      try {
        const { data } = await axios.get('http://localhost:4004/api/movie/id/' + id.id);
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMoviesAxios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {movies.map((data) => (
        <Row key={data}>
          <Col className="mb-5" key={data}>
            <MovieDetailHeader data={data} />
            <MovieDetailExtended data={data} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}