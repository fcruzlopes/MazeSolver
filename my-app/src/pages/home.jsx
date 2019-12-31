import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function () {
    return (
        <Container>
            <Row >
                <Col md={{ size: 3, offset: 1 }}>
                    <img className="portrait" src="https://scontent.fopo3-1.fna.fbcdn.net/v/t31.0-8/p960x960/28061253_2066537570041775_2094045737944237279_o.jpg?_nc_cat=110&_nc_ohc=Ag0exjXI9-UAQm2izl9xIHkMoDwutmjG5dcvJLAix86DFbPkfBBDF-3GA&_nc_ht=scontent.fopo3-1.fna&oh=775ff108b1ada54e740156e59abb5433&oe=5EB2740F" alt="Smiley face"></img>
                </Col>
                <Col sm="12" md={{ size: 4, offset: 1 }}>
                    <div id="border" className="App-content">
                        <p>Hi. I'm Filipe lopes, a </p>
                        <p>Junior Full Stack Developers</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}