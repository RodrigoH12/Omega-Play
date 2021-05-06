import React from 'react'
import { Image, Row, Col, Jumbotron, Button} from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

export default function MovieDetailHeader({data}) {
    const playButtonClick = (e) => {
        console.log("Pressed " + e);
    }
    const getGenres = (genres) => {
        var result = '';
        genres.forEach(genre => {
            result = `${genre}, ${result}`
        });
        return result.slice(0, -2);
    };
    return (
        <Jumbotron fluid style={{ padding: '20px' }}>
            <Row>
                <Col md={5}>
                    <Image rounded width="100%" src={data.images[0]} />
                </Col>
                <Col align="left" md={4}>
                    <h1 >{data.title}</h1>
                    <div>
                        <Icon.StarFill />
                        <Icon.StarFill />
                        <Icon.StarFill />
                        <Icon.StarFill />
                        <Icon.Star />
                    </div>
                    <p>{data.duration}</p>

                    <br />
                    <br />
                    <p size="10px">Release Date: {data.releaseDate}</p>
                    <p>Genres: {getGenres(data.genres)}</p>
                    <p>Country: {data.country}</p>
                </Col>
                <Col align="left" md={3}>
                    <Row>

                        <Col align="right">
                            <Button variant="text" onClick={() => playButtonClick("play")}>
                                <Icon.PlayFill size={50} />
                            </Button>
                            <Button variant="text" onClick={() => playButtonClick("watchLater")}>
                                <Icon.ClockFill size={30} />
                            </Button>
                        </Col>
                    </Row>

                </Col>

            </Row>
        </Jumbotron>
    );
}