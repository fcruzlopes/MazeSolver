/*eslint-disable*/

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import FetchHome from '../pages/home';
import FetchAbout from '../pages/about';
import Fetchprojects from '../pages/projects';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <Router>
            <div>
                <Navbar light>
                    <NavbarToggler onClick={toggleNavbar}  >
                        <img style={{ height: 30, width: 30 }} src={require("../images/logo.png")} />
                    </NavbarToggler>
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/projects/">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about/">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/fcruzlopes">
                                    <img style={{ height: 20, width: 20 }} src={require("../images/git.png")} />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.linkedin.com/in/fcruzlopes/">
                                    <img style={{ height: 20, width: 20 }} src={require("../images/linkedin.png")} />
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                <Switch>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>


    );
}

function Home() {
    return (
        <FetchHome />
    );
}

function Projects() {
    return (
        <Fetchprojects />
    );

}

function About() {
    return (
       <FetchAbout />
    );
}

export default Header;