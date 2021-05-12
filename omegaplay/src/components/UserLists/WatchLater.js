import React, { useEffect } from 'react'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieCardGrid from "../MovieList/MovieCardGrid";
import useStoreUser from '../../zustand/login';
import useStoreMovies from '../../zustand/movies';

export default function WatchLater(props) {
    const user = useStoreUser(state => state.user);
    const { getWatchLaterAxios, movies } = useStoreMovies();

    useEffect(() => {
        getWatchLaterAxios(user);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <h1 style={{ color: "white" }}>Watch Later</h1>
            <br />
            {
                movies.length === 0 ?
                    <>
                        <h3 style={{ color: "#0ca789" }}>This is currently empty.</h3>
                        <Link to="/home">Go Home</Link>
                    </>
                    :
                    <MovieCardGrid movies={movies}></MovieCardGrid>
            }
        </Container>
    );
}

