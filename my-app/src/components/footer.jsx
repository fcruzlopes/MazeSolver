/*eslint-disable*/
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"

import FetchContact from '../pages/contact';

export default function () {
    return (
        <Router>
            <div id="border-top" style={{ marginTop: 300 }}>
                <Container>
                    <Row >
                        <Col sm="12" md={{ size: 2, offset: 0 }}>
                            <a href="/contact">
                                <img id='email' className="icon" src={require('../images/contact-us.png')} />
                            </a>
                            Find me here ;D
                    </Col>
                        <Col sm="12" md={{ size: 2, offset: 8 }}>
                            Filipe Lopes
                    </Col>
                    </Row>
                </Container>
            </div>

            <Route path="/contact">
                <Contact />
            </Route>
        </Router>
    );
}

function Contact (){
    return(
        <FetchContact />
    );
}