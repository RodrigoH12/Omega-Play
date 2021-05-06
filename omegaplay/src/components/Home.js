import React from 'react';
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
        <div>
            <h1>Bienvenido!</h1>
            <Link to='/sign-in'>sign in?</Link>
            <button onClick={props.handleLogout}>Log Out</button>
        </div>
    )
}
