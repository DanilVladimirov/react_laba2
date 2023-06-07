import React, { Component } from 'react';
import CarouselBoxHk from "../CarouselBoxHk";
import {Button, Card, CardImg, Container} from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBoxHk />
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <div className="row">
                        <div className="col">
                            <Card className="m-4 text-center" bg="light" border="primary">
                                <Card.Img
                                    variant="top"
                                    src="https://cdn.geekwire.com/wp-content/uploads/2015/09/FIFA-16-Brazil-Team-600x300.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>Прогери</Card.Title>
                                    <Card.Text>
                                        Команда 1
                                    </Card.Text>
                                    <Button variant="primary" href='/team1'>Про команду</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="m-4 text-center" bg="light">
                                <Card.Img
                                    variant="top"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHOG3xhVMR3mi6xZKkVIm9p53Ad6MxoVhMw&usqp=CAU"
                                />
                                <Card.Body>
                                    <Card.Title>Природознавці</Card.Title>
                                    <Card.Text>
                                        Команда 2
                                    </Card.Text>
                                    <Button variant="primary" href='/team2'>Про команду</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col">
                            <Card className="m-4 text-center" bg="light">
                                <Card.Img
                                    variant="top"
                                    className=''
                                    src="https://blog.qbsmsp.com/hs-fs/hubfs/lwteamsstrategies600x300gray.png?width=600&name=lwteamsstrategies600x300gray.png"
                                />
                                <Card.Body>
                                    <Card.Title>Девопсери</Card.Title>
                                    <Card.Text>
                                        Команда 3
                                    </Card.Text>
                                    <Button variant="primary" href='/team3'>Про команду</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Container>
            </>

        );
    }
}

export default Home;
