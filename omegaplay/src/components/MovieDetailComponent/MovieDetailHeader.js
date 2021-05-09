import React, { useState } from 'react'
import { Image, Row, Col, Jumbotron, Button } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import '../../stylesheets/MovieDetailHeader.css'

export default function MovieDetailHeader({ data }) {
    const [showScore, setShowScore] = useState(false);

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

    const GetStars = (calification) => {
        var key = 1;
        var temp = calification.calification;
        var result = '';
        for (var i = 0; i < 5; i++) {
            if (temp >= 0.5) {
                if (temp < 1) {
                    result = result + '1';
                    temp -= 0.5;
                } else {
                    result = result + '2';
                    temp -= 1;
                }
            } else {
                result = result + '0';
            }
        }
        const starList = Array.from(result);
        const listItems = starList.map((c) => {
            key++;
            if (c > 0) {
                if (c > 1) {
                    c -= 1;
                    return <Icon.StarFill key={key} />
                } else {
                    c -= 0.5;
                    return <Icon.StarHalf key={key} />;
                }
            } else {
                return <Icon.Star key={key} />
            }
        });
        return (
            <div>{listItems}</div>
        );
    };

    return (
        <Jumbotron fluid style={{ padding: '20px' }}>
            <Row>
                <Col md={5}>
                    <Image className="movieThumbnail" src={data.images[0]} />
                </Col>
                <Col align="left" md={4}>
                    <h2>{data.title}</h2>
                    <div
                        onMouseEnter={() => setShowScore(true)}
                        onMouseLeave={() => setShowScore(false)}>
                        {showScore ?
                            <b><Icon.StarFill /> {data.calification}</b> : <GetStars calification={data.calification} />}
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