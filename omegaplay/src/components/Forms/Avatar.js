import React, { useState } from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import useStore from '../../zustand/login';
import '../../stylesheets/Forms.css';
import images from '../../mockedData/data.json'

export default function Avatar(props) {
    const avatars = images;
    const { handleLogin } = props;
    const addAvatar = useStore(state => state.addAvatar);
    const user = useStore(state => state.user);
    const [avatar, setAvatar] = useState(null);
    const selectedAvatar = (id) => {
        setAvatar(id);
    };
    const handleSubmit = (event) => {
        if (avatar !== null) {
            handleLogin(event);
            addAvatar(user, avatar);
            props.history.push('/home');
        } else {
            alert("You must select any avatar");
        }
    };
    return (
        <div>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Select an Avatar</h3>
                    <Container>
                        <Row>
                            {
                                avatars.map((data) => (
                                    < Col xs={4} key={data.id} className="colAvatar mb-3">

                                        <Card className="shadow-sm rounded avatarCard" as="a" onClick={() => selectedAvatar(data.id)} style={{ cursor: "pointer" }}>
                                            <Card.Img variant="top" src={data.src} className="avatarCard" />
                                        </Card>

                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                    <Button className="btn btn-primary btn-block" onClick={(event) => handleSubmit(event)}>Select Avatar</Button>
                </div >
            </div >
        </div >

    )
}
