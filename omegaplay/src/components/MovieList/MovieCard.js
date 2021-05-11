import React from "react";
import { Card } from "react-bootstrap";
import "../../stylesheets/MovieCard.css";
import { useHistory } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

export default function MovieCard({ data }) {
   
    const history = useHistory();

    const OpenMovieDetails = () => {
        history.push("/movie/"+data._id);
    }

    const getGenres = (genres) => {
        var result = '';
        genres.forEach(genre => {
            result = `${genre}, ${result}`
        });
        return result.slice(0, -2);
    };

    const changeDateformat = (date) => {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dt = date.getDate();
        var result;

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        result = dt + '-' + month + '-' + year;
        return result;
    }

    return (
            <Card className="h-100 shadow-sm rounded movie-card" onClick={OpenMovieDetails}>
                <Card.Img variant="top" src={data.images[0]} className="movie-card-img"/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-left text-white text-uppercase">{data.title}</Card.Title>
                    <div>
                        <Card.Text className="alignleft"><Icon.StarFill style={{marginBottom: '5px'}}/> {data.calification}/5</Card.Text>
                        <Card.Text className="alignright"><Icon.CalendarEvent style={{marginBottom: '5px'}}/> {changeDateformat(new Date(data.releaseDate))}</Card.Text>
                    </div>
                    <Card.Text>Country: {data.country}</Card.Text>
                    <Card.Text>Genres: {getGenres(data.genres)}</Card.Text>
                </Card.Body>
            </Card>
    );
}