import React from "react";
import { Card } from "react-bootstrap";
import '../stylesheets/MovieCard.css'

export default function MovieCard({data}) {

    const getGenres = (genres) => {
        var result = '';
        genres.forEach(genre => {
            result = `${genre}, ${result}`
        });
        return result.slice(0, -2);
    };

    return (
        <Card className="h-100 shadow-sm rounded">
            <Card.Img variant="top" src={data.images[0]} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="text-left text-white text-uppercase">{data.title}</Card.Title>
                <Card.Text>Estreno: {data.releaseDate}</Card.Text>
                <Card.Text>Géneros: {getGenres(data.genres)}</Card.Text>
                <Card.Text>Calificación: {data.calification}/5</Card.Text>
                <Card.Text>País: {data.country}</Card.Text>
            </Card.Body>
        </Card>
    );
}