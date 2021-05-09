import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import useStore from '../../zustand/register';
import './custom.css';

export default function Register(props) {
    const registerUser = useStore(state => state.registerUser);
    const [username, setUsername] = useState();
    const [pass, setPass] = useState();
    const [repeatPass, setRepeatPass] = useState();
    const [email, setEmail] = useState();
    const [birth, setBirth] = useState();
    const [genre, setGenre] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const userObject = {
                userName: username,
                password: pass,
                email: email,
                genre: genre,
                birthDate: birth,
                country: country,
                city: city

            }
            if (pass === repeatPass) {
                registerUser(userObject);
                props.history.push('/avatars');
            } else {
                alert("The passwords you entered doesn't match!");
            }
        }
        setValidated(true);
    };
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>
                    <Form.Group controlId="formGroupUsername" className="form-group">
                        <Form.Control type="text" placeholder="Enter username" className="form-control" required onChange={(e) => setUsername(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            You have to choose a username
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword" className="form-group">
                        <Form.Control type="password" placeholder="Enter Password" className="form-control" required onChange={(e) => setPass(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Please enter your password
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGroupRepeatPassword" className="form-group">
                        <Form.Control type="password" placeholder="Repeat Password" className="form-control" required onChange={(e) => setRepeatPass(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Please repeat your password
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGroupEmail" className="form-group">
                        <Form.Control type="email" placeholder="Email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Your email is missing, it has to contain @
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGroupBirthday" className="form-group">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date" className="form-control" required onChange={(e) => setBirth(e.target.value)} />
                        <Form.Control.Feedback type="invalid">
                            Your birth date is missing
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGroupGenre" className="form-group">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control as="select" defaultValue="Do not specify" className="form-control" required onChange={(e) => setGenre(e.target.value)}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGroupCountry" className="form-group">
                            <Form.Control type="text" placeholder="Country" className="form-control" required onChange={(e) => setCountry(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Please enter your country
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGroupCity" className="form-group">
                            <Form.Control type="text" placeholder="City" className="form-control" required onChange={(e) => setCity(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                Please enter your city
                        </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Button type="submit" className="btn btn-primary btn-block">Sign Up</Button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/sign-in">sign in?</a>
                    </p>
                </Form>
            </div>
        </div>
    )
}
