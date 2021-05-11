import React, {useState} from 'react'
import { Dropdown, DropdownButton, Row } from "react-bootstrap";
import "../../stylesheets/MovieCard.css";
import useStore from '../../zustand/filters';
import useStoreMovies from '../../zustand/movies';

export default function Filters() {
	const [genreTitle, setGenreTitle] = useState("All");
	const [dateTitle, setDateTitle] = useState("All");
	const [countryTitle, setCountryTitle] = useState("All");

	const {setGenre, setDate, setCountry} = useStore();

	const { movies } = useStoreMovies();

	const getAllGenres = () => {
		var genresArray = [];
		
		movies.forEach(movie => {
			movie.genres.forEach(genre => {
				checkDuplicateValue(genresArray, genre);
			});
		});

		return genresArray;
	};

	const getAllCountries = () => {
		var countriesArray = [];

		movies.forEach(movie => {
			checkDuplicateValue(countriesArray, movie.country);
		});

		return countriesArray;
	};

	const checkDuplicateValue = (array, value) => {
		if (array.includes(value) === false) array.push(value);
	}

	return (
			<Row style={{justifyContent: 'center'}}>
				<p className="FilterTitles">Genre:</p>
				<DropdownButton id="dropdown-basic-button" variant="secondary" title={genreTitle} onSelect={(e) => {setGenre(e); setGenreTitle(e)}}>
					<Dropdown.Item eventKey="All">All</Dropdown.Item>
					{
					getAllGenres().map((genre) => {
						return (
							<Dropdown.Item key={genre} eventKey={genre}>{genre}</Dropdown.Item>
						);
					})
					}
				</DropdownButton>
				<p className="FilterTitles">Date:</p>
				<DropdownButton id="dropdown-basic-button" variant="secondary" title={dateTitle} onSelect={(e) => {setDate(e); setDateTitle(e)}}>
					<Dropdown.Item eventKey="All" >All</Dropdown.Item>
                    <Dropdown.Item eventKey="This Week">This week</Dropdown.Item>
					<Dropdown.Item eventKey="This Month">This month</Dropdown.Item>
                    <Dropdown.Item eventKey="This Year">This year</Dropdown.Item>
				</DropdownButton>
				<p className="FilterTitles">Country:</p>
				<DropdownButton id="dropdown-basic-button" variant="secondary" title={countryTitle} onSelect={(e) => {setCountry(e); setCountryTitle(e)}}>
					<Dropdown.Item eventKey="All">All</Dropdown.Item>
					{
					getAllCountries().map((country) => {
						return (
							<Dropdown.Item key={country} eventKey={country}>{country}</Dropdown.Item>
						);
					})
					}
				</DropdownButton>
			</Row>
	);
}
