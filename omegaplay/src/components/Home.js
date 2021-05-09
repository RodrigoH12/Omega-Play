import React from 'react';
import { Link } from "react-router-dom";
import useStore from '../zustand/login';

export default function Home(props) {
    const user  = useStore(state=>state.user);
    return (
        <div>
            <h1>Bienvenido! {user.length}</h1>
            <Link to='/sign-in'>sign in? {user.length} </Link>
            <button onClick={props.handleLogout}>Log Out</button>
        </div>
    )
}
