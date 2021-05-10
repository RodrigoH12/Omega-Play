import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import MovieCardGrid from "../MovieList/MovieCardGrid";
import useStoreUser from '../../zustand/login';
import axios from 'axios';

export default function WatchLater(props) {
    const [watchLater, setWatchLater] = useState([]);
    const user = useStoreUser(state => state.user);

    useEffect(() => {
        const getWatchLaterAxios = async () => {
            try {
                const { data } = await axios.get('http://localhost:4004/api/user/' + user[0]._id + '/watch-later');
                setWatchLater(data[0].watchLater);
            } catch (err) {
                console.log(err);
            }
        };
        getWatchLaterAxios();
    }, []);



    return (
        <Container style={{ paddingTop: "100px" }}>
            <h1 style={{ color: "white" }}>Watch Later</h1>
            <br/>
            <MovieCardGrid movies={watchLater}></MovieCardGrid>
        </Container>
    );
}
