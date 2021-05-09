import React from 'react'
import { Image, Row, Col, Jumbotron } from "react-bootstrap";
import '../../stylesheets/MovieDetailExtended.css'

export default function MovieDetailExtended({ data }) {
    const arrayToList = (list) => {
        var result = '';
        list.forEach(item => {
            result = `${item}, ${result}`
        });
        return result.slice(0, -2);
    };
    return (
        <Jumbotron fluid style={{ padding: '20px' }}>
            <Col align="justify">
                <Row>
                    <Col md={3}>
                        <b>Summary:</b>
                    </Col>
                    <Col>
                        <p>{data.summary}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={5}>
                        <b>Director:</b>
                    </Col>
                    <Col>
                        <p>{arrayToList(data.directors)}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={5}>
                        <b>Cast:</b>
                    </Col>
                    <Col>
                        <p>{arrayToList(data.cast)}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} xs={5}>
                        <b>Production Company:</b>
                    </Col>
                    <Col>
                        <p>{data.productionCompany}</p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={3} xs={5}>
                        <b>Artwork:</b>
                    </Col>
                </Row>
                <br />
                <Row align="right">
                    <Col md={4} xs={6}>
                        <Image className="movieArtwork" width="100%" src={data.images[1]} />
                    </Col>
                    <Col md={4} xs={6}>
                        <Image className="movieArtwork" width="100%" src={data.images[2]} />   
                    </Col>
                    <Col md={4} xs={6}>
                        <Image className="movieArtwork" width="100%" src={data.images[3]} />
                    </Col>
                </Row>
            </Col>
        </Jumbotron>
    );
}