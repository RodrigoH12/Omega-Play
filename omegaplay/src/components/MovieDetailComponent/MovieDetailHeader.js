import React, { useState } from 'react'
import { Image, Row, Col, Jumbotron, Button, Popover, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import '../../stylesheets/MovieDetailHeader.css';
import useStore from '../../zustand/login';

export default function MovieDetailHeader({ data }) {
    const [showScore, setShowScore] = useState(false);
    const addMovieHistory = useStore(state => state.addMovieHistory);
    const addMovieLater = useStore(state => state.addMovieLater);
    const user = useStore(state => state.user);

    const playButtonClick = (e) => {
        if (e === "play") {
            addMovieHistory(user, data._id);
        } else {
            addMovieLater(user, data._id);
        }
    }

    const movieUrl = data.src;

    const popoverButton = (e) => {
        return (
            <Popover className="movieDetailPopup">
                <Popover.Content>
                    {data.title} has been added to
                    {e === "History" ?
                        <Link to="/history" className="popupLink"> {e}</Link>
                        :
                        <Link to="/watch-later" className="popupLink"> {e}</Link>
                    }
                </Popover.Content>
            </Popover>
        );
    };

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

    const ToDateString = (date) => {
        var dateString = new Date(date).toLocaleDateString("en-GB");
        return dateString;
    }

    return (
        <Jumbotron fluid className="movie-detail-header">
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
                    <p size="10px">Release Date: {ToDateString(data.releaseDate)}</p>
                    <p>Genres: {getGenres(data.genres)}</p>
                    <p>Country: {data.country}</p>
                </Col>
                <Col align="left" md={3}>
                    <Row>

                        <Col align="right">
                            <OverlayTrigger trigger="click" placement="bottom-end" overlay={popoverButton("History")} transition className="movieOverlay">
                                <Button variant="text" onClick={() => { playButtonClick("play") }} href={movieUrl} target="_blank" rel="noopener noreferrer">
                                    <Icon.PlayFill size={50} />
                                </Button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="bottom-end" overlay={popoverButton("Watch Later")} transition className="movieOverlay">
                                <Button variant="text" onClick={() => { playButtonClick("watchLater") }}>
                                    <Icon.ClockFill size={30} />
                                </Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>

                </Col>

            </Row>
        </Jumbotron>
    );
}