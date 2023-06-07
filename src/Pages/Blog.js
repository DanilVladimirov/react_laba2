import React, { Component } from 'react';
import {Container, Col, Row, Card, ListGroup} from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            <Row>
                <Col md="9">
                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img
                                width={200}
                                height={150}
                                className="mr-3"
                                src="https://st2.depositphotos.com/3261171/7891/i/450/depositphotos_78914256-stock-photo-man-drinking-tea-and-eading.jpg"
                                alt="photo" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5><a href='/blog1'>Blog post 1</a></h5>
                            <p>
                                Lorem
                            </p>
                        </div>
                    </div>

                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img
                                width={200}
                                height={150}
                                className="mr-3"
                                src="https://st3.depositphotos.com/3591429/18863/i/1600/depositphotos_188634212-stock-photo-man-reading-newspaper-fake-news.jpg"
                                alt="photo" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5><a href='/blog2'>Blog post 2</a></h5>
                            <p>
                                Lorem
                            </p>
                        </div>
                    </div>

                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img
                                width={200}
                                height={150}
                                className="mr-3"
                                src="https://c8.alamy.com/comp/BE4PYY/older-man-reading-newspaper-with-angry-expression-BE4PYY.jpg"
                                alt="photo" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5><a href='/blog3'>Blog post 3</a></h5>
                            <p>
                                Lorem
                            </p>
                        </div>
                    </div>

                </Col>
                <Col md="3">
                    <h5 className="text-center mt-5">Категорії</h5>

                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>категорія 1</ListGroup.Item>
                            <ListGroup.Item>категорія 2</ListGroup.Item>
                            <ListGroup.Item>категорія 3</ListGroup.Item>
                            <ListGroup.Item>категорія 4</ListGroup.Item>
                            <ListGroup.Item>категорія 5</ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Slide widget</Card.Title>
                            <Card.Text>
                                Lorem
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>

        );
    }
}

export default Blog;
