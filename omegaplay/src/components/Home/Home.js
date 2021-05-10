import React from 'react';
import Search from "../SearchComponent/Search";
import MoviesCarousel from './MoviesCarousel';


export default function Home(props) {

    return (
        <div>

            <MoviesCarousel />
            <Search />
        </div>
    )
}
