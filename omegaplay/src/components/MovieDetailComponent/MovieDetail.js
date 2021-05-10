import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import MovieDetailHeader from "./MovieDetailHeader";
import MovieDetailExtended from "./MovieDetailExtended";
import axios from 'axios';
import useStore from '../../zustand/movie';

export default function MovieDetail() {
  const movie = useStore(state => state.movie);
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const getMoviesAxios = async () => {
      try {
        const { data } = await axios.get('http://localhost:4004/api/movie/id/'+movie);
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
        <Row>
          <Col className="mb-5" key={movie}>
            <MovieDetailHeader data={movie} />
            <MovieDetailExtended data={movie} />
          </Col>
        </Row>
    </Container>
  );
}