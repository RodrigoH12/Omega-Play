import React, { useState } from 'react';
import { Container, Form, FormControl, Button, Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import SideBarComponent from "./SideBarComponent";
import logo from "../logo.svg";

export default function ApplicationHeaderComponent() {
    const [sidebar, setSidebar] = useState(false);
    const [loginUser, setloginUser] = useState("OmegaDev");
    const [sessionStatus, setSessionStatus] = useState(false);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                {sessionStatus ?
                    <Icon.List size="40px" onClick={() => { setSidebar(!sidebar) }} />
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
                        <Button variant="outline" onClick={()=> {setSessionStatus(true)}}>Log in</Button>
                    }
                </Nav>
            </Navbar>
            <div>
                {sidebar ? <SideBarComponent /> : <div />}
            </div>
        </div>
    );
}