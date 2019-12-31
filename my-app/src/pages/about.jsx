/*eslint-disable*/
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function () {

    return (
        <Container>
            <Row >
                <Col sm="12" md={{ size: 4, offset: 3 }}>
                    <div id="border" class="App-content" >
                        <h3 >About</h3>
                        <p>During my last years, I have been taking care of vineyards.
                            To have good grapes && to produce good wine, it is necessary
                            to dedicate many hours of work (even if you are tired or the
                            weather is not favorable). Since I learned how to code, I treat
                            each snippet of code the same way as I treat the vineyards.
                            So if your grapes are rip && you need a Software Developer for
                             your harvest season, you found him.
                        </p>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="App-content">
                        <img className= "picture" src="https://media.licdn.com/dms/image/C5603AQFSK64Tqg2ySw/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=sh1s6wS-rnTdiHQWaNhvOGloH78g7nVaO3AP1rkExwo" alt="Smiley face"></img>
                    </div>
                </Col>
            </Row>
             <Row >
                 <Col md={{size: 2, offset:2}}>
                    <div className="App-content">
                        <img className= "picture" src="http://kaellawinery.com/wp-content/uploads/2019/11/Singletree-Winery_credit_JustineRusso-0038.jpg" alt="Smiley face"></img>
                    </div>
                </Col>
                <Col sm="12" md={{ size: 4, offset: 2 }}>
                    <div id="border" class="App-content" >
                        <h3 >Wine Consultant</h3>
                        <p>Following my father's steps and wanting to seek my independence I 
                            decide to work in the winery area where I performed several functions.

                            // Lab works: check maturation of the grapes; wine degree analysis

                            // Winery works: cellar maintenance; crush grapes; reassembly of the wine; quality control of the wine; wine packaging

                            // Social works: customer services
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}