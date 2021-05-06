import React, { useState } from 'react';
import { Form, Button, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './custom.css';

export default function Login(props) {
    const [username, setUsername] = useState();
    const [pass, setPass] = useState();
    const [validated, setValidated] = useState(false);
    const { handleLogin } = props;

    const handleSubmit = (event) => {

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (username === "test" && pass === "123") {
                console.log("Username: " + username);
                console.log("Password: " + pass);
                handleLogin(event);
                props.history.push('/home'); 
            }
        }
        setValidated(true);
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <h3>Sign In</h3>
                    <Form.Group controlId="formGroupEmail" className="form-group">
                        <Carousel interval={3000}>
                            <Carousel.Item>
                                <img
                                    className="carouselImg"
                                    src="https://picsum.photos/200"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carouselImg"
                                    src="https://picsum.photos/200"
                                    alt=""
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="carouselImg"
                                    src="https://picsum.photos/200"
                                    alt=""
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Form.Group>

                    <Form.Group controlId="formGroupEmail" className="form-group">
                        <Form.Control type="text" placeholder="Enter username" className="form-control" required onChange={(e) => setUsername(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Please enter your username
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword" className="form-group">
                        <Form.Control type="password" placeholder="Enter Password" className="form-control" required onChange={(e) => setPass(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Please enter your password
                    </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
                    <p className="forgot-password text-right">
                        Do you want to <Link to='/sign-up'>sign up?</Link>
                    </p>
                </Form>
            </div>
        </div>
    )
}
