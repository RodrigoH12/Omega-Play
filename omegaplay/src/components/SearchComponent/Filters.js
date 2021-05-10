import React from 'react'
import { Dropdown, DropdownButton, Row } from "react-bootstrap";
import useStore from '../../zustand/filters';
import "../../stylesheets/MovieCard.css";

export default function Filters() {

	const {setGenre, setDate, setCountry} = useStore();

	return (
			<Row style={{justifyContent: 'center'}}>
				<DropdownButton id="dropdown-basic-button" variant="secondary" title="Genre" onSelect={(e) => setGenre(e)}>
					<Dropdown.Item eventKey="All">All</Dropdown.Item>
					<Dropdown.Item eventKey="Action">Action</Dropdown.Item>
					<Dropdown.Item eventKey="Superheroes">Superheroes</Dropdown.Item>
                    <Dropdown.Item eventKey="Thriller">Thriller</Dropdown.Item>
				</DropdownButton>
				<DropdownButton id="dropdown-basic-button" variant="secondary" title="Date" onSelect={(e) => setDate(e)}>
					<Dropdown.Item eventKey="All" >All</Dropdown.Item>
                    <Dropdown.Item eventKey="This Week">This week</Dropdown.Item>
					<Dropdown.Item eventKey="This Month">This month</Dropdown.Item>
                    <Dropdown.Item eventKey="This Year">This year</Dropdown.Item>
				</DropdownButton>
				<DropdownButton id="dropdown-basic-button" variant="secondary" title="Country"onSelect={(e) => setCountry(e)}>
					<Dropdown.Item eventKey="All">All</Dropdown.Item>
					<Dropdown.Item eventKey="United States">United States</Dropdown.Item>
					<Dropdown.Item eventKey="Bolivia">Bolivia</Dropdown.Item>
				</DropdownButton>
			</Row>
	);
}
