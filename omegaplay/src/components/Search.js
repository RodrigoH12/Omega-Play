import React, { useState } from 'react'
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import movies from "../mockedData/data.json";
import MovieCardGrid from "./MovieCardGrid";
import Filters from "./Filters";

export default function Search() {
	const [search, setSearch] = useState("");

	const filterMovies = () => {
		var filteredResult = movies;

		if (search != "") {
			filteredResult = movies.filter(movie => movie.title.toLowerCase() === search.toLowerCase());
		}

		return filteredResult;
	};

	return (
		<Container>
			<InputGroup className="mb-3">
				<FormControl placeholder="Search for a movie" onChange={(e) => setSearch(e.target.value)}/>
				<InputGroup.Append>
					<Button variant="secondary">Search</Button>
				</InputGroup.Append>
			</InputGroup>
			<Filters/>
			<MovieCardGrid movies={filterMovies()}></MovieCardGrid>
		</Container>
	);
}
