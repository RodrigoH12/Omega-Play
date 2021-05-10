import React, { useState } from 'react';
import { Button, Navbar, Nav, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import SideBarComponent from "./SideBarComponent";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import useStore from '../../zustand/login';
import "../../stylesheets/ApplicationHeaderComponent.css";

export default function ApplicationHeaderComponent(props) {
    const user = useStore(state => state.user);
    const [sidebar, setSidebar] = useState(true);

    return (
        <div className="header-toolbar">
            <Navbar className="justify-content-between" bg="dark" expand="lg" style={{ height: "64px" }}>
                <Navbar id="basic-navbar-nav">
                    <Nav>
                        {props.user ?
                            <div>
                                <Icon.List size="40px" onClick={() => { setSidebar(!sidebar) }} />
                                <div className={sidebar ? "sidebar sidebarOn" : "sidebar sidebarOff"}>
                                    <SideBarComponent />
                                </div>
                            </div>
                            :
                            <div />
                        }
                        <Navbar.Brand>
                            <Image src={logo} width="50px"></Image>
                            Omega Play
                        </Navbar.Brand>
                    </Nav>
                </Navbar>
                <Nav>
                    {props.user ?
                        <div>
                            <Navbar.Text>
                                Signed in as: {user[0].userName}
                            </Navbar.Text>
                            <Button onClick={props.handleLogout}>Log Out</Button> </div>
                        :
                        <Button href='/sign-in'>Login</Button>
                    }
                </Nav>
            </Navbar>
        </div>
    );
}