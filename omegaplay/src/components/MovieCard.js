import React from "react";
import { Card } from "react-bootstrap";
import "../stylesheets/MovieCard.css";

export default function MovieCard({data}) {

    const getGenres = (genres) => {
        var result = '';
        genres.forEach(genre => {
            result = `${genre}, ${result}`
        });
        return result.slice(0, -2);
    };

    return (
        <Card className="h-100 shadow-sm rounded" bg='dark'>
            <Card.Img variant="top" src={data.images[0]} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-left text-white text-uppercase">{data.title}</Card.Title>
                <div>
                    <Card.Text className="alignleft">⭐{data.calification}/5</Card.Text>
                    <Card.Text className="alignright">📅 {data.releaseDate}</Card.Text>
                </div>
                <Card.Text>Country: {data.country}</Card.Text>
                <Card.Text>Genres: {getGenres(data.genres)}</Card.Text>
            </Card.Body>
        </Card>
    );
}