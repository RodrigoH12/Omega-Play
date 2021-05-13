import React, { useEffect } from "react";
import "../../stylesheets/MovieCard.css";
import { Carousel } from "react-bootstrap";
import useStoreMovies from '../../zustand/movies';
import { useHistory } from "react-router-dom";

export default function MoviesCarousel() {

  const { getMoviesAxios, movies } = useStoreMovies();
  const history = useHistory();
  
  useEffect(() => {
    getMoviesAxios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const OpenMovieDetails = (id) => {
    history.push("/movie/" + id);
  }

  return (
    <div style={{ paddingBottom: '30px' }}>
      <Carousel className="moviesCarousel">
        {
          movies.slice(Math.max(movies.length - 10, 0)).map((movie) => {
            return (
              <Carousel.Item interval={5000} key={movie._id} onClick={()=>OpenMovieDetails(movie._id)}>
                <img id="carouselImg"
                  className="d-block w-100"
                  src={movie.images[0]}
                  alt=""
                />
              </Carousel.Item>
            );
          })
        }
      </Carousel>
    </div>
  );
}
