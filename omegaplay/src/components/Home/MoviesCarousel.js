import React, { useEffect } from "react";
import "../../stylesheets/MovieCard.css";
import { Carousel } from "react-bootstrap";
import useStoreMovies from '../../zustand/movies';

export default function MoviesCarousel() {

  const { getMoviesAxios, movies } = useStoreMovies();

  useEffect(() => {
    getMoviesAxios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ paddingBottom: '30px' }}>
      <Carousel className="moviesCarousel">
        {
          movies.slice(Math.max(movies.length - 5, 0)).map((movie) => {
            return (
              <Carousel.Item interval={5000} key={movie._id}>
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
