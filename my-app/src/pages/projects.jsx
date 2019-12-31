import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

export default function () {

    return (
        <div>
            <div>
                <h3>Projects 2019</h3>
            </div>
            <Container>
                <Row >
                    <Col sm="12" md={{ size: 3, offset: 1 }}>
                        <Card>
                            <CardImg className="picture" top width='100%' src="https://bit.ly/2ZzJXgT" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>KillBox</CardTitle>
                                <CardText>2D puzzle platform game, where the player has to reach a key, that opens a door to move to the next level.</CardText>
                                <a href="https://github.com/carcaso/Killbox">
                                    <Button>Check It</Button>
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md={{ size: 3 }}>
                        <Card>
                            <CardImg className="picture" top width='100%' src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/ea/d9/b1/ead9b182-54fc-dee1-4576-4ea163522898/pr_source.jpg/1000x1000bb.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Paint Arena</CardTitle>
                                <CardText>Splat! Paint Arena! consists of a grid of squares, the player with most painted squares wins.</CardText>
                                <a href="https://gitlab.com/best-row/paint-arena">
                                    <Button>Check It</Button>
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md={{ size: 3 }}>
                        <Card>
                            <CardImg className="picture" top width='100%' src="https://i.ytimg.com/vi/2Q_ZzBGPdqE/maxresdefault.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Help</CardTitle>
                                <CardText>An app where it is possible to find every cause seeking for donations or volunteers in Portugal.</CardText>
                                <a href="https://github.com/carcaso/hackathon-grupo7">
                                    <Button>Check It</Button>
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}