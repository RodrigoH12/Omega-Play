import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieCardGrid from "../MovieList/MovieCardGrid";
import useStoreUser from '../../zustand/login';
import axios from 'axios';

export default function History(props) {
    const [history, setHistory] = useState([]);
    const user = useStoreUser(state => state.user);

    useEffect(() => {
        const getHistoryAxios = async () => {
            try {
                const { data } = await axios.get('http://localhost:4004/api/user/' + user[0]._id + '/history');
                setHistory(data[0].history);
            } catch (err) {
                console.log(err);
            }
        };
        getHistoryAxios();
    }, []);



    return (
        <Container>
            <h1 style={{ color: "white" }}>History</h1>
            <br />
            {
                history.length ===0 ?
                <>
                <h3 style={{ color: "green" }}>This is currently empty.</h3>
                <Link to="/home">Go Home</Link>
                </>
                :
                <MovieCardGrid movies={history}></MovieCardGrid>
            }
        </Container>
    );
}

