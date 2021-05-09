import React, { useState } from 'react'
import { Dropdown, DropdownButton, Row } from "react-bootstrap";

export default function Filters() {
	const [genre, setGenre] = useState("All");
	const [date, setDate] = useState("All");
	const [country, setCountry] = useState("All");

	return (
			<Row>
				<DropdownButton id="dropdown-basic-button" variant="secondary" title="Genre" style={{margin: '10px'}} onSelect={(e) => setGenre(e)}>
					<Dropdown.Item eventKey="All">All</Dropdown.Item>
					<Dropdown.Item eventKey="Action">Action</Dropdown.Item>
					<Dropdown.Item eventKey="Superheroes">Superheroes</Dropdown.Item>
                    <Dropdown.Item eventKey="Thriller">Thriller</Dropdown.Item>
				</DropdownButton>
				<DropdownButton id="dropdown-basic-button" variant="secondary" title="Date" style={{margin: '10px'}} onSelect={(e) => setDate(e)}>
					<Dropdown.Item eventKey="All" >All</Dropdown.Item>
                    <Dropdown.Item eventKey="This Week">This week</Dropdown.Item>
					<Dropdown.Item eventKey="This Month">This month</Dropdown.Item>
                    <Dropdown.Item eventKey="This Year">This year</Dropdown.Item>
				</DropdownButton>
				<DropdownButton id="dropdown-basic-button" variant="secondary" title="Country" style={{margin: '10px'}} onSelect={(e) => setCountry(e)}>
					<Dropdown.Item eventKey="All">All</Dropdown.Item>
					<Dropdown.Item eventKey="United States">United States</Dropdown.Item>
					<Dropdown.Item eventKey="Bolivia">Bolivia</Dropdown.Item>
				</DropdownButton>
				{console.log(`genre: ${genre}, date: ${date}, country: ${country}`)}
			</Row>
	);
}
