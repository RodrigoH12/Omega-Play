import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Container } from "react-bootstrap";
import MovieCardGrid from "../MovieList/MovieCardGrid";
import Filters from "./Filters";
import useStore from '../../zustand/filters';
import useStoreMovies from '../../zustand/movies';

export default function Search() {
	const [search, setSearch] = useState("");

	const { genre, date, country, setGenre, setDate, setCountry } = useStore();
	const { getMoviesAxios, movies } = useStoreMovies();

	useEffect(() => {
		getMoviesAxios();
		setGenre("All");
		setDate("All");
		setCountry("All");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const filterMovies = () => {
		var filteredResult = movies;

		if (search !== "") {
			filteredResult = filteredResult.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));
		}
		if (genre !== "All") {
			filteredResult = filteredResult.filter(movie => movie.genres.includes(genre));
		}
		if (date !== "All") {
			filteredResult = filteredResult.filter(movie => isOnDate(date, new Date(movie.releaseDate)));
		}
		if (country !== "All") {
			filteredResult = filteredResult.filter(movie => movie.country === country);
		}

		return filteredResult;
	};

	const isOnDate = (filter, date) => {
		var currentDate = new Date();
		var onDate = false;

		if (filter === "This Week") {
			var sevenDaysAgo = new Date()
			sevenDaysAgo = new Date(sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7));
			onDate = isBetween(date, sevenDaysAgo, currentDate);
		} else if (filter === "This Month") {
			var oneMonthAgo = new Date()
			oneMonthAgo = new Date(oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1));
			onDate = isBetween(date, oneMonthAgo, currentDate);
		} else {
			var oneYearAgo = new Date()
			oneYearAgo = new Date(oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1));
			onDate = isBetween(date, oneYearAgo, currentDate);
		}

		return onDate;
	};

	const isBetween = (date, min, max) => (date.getTime() >= min.getTime() && date.getTime() <= max.getTime());

	return (
		<Container>
			<InputGroup className="mb-3">
				<FormControl placeholder="Search for a movie" onChange={(e) => setSearch(e.target.value)} />
			</InputGroup>
			<Filters />
			<MovieCardGrid movies={filterMovies()}></MovieCardGrid>
		</Container>
	);
}
