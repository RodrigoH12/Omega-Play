import React from "react";
import "../stylesheets/MovieCard.css";
import { Carousel } from "react-bootstrap";
import movies from "../mockedData/data.json";

export default function MoviesCarousel() {
    return (
      <div style={{paddingBottom: '100px'}}>   
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
