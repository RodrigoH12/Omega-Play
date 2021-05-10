import React, { useState } from 'react';
import { Button, Navbar, Nav, Image } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import SideBarComponent from "./SideBarComponent";
import logo from "../../assets/logo.svg";
import "../../stylesheets/ApplicationHeaderComponent.css";

export default function ApplicationHeaderComponent() {
    const [sidebar, setSidebar] = useState(true);
    const [loginUser, setloginUser] = useState("OmegaDev");
    const [sessionStatus, setSessionStatus] = useState(false);

    return (
        <div className="header-toolbar">
            <Navbar className="justify-content-between" bg="dark" expand="lg" style={{ height: "64px" }}>
                <Navbar id="basic-navbar-nav">
                    <Nav>
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
                        <Navbar.Brand>
                            <Image src={logo} width="50px"></Image>
                            Omega Play
                        </Navbar.Brand>
                    </Nav>
                </Navbar>
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