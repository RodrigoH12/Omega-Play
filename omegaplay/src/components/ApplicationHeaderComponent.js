import React, { useState } from 'react';
import { Container, Form, FormControl, Button, Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import SideBarComponent from "./SideBarComponent";
import logo from "../logo.svg";
import "../stylesheets/ApplicationHeaderComponent.css";

export default function ApplicationHeaderComponent() {
    const [sidebar, setSidebar] = useState(true);
    const [loginUser, setloginUser] = useState("OmegaDev");
    const [sessionStatus, setSessionStatus] = useState(false);

    return (
        <div className="header-toolbar">
            <Navbar bg="light" expand="lg" style={{ height: "64px" }}>
                {sessionStatus ?
                    <div>
                        <Icon.List size="40px" onClick={() => { setSidebar(!sidebar) }} />
                        <div className={sidebar ? "sidebar sidebarOn" : "sidebar sidebarOff"}>
                            <SideBarComponent />
                        </div>
                    </div>
                    :
                    <div />
                }
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Navbar.Brand>
                            <Image src={logo} width="50px"></Image>
                            Omega Play
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    {sessionStatus ?
                        <Navbar.Text>
                            Signed in as: <b>{loginUser}</b>
                        </Navbar.Text>
                        :
                        <Button variant="outline" onClick={() => { setSessionStatus(true) }}>Log in</Button>
                    }
                </Nav>
            </Navbar>
        </div>
    );
}