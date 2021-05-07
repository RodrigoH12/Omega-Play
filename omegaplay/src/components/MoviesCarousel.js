import React, { useState, useEffect } from "react";
import "../stylesheets/MovieCard.css";
import { Carousel } from "react-bootstrap";
import axios from 'axios';

export default function MoviesCarousel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
	
		const getMoviesAxios = async () => {
			try {
				const {data} = await axios.get('http://localhost:4004/api/movie');
        if (data !== undefined) {
          const lastFiveMovies = data.slice(Math.max(data.length - 5, 0));
				  setMovies(lastFiveMovies);
        }
			} catch (err) {
				console.log(err);
			}
		};

		getMoviesAxios();
	
	}, []);

  return (
    <div style={{paddingTop: '30px', paddingBottom: '30px'}}>   
      <Carousel>
        {
          movies.map((movie) => {
            return (
              <Carousel.Item interval={5000} key={movie._id}>
                <img id="carouselImg"
                  className="d-block w-100"
                  src={movie.images[0]}
                  alt=""
                />
                <Carousel.Caption>
                  <h3>{movie.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        }
      </Carousel>
    </div>
  );
}
