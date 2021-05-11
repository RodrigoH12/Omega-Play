import React, { useState, useEffect } from 'react';
import { Form, Button, Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useStore from '../../zustand/login';
import useStoreMovies from '../../zustand/movies';
import '../../stylesheets/Forms.css';

export default function Login(props) {
    const user = useStore(state => state.user);
    const fetchUser = useStore(state => state.fetchUser);
    const [username, setUsername] = useState();
    const [pass, setPass] = useState();
    const [validated, setValidated] = useState(false);
    const { handleLogin } = props;
    const { getMoviesAxios, movies } = useStoreMovies();

    useEffect(() => {
        getMoviesAxios();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (username !== undefined && pass !== undefined) {
            fetchUser(username, pass);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchUser]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (username === user[0].userName && pass === user[0].password) {
                handleLogin(event);
                props.history.push('/home');
            } else {
                alert("User and password didn't match!")
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
                            {
                                movies.slice(Math.max(movies.length - 10, 0)).map((movie) => {
                                    return (
                                        <Carousel.Item key={movie._id}>
                                            <img
                                                className="carouselImgLogin"
                                                src={movie.images[0]}
                                                alt=""
                                            />
                                        </Carousel.Item>
                                    );
                                })
                            }
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
