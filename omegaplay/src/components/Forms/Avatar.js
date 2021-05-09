import React, {useState} from 'react';
import { Card, Button, Col, Container, Row } from 'react-bootstrap';
import useStore from '../../zustand/register';
import './custom.css';

export default function Avatar(props) {
    const avatars = [
        {
            "id": 1,
            "src": "https://picsum.photos/200"
        }, {
            "id": 2,
            "src": "https://picsum.photos/200"
        },
        {
            "id": 3,
            "src": "https://picsum.photos/200"
        },
        {
            "id": 4,
            "src": "https://picsum.photos/200"
        },
        {
            "id": 5,
            "src": "https://picsum.photos/200"
        },
        {
            "id": 6,
            "src": "https://picsum.photos/200"
        },
        {
            "id": 7,
            "src": "https://picsum.photos/200"
        },
        {
            "id": 8,
            "src": "https://picsum.photos/200"
        },
        {
            "id": 9,
            "src": "https://picsum.photos/200"
        }];
    const { handleLogin } = props;
    const addAvatar = useStore(state => state.addAvatar);
    const user = useStore(state => state.user);
    const [avatar, setAvatar] = useState(null);
    const selectedAvatar = (id) => {
        setAvatar(id);
    };
    const handleSubmit = (event) => {
        if (avatar !== null) {
            console.log("avatar id: " + avatar);
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
                    <Container>
                        <Row>
                            {
                                avatars.map((data) => (
                                    < Col xs={4} key={data.id} className="colAvatar mb-3">

                                        <Card className="shadow-sm rounded" as="a" onClick={() => selectedAvatar(data.id)} style={{ cursor: "pointer" }}>
                                            <Card.Img variant="top" src={data.src} />
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
