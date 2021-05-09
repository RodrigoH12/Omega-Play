import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import MovieCardGrid from "../MovieList/MovieCardGrid";
import Filters from "./Filters";
import axios from 'axios';

export default function Search() {
	const [search, setSearch] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(() => {
	
		const getMoviesAxios = async () => {
			try {
				const {data} = await axios.get('http://localhost:4004/api/movie');
				console.log(data);
				setMovies(data);
			} catch (err) {
				console.log(err);
			}
		};

		getMoviesAxios();
	
	}, []);

	const filterMovies = () => {
		var filteredResult = movies;

		if (search !== "") {
			filteredResult = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
		}

		return filteredResult;
	};

	return (
		<Container>
			<InputGroup className="mb-3">
				<FormControl placeholder="Search for a movie" onChange={(e) => setSearch(e.target.value)}/>
			</InputGroup>
			<Filters/>
			<MovieCardGrid movies={filterMovies()}></MovieCardGrid>
		</Container>
	);
}
