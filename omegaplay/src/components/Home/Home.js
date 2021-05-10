import React from 'react';
import { Link } from "react-router-dom";
import Search from "../SearchComponent/Search";
import MoviesCarousel from './MoviesCarousel';
import useStore from '../../zustand/login';

export default function Home(props) {
    const user = useStore(state => state.user);
    return (
        <div>

            <MoviesCarousel />
            <Search />
            <h1>Bienvenido! {user.length}</h1>
            <Link to='/sign-in'>sign in? {user.length} </Link>
            <button onClick={props.handleLogout}>Log Out</button>
        </div>
    )
}
