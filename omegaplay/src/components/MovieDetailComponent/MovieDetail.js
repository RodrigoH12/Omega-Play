import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import MovieDetailHeader from "./MovieDetailHeader";
import MovieDetailExtended from "./MovieDetailExtended";
import axios from 'axios';

export default function MovieDetail(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const getMoviesAxios = async () => {
      try {
        const { data } = await axios.get('http://localhost:4004/api/movie');
        console.log(data);
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMoviesAxios();

  }, []);

  return (
    <Container style={{paddingTop:"100px"}}>
      {movies.map((data) => (
        <Row>
          <Col className="mb-5" key={data._id}>
            <MovieDetailHeader data={data} />
            <MovieDetailExtended data={data} />
          </Col>
        </Row>
      ))}
    </Container>
  );
}